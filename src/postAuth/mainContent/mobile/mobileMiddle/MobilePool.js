import React, {useState, useEffect} from 'react';

function Pool(props) {

    const [tracks, setTracks] = useState([]);

    // tracks
    useEffect( () => {
        if (props.pool) {
            setTracks(props.pool.tracks.items);
        }
    }, [props.pool]);


    const tracksListArray = tracks.map(track =>
        //   Song Name 0 Artist Name 1          Album Image 2              Popularity 3      Id 4      Uri 5
        [track.name, track.artists[0].name, track.album.images[0].url, track.popularity, track.id, track.uri,
            //  Duration 6                              Explicit 7      Release Date 8
            track.duration_ms, track.explicit, track.album.release_date]
    )


    const tracksArray = tracksListArray.map(trackList => (
        <li style={{backgroundColor: props.colors[1], borderColor: props.colors[3]}}>
            <div className='music-card-image'>
                <div className='music-card-buttons'>
                    <div className='playlist-add' onClick={() => (
                        props.add_to_alpha((prev) => [...prev, trackList])
                    )}>
                        <span className="material-symbols-outlined" style={{backgroundColor: props.colors[1],
                            color: props.colors[2]}}>playlist_add</span>
                    </div>
                    <div className='play-arrow-container' onClick={() => {
                        const requestOptions = {method: 'PUT', headers: {Authorization: `Bearer ${props.token}`},
                            body: JSON.stringify({"uris": [trackList[5]]})};
                        fetch('https://api.spotify.com/v1/me/player/play', requestOptions)
                    }}>
                        <span className="material-symbols-outlined">play_arrow</span>
                    </div>
                </div>
                <img className='card-image' src={tracks ? trackList[2] :
                    "https://i.scdn.co/image/ab67616d00001e027dd26d4f61619a3745898807"} alt=""/>
            </div>
            <div className='music-card-info'>
                <div id='popularity' className='mobile-popularity'>
                    <span className="material-symbols-outlined" style={{color: props.colors[2], fontWeight: 'bold',
                        textShadow: 'none'}}>{trackList[3] < 50 ? 'star' :
                        trackList[3] >= 50 && trackList[3] < 81 ? 'star_half'
                            : 'stars'}</span>
                </div>
                <div id='info-div'>
                    <p className='music-info' >{tracks ? trackList[0] : 'Song Title'}</p>
                    <p className='music-info' >{tracks ? trackList[1] :
                        'Artist Name'}</p>
                </div>
                <div id='explicit' className='mobile-explicit'>
                    <span className="material-symbols-outlined" style={trackList[7] === false ? {display: 'none'} :
                        {display: 'block', color: props.colors[2], fontWeight: 'bold', textShadow: 'none'}}>explicit</span>
                </div>
            </div>
        </li>
    ))

    return (
        <div id='mobile-id-pool' className='mobile-pool'>
            <ul>
                {tracksArray}
            </ul>
        </div>
    )
}

export default Pool;