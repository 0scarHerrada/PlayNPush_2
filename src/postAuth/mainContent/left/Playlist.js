import React, { useState, useEffect } from 'react';

function Playlist(props) {

    //const [playlistName, setPlaylistName] = useState('')

    const getPlaylistName = (event) => {
        if (props.alpha_playlist.length > 0) {
            if (event.key === 'Enter') {
                if (event.target.value.length > 0) {
                    props.stage(true)
                    props.save(false)
                    // 👇 Get input value
                    const betaName = event.target.value;

                    const trackDurations = props.alpha_playlist.map(track => track[6])

                    const playlistDuration = trackDurations.reduce((accumulator, currentValue) => {
                        return accumulator + currentValue
                    },0);

                    const namedAlpha = props.alpha_playlist.map(track =>
                        [...track, betaName, playlistDuration, 'false']
                    )
                    props.set_beta((prev) => [...prev, namedAlpha])
                }
            }
        }
    }

    return (
        <div id='playlist'>
            <section id='playlist-section'>
                <input id='name-a-playlist' onKeyUp={getPlaylistName} type="search" placeholder='Enter name...'
                       maxLength='25'/>
            </section>
            <label id='sort-label' htmlFor="sort-select">Sort by:</label>
            <section id='sort-section'>
                <div>
                    <label htmlFor="">Artist</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">A - Z</option>
                        <option value="alpha-song-r">Z - A</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Popularity</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">Higher popularity - Lower popularity</option>
                        <option value="alpha-song-r">Lower popularity - Higher popularity</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Runtime</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">Short songs - Long songs</option>
                        <option value="alpha-song-r">Long songs - Short songs</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Year</label>
                    <select name="sort-options" id="sort-select">
                        <option value="">None</option>
                        <option value="alpha-song">Old songs - New songs</option>
                        <option value="alpha-song-r">New songs - Old songs</option>
                    </select>
                </div>
            </section>
        </div>
    )
}

export default Playlist;