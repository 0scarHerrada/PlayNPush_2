import React, { useState, useEffect } from 'react';
import playlist from "../left/Playlist";

function Mixer(props) {

    const [betaPlaylists, setBetaPlaylists] = useState([])

    useEffect(() => {
        setBetaPlaylists(props.beta_playlist.map(playlist =>
            <li className='beta-playlist'>
                <input type="checkbox"/>
                <span>{playlist[0][9]}</span>
                <div>
                    <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                    <p>{playlist.length}</p>
                </div>
                <div>
                    <span className="material-symbols-outlined" style={{ color: '#18ab29', marginRight: '3px'}}>schedule</span>
                    <p>{playlist[0][10]}</p>
                </div>
            </li>
        ))

    }, [props.beta_playlist])

    return (
        <div id='mixer'>
            <ul id='initial_playlists'>
                {betaPlaylists}
            </ul>
            <form id='playlist_options' action="">
                <span id='mb-1' className="material-symbols-outlined">arrow_downward</span>
                <span id='mb-2' className="material-symbols-outlined">join_full</span>
                <span id='mb-3' className="material-symbols-outlined">join_inner</span>
            </form>
            <ul id='committed_playlists'>
                <li>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>23</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                        <p>69</p>
                    </div>
                </li>
                <li>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>23</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                        <p>69</p>
                    </div>
                </li>
                <li>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>23</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                        <p>69</p>
                    </div>
                </li>
                <li>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>23</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>hourglass_top</span>
                        <p>69</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Mixer;