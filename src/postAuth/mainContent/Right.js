import './right/Mixer.css';
import './right/Push.css';
import React, { useState, useEffect } from 'react';
import Mixer from './right/Mixer';
import Push from './right/Push';

function Right(props) {

    const [stagedFinals, setStagedFinals] = useState([])
    const [userId, setUserId] = useState();

    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (stagedFinals.length > 0) {
            const timer = setInterval(() => {
                setIndex(() => {
                    if (index === stagedFinals[0].length) {
                        return 0;
                    }
                    return Math.floor(Math.random() * stagedFinals[0].length);
                })
            }, 3500);
            return () => clearInterval(timer);
        }
    }, )

    return (
        <section id='right'>
            <div id='tab-menu' className="tabs">
                <button id='pool-tab' className="tablinks" onClick="openElement(event, 'Pool')">Pool</button>
                <button id='player-tab' className="tablinks" onClick="openElement(event, 'Player')">Player</button>
                <button id='playlists-tab' className="tablinks" onClick="openElement(event, 'Playlists')">Playlists</button>
            </div>
            <Mixer beta_playlist={props.beta_playlist} set_beta={props.set_beta} staged_finals={stagedFinals}
                   set_staged_finals={setStagedFinals} index={index} colors={props.colors}/>
            <Push token={props.token} staged_finals={stagedFinals} user_id={userId} set_user_id={setUserId}/>
        </section>
    )
}

export default Right;