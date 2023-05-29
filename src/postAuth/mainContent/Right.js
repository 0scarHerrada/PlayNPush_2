import './right/Mixer.css';
import './right/Push.css';
import React, { useState, useEffect } from 'react';
import Mixer from './right/Mixer';
import Push from './right/Push';

function Right(props) {



    return (
        <section id='right'>
            <div id='tab-menu' className="tabs">
                <button id='pool-tab' className="tablinks" onClick="openElement(event, 'Pool')">Pool</button>
                <button id='player-tab' className="tablinks" onClick="openElement(event, 'Player')">Player</button>
                <button id='playlists-tab' className="tablinks" onClick="openElement(event, 'Playlists')">Playlists</button>
            </div>
            <Mixer beta_playlist={props.beta_playlist}/>
            <Push />
        </section>
    )
}

export default Right;