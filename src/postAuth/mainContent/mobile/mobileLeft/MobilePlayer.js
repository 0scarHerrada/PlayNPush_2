import React, { useState, useEffect } from 'react';

function MobilePlayer(props) {

    const [alphaPlaylist, setAlphaPlaylist] = useState([])

    useEffect(() => {
        setAlphaPlaylist(props.alpha_playlist)
    }, [props.alpha_playlist])

    return (
        <div id='mobile-player'>
            <ul>
                {alphaPlaylist.map(track =>
                    <li style={{backgroundColor: props.colors[1], borderColor: props.colors[3], color: props.colors[2]}}>
                    <span className="material-symbols-outlined" style={{cursor: 'pointer', zIndex: '10'}} onClick={() => {
                        if (props.alpha_playlist.length === 0) {
                            props.remove_from_alpha((prev) => [...prev].slice(1))
                        } else {
                            props.remove_from_alpha((prev) => {
                                const left = prev.slice(0, track[9])
                                const right = prev.slice(track[9] + 1)
                                return [...left, ...right];
                            })
                        }
                    }}>playlist_remove</span>
                        <div id='mobile-player-image' >
                            <img src={track[2]} alt=""/>
                        </div>
                        <p>{track[1]} | {track[0]}</p>
                        <span className="material-symbols-outlined" style={{cursor: 'pointer'}} onClick={() => {
                            const requestOptions = {method: 'PUT', headers: {Authorization: `Bearer ${props.token}`},
                                body: JSON.stringify({"uris": [track[5]]})};
                            fetch('https://api.spotify.com/v1/me/player/play', requestOptions)
                        }}>play_circle</span>
                    </li>
                )}
                <li className='clear' style={(props.alpha_playlist.length <= 6 ? {visibility:'hidden'}
                    : {display:'block'})} onClick={() => {
                    props.reset_alpha([]);
                }}>
                    <button>CLEAR</button>
                </li>
            </ul>
        </div>
    )
}

export default MobilePlayer;