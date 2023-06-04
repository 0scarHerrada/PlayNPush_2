import './mainContent/Left.css';
import './mainContent/Middle.css';
import './mainContent/Right.css';
import React, { useState, useEffect } from 'react';
import Left from './mainContent/Left';
import Middle from './mainContent/Middle';
import Right from './mainContent/Right';

function MainContent(props) {

    const [alphaPlaylist, setAlphaPlaylist] = useState([]);
    const [betaPlaylists, setBetaPlaylist] = useState([]);
    const [finalPlaylists, setFinalPlaylist] = useState([]);

    return (
        <div id='main-content'>
            <Left token={props.token} alpha_playlist={alphaPlaylist} reset_alpha={setAlphaPlaylist}
                  add_to_alpha={setAlphaPlaylist} sort_alpha={setAlphaPlaylist}
                  remove_from_alpha={setAlphaPlaylist} beta_playlists={betaPlaylists} set_beta={setBetaPlaylist} />

            <Middle token={props.token}  add_to_alpha={setAlphaPlaylist}/>

            <Right token={props.token} beta_playlist={betaPlaylists} set_beta={setBetaPlaylist} final_playlists={finalPlaylists} add_to_finals={setFinalPlaylist}
                   remove_from_finals={setFinalPlaylist}/>
        </div>
    )
}

export default MainContent;