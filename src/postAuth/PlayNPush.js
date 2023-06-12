import './Header.css';
import './MainContent.css';
import Header from './Header'
import MainContent from './MainContent';
import React, { useState, useEffect } from 'react';

import githubLogoBlack from '../assets/github-mark-black.png';
import githubLogoLightGray from '../assets/github-mark-lightgray.png';
import spotifyLogoBlack from '../assets/spotify-black-logo.png';
import spotifyLogoWhite from '../assets/spotify-white-logo.png';
import playbackTransfer from '../assets/playback_transfer.png'

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
        if (!player) {
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
        }
    }, );

    // Dark Mode
    const [darkMode, setDarkMode] = useState(false);

    // Colors             0 bg       1 li & input-bg         3 border-color li-box-shadow     5 text-shadow
    const dark = ['#000000', '#121212', 'lightgray', '#373737', '#484848', '#242424', 'whitesmoke', githubLogoLightGray, spotifyLogoWhite];
    //                                          2 font-color            4 input-box-shadow               6 music-tags

    // Colors             0 bg       1 li & input-bg         3 border-color li-box-shadow     5 text-shadow
    const light = ['#FFFFFF', '#FEFEFA', 'black', 'lightgray', 'lightgray', '#121212', '#121212', githubLogoBlack, spotifyLogoBlack];
    //                                          2 font-color            4 input-box-shadow               6 music-tags

    const [colors, setColors] = useState(light);

    useEffect(() => {
        if (darkMode === true) {
            setColors(dark);
        } else if (darkMode === false) {
            setColors(light);
        }
    }, [darkMode])

    return (
        <>
            <div id='post-auth' style={{backgroundColor: colors[0], color: colors[2]}}>
                <Header token={props.token} dark_mode={darkMode} set_dark_mode={setDarkMode} colors={colors}/>
                <section className="container" style={{padding: '1%'}}>
                    <div id="now-playing-container">
                        <div className="now-playing-image-container">
                            <img src={current_track ? current_track.album.images[0].url : ''} className="now-playing__cover" alt="" />
                        </div>
                        <div className="now-playing-info">
                            <p className="now-playing__name">{current_track ? current_track.name : ''}</p>
                            <p className="now-playing__artist" >{current_track ? current_track.artists[0].name : ''}</p>
                        </div>
                    </div>
                    <div id='playback-transfer' >{is_active ? '' : <div style={{display: 'flex',
                        flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                        <img src={playbackTransfer} alt="" style={{maxWidth: '30%'}}/></div>}</div>
                    <div className="now-playing-controls">
                                <button id='prev-track' className="btn-spotify bg-color-changer" onClick={() => { player.previousTrack() }} >
                                    <span id='playing-controls-1' className="material-symbols-outlined">skip_previous</span>
                                </button>
                                <button id='play-button' className="btn-spotify bg-color-changer" onClick={() => { player.togglePlay() }} >
                                    <span id='playing-controls-2' className="material-symbols-outlined">play_pause</span>
                                </button>
                                <button id='next-track' className="btn-spotify bg-color-changer" onClick={() => { player.nextTrack() }} >
                                    <span id='playing-controls-3' className="material-symbols-outlined">skip_next</span>
                                </button>
                    </div>
                </section>
                <MainContent token={props.token} dark_mode={darkMode} colors={colors}/>
            </div>
        </>
    )
}

export default PlayNPush
