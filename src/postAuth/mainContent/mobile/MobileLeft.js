import './mobileLeft/MobilePlayer.css';
import './mobileLeft/MobilePlaylist.css';
import './mobileLeft/MobileSave.css';
import './mobileLeft/MobileStage.css';
import React, { useState, useEffect } from 'react';
import MobilePlayer from './mobileLeft/MobilePlayer';
import MobilePlaylist from './mobileLeft/MobilePlaylist'
import MobileSave from './mobileLeft/MobileSave';
import MobileStage from './mobileLeft/MobileStage';

function MobileLeft(props) {

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
            const elemSave = document.getElementById("mobile-save-button");
            elemSave.style.display = 'none';
            const elemPlayer = document.getElementById("mobile-player");
            elemPlayer.style.display = 'none';
            const elemStage = document.getElementById("mobile-stage-button");
            elemStage.style.display = 'block';
            const elemPlaylist = document.getElementById("mobile-playlist");
            elemPlaylist.style.display = 'flex';
        }
    }, [saving])

    useEffect(() => {
        if (staged === true) {
            const elemStage = document.getElementById("mobile-stage-button");
            elemStage.style.display = 'none';
            const elemPlaylist = document.getElementById("mobile-playlist");
            elemPlaylist.style.display = 'none';
            const elemSave = document.getElementById("mobile-save-button");
            elemSave.style.display = 'block';
            const elemPlayer = document.getElementById("mobile-player");
            elemPlayer.style.display = 'block';
        }
    }, [staged])

    return (
        <section id='mobile-left'>
            <MobilePlayer token={props.token} alpha_playlist={alphaPlaylist} reset_alpha={props.reset_alpha}
                    remove_from_alpha={props.remove_from_alpha} colors={props.colors}/>
            <MobilePlaylist alpha_playlist={props.alpha_playlist}  sort_alpha={props.sort_alpha} add_to_alpha={props.add_to_alpha}
                      set_beta={props.set_beta} stage={setStaged} save={setSaving} colors={props.colors}/>
            <MobileSave alpha_playlist={props.alpha_playlist} save={setSaving} stage={setStaged}/>
            <MobileStage alpha_playlist={props.alpha_playlist} set_beta={props.set_beta} stage={setStaged} save={setSaving}/>
        </section>
    )
}

export default MobileLeft;