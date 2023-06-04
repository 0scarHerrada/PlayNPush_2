import './Header.css';
import './MainContent.css';
import Header from './Header'
import MainContent from './MainContent';
import React, { useState, useEffect } from 'react';

const track = {
    name: "",
    album: {
        images: [
            { url: "" }
        ]
    },
    artists: [
        { name: "" }
    ]
}

function PlayNPush(props) {

    const [is_paused, setPaused] = useState(false);
    const [is_active, setActive] = useState(false);
    const [player, setPlayer] = useState(undefined);
    const [current_track, setTrack] = useState(track);

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://sdk.scdn.co/spotify-player.js";
        script.async = true;

        document.body.appendChild(script);

        window.onSpotifyWebPlaybackSDKReady = () => {

            const player = new window.Spotify.Player({
                name: 'PlayNPush',
                getOAuthToken: cb => { cb(props.token); },
                volume: 0.5
            });

            setPlayer(player);

            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
            });

            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            player.addListener('player_state_changed', ( state => {

                if (!state) {
                    return;
                }

                setTrack(state.track_window.current_track);
                setPaused(state.paused);

                player.getCurrentState().then( state => {
                    (!state)? setActive(false) : setActive(true)
                });

            }));

            player.connect();
        };

    }, []);

    if (!is_active) {
        return (
            <>
                <div id='post-auth'>
                    <Header token={props.token}/>
                    <div className="main-container">
                        <div className="main-wrapper">
                            <b> To use Web Player transfer your playback from the Spotify app to PlayNPush (Premium subscription required) </b>
                        </div>
                    </div>
                    <MainContent token={props.token} />
                </div>
            </>
        )
    } else {
        return (
            <>
            <div id='post-auth'>
                <Header token={props.token}/>
                <section className="container">
                    <div id="now-playing-container">
                        <div className="now-playing-image-container">
                            <img src={current_track.album.images[0].url} className="now-playing__cover" alt="" />
                        </div>
                        <div className="now-playing-info">
                            <p className="now-playing__name">{current_track.name}</p>
                            <p className="now-playing__artist">{current_track.artists[0].name}</p>
                        </div>
                    </div>
                    <div id="equalizer"></div>
                    <div className="now-playing-controls">
                        <button id='prev-track' className="btn-spotify" onClick={() => { player.previousTrack() }} >
                            <span className="material-symbols-outlined" style={{fontSize:'2.5rem'}} >skip_previous</span>
                        </button>
                        <button id='play-button' className="btn-spotify" onClick={() => { player.togglePlay() }} >
                            <span className="material-symbols-outlined" style={{fontSize:'2.5rem'}} >play_pause</span>
                        </button>
                        <button id='next-track' className="btn-spotify" onClick={() => { player.nextTrack() }} >
                            <span className="material-symbols-outlined" style={{fontSize:'2.5rem'}} >skip_next</span>
                        </button>
                    </div>
                </section>
                <MainContent token={props.token} />
            </div>
        </>
        );
    }
}

export default PlayNPush
