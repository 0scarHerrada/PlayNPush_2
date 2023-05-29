import React, { useState, useEffect } from 'react';

function Playlist(props) {

    //const [playlistName, setPlaylistName] = useState('')

    const getPlaylistName = (event) => {
        if (props.alpha_playlist.length > 0) {
            if (event.key === 'Enter') {
                // 👇 Get input value
                const betaName = event.target.value;

                const trackDurations = props.alpha_playlist.map(track => track[6])

                const playlistDuration = trackDurations.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                },0);

                const namedAlpha = props.alpha_playlist.map(track =>
                    [...track, betaName, playlistDuration]
                )
                props.set_beta((prev) => [...prev, namedAlpha])
            }
        }
    }

    return (
        <div id='playlist'>
            <section id='playlist-section'>
                <input onKeyUp={getPlaylistName} type="search" placeholder='Enter name...'/>
            </section>
            <label id='sort-label' htmlFor="sort-select">Sort by:</label>
            <section id='sort-section'>
                <div>
                    <div><label htmlFor="">Artist</label>
                        <select name="sort-options" id="sort-select">
                            <option value="">None</option>
                            <option value="alpha-song">A - Z</option>
                            <option value="alpha-song-r">Z - A</option>
                        </select>
                    </div>
                    <div><label htmlFor="">Set Order:</label>
                        <select className='sort-order' name="sort-options">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Year</label>
                        <select name="sort-options" id="sort-select">
                            <option value="">None</option>
                            <option value="alpha-song">Old songs - New songs</option>
                            <option value="alpha-song-r">New songs - Old songs</option>
                        </select>
                    </div>
                    <div><label htmlFor="" className='hidden-label'>.</label>
                            <select className='sort-order' name="sort-options">
                                <option value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Runtime</label>
                        <select name="sort-options" id="sort-select">
                            <option value="">None</option>
                            <option value="alpha-song">Short songs - Long songs</option>
                            <option value="alpha-song-r">Long songs - Short songs</option>
                        </select>
                    </div>
                    <div><label htmlFor="" className='hidden-label'>.</label>
                        <select className='sort-order' name="sort-options">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
                <div>
                    <div>
                        <label htmlFor="">Popularity</label>
                        <select name="sort-options" id="sort-select">
                            <option value="">None</option>
                            <option value="alpha-song">Higher popularity - Lower popularity</option>
                            <option value="alpha-song-r">Lower popularity - Higher popularity</option>
                        </select>
                    </div>
                    <div><label htmlFor="" className='hidden-label'>.</label>
                        <select className='sort-order' name="sort-options">
                            <option value="">1</option>
                            <option value="">2</option>
                            <option value="">3</option>
                            <option value="">4</option>
                        </select>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Playlist;