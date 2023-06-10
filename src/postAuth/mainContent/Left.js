import './left/Player.css';
import './left/Playlist.css';
import './left/Save.css';
import './left/Stage.css';
import React, { useState, useEffect } from 'react';
import Player from './left/Player';
import Playlist from './left/Playlist'
import Save from './left/Save';
import Stage from './left/Stage';

function Left(props) {

    const [alphaPlaylist, setAlphaPlaylist] = useState([])

    const [saving, setSaving] = useState(false)

    const [staged, setStaged] = useState(false)

    let index = 0;

    useEffect(() => {
        if (props.alpha_playlist.length >= 0) {
            setAlphaPlaylist(props.alpha_playlist.map(track =>
            [...track, index++]
            ))
        }
    }, [props.alpha_playlist])

    useEffect(() => {
        if (saving === true) {
            const elemSave = document.getElementById("save-button");
            elemSave.style.display = 'none';
            const elemPlayer = document.getElementById("player");
            elemPlayer.style.display = 'none';
            const elemStage = document.getElementById("stage-button");
            elemStage.style.display = 'block';
            const elemPlaylist = document.getElementById("playlist");
            elemPlaylist.style.display = 'flex';
        }
    }, [saving])

    useEffect(() => {
        if (staged === true) {
            const elemStage = document.getElementById("stage-button");
            elemStage.style.display = 'none';
            const elemPlaylist = document.getElementById("playlist");
            elemPlaylist.style.display = 'none';
            const elemSave = document.getElementById("save-button");
            elemSave.style.display = 'block';
            const elemPlayer = document.getElementById("player");
            elemPlayer.style.display = 'block';
        }
    }, [staged])

    return (
        <section id='left'>
            <Player token={props.token} alpha_playlist={alphaPlaylist} reset_alpha={props.reset_alpha}
                    remove_from_alpha={props.remove_from_alpha} colors={props.colors}/>
            <Playlist alpha_playlist={props.alpha_playlist}  sort_alpha={props.sort_alpha} add_to_alpha={props.add_to_alpha}
                      set_beta={props.set_beta} stage={setStaged} save={setSaving} colors={props.colors}/>
            <Save alpha_playlist={props.alpha_playlist} save={setSaving} stage={setStaged}/>
            <Stage alpha_playlist={props.alpha_playlist} set_beta={props.set_beta} stage={setStaged} save={setSaving}/>
        </section>
    )
}

export default Left;