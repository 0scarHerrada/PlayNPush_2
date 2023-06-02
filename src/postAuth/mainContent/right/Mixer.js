import React, { useState, useEffect } from 'react';
import playlist from "../left/Playlist";

function Mixer(props) {



    return (
        <div id='mixer'>
            <ul id='initial_playlists'>
                {props.beta_playlist.map(playlist =>
                    <li className='beta-playlist'>
                        <input type="checkbox" onClick={() => {
                            if (playlist[0][11] === 'false') {
                                playlist[0][11] = 'true';
                            } else if (playlist[0][11] === 'true') {
                                playlist[0][11] = 'false';
                            }
                        }}/>
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
                )}
                <li className='hidden-final-playlist'>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>Playlist Length</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                        <p>Playlist Duration</p>
                    </div>
                </li>
            </ul>
            <form id='playlist_options' action="">
                <span id='mb-1' className="material-symbols-outlined" onClick={ () => {
                    if (props.beta_playlist.filter(playlist => playlist[0][11] === 'true').length > 0) {
                        props.beta_playlist.filter(playlist => playlist[0][11] === 'true').map(playlist =>
                            props.set_staged_finals(prev => [...prev, playlist])
                        )
                    }
                }} >arrow_downward</span>
                <span id='mb-2' className="material-symbols-outlined" onClick={ () => {
                    if (props.beta_playlist.filter(playlist => playlist[0][11] === 'true').length > 1) {

                        const unifiedPlaylist = [];

                        props.beta_playlist.filter(playlist => playlist[0][11] === 'true').map(playlist => {
                            playlist.map(song => {
                                unifiedPlaylist.push(song)
                            })
                        })

                        props.set_staged_finals(prev => [...prev, unifiedPlaylist])
                    }
                }} >join_full</span>
                <span id='mb-3' className="material-symbols-outlined" onClick={ () => {
                    if (props.beta_playlist.filter(playlist => playlist[0][11] === 'true').length > 1) {

                        const unifiedPlaylist = [];

                        props.beta_playlist.filter(playlist => playlist[0][11] === 'true').map(playlist => {
                            playlist.map(song => {
                                unifiedPlaylist.push(song)
                            })
                        })

                        const droppedPlaylistName = unifiedPlaylist.map((prev) => {
                                const left = prev.slice(0, 8)
                                const newPlaylistTitle = ['1', 'Intersected Playlist', 999, 'true']
                                return [...left, ...newPlaylistTitle];
                            }
                        )

                        const intersectedTracks = droppedPlaylistName.filter(
                            (v1, i1, a) => a.some((v2, i2) => v1[0] === v2[0] && v1[1] === v2[1] && i1 !== i2)
                        );

                        const stringedIntersections = intersectedTracks.map(track => track.join(' ^ '))

                        const intersectedSet = new Set(stringedIntersections);

                        const intersectedPlaylist = [];

                        intersectedSet.forEach(track => intersectedPlaylist.push(track.split(' ^ ')));

                        props.set_staged_finals(prev => [...prev, intersectedPlaylist])
                    }
                }} >join_inner</span>
            </form>
            <ul id='committed_playlists'>
                {props.staged_finals.map(playlist =>
                    <li>
                        <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                        <span>{playlist[0][9]}</span>
                        <div>
                            <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                            <p>{playlist.length}</p>
                        </div>
                        <div>
                            <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                            <p>{playlist[0][10]}</p>
                        </div>
                    </li>
                )}
                <li className='hidden-final-playlist'>
                    <span className="material-symbols-outlined" style={{cursor: 'default'}}>keyboard_double_arrow_left</span>
                    <span>Playlist Name</span>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>music_note</span>
                        <p>Playlist Length</p>
                    </div>
                    <div>
                        <span className="material-symbols-outlined" style={{ color: '#18ab29'}}>schedule</span>
                        <p>Playlist Duration</p>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default Mixer;