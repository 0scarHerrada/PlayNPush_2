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

    //useEffect(() => {
    //    if (betaPlaylists) {
    //        if (betaPlaylists.length > 0) {
    //            alert(betaPlaylists)
    //        }
    //    }
    //}, [betaPlaylists])

    return (
        <div id='main-content'>
            <Left token={props.token} alpha_playlist={alphaPlaylist} add_to_alpha={setAlphaPlaylist} remove_from_alpha={setAlphaPlaylist} beta_playlists={betaPlaylists} set_beta={setBetaPlaylist} />
            <Middle token={props.token}  add_to_alpha={setAlphaPlaylist}/>
            <Right beta_playlist={betaPlaylists} />
        </div>
    )
}

export default MainContent;