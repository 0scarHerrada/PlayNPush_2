import './right/Mixer.css';
import './right/Push.css';
import React, { useState, useEffect } from 'react';
import Mixer from './right/Mixer';
import Push from './right/Push';
import MobileLeft from "./mobile/MobileLeft";
import MobileMiddle from "./mobile/MobileMiddle";

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
                <button id='left-tab' className="tablinks" onClick={() => {
                    document.getElementsByClassName('mobile-left-div')[0].style.display = 'flex';
                    document.getElementsByClassName('mobile-right')[0].style.display = 'none';
                    document.getElementsByClassName('mobile-middle-div')[0].style.display = 'none';
                }} >Create</button>
                <button id='right-tab' className="tablinks" onClick={() => {
                    document.getElementsByClassName('mobile-right')[0].style.display = 'flex';
                    document.getElementsByClassName('mobile-left-div')[0].style.display = 'none';
                    document.getElementsByClassName('mobile-middle-div')[0].style.display = 'none';
                }} >Push</button>
                <button id='middle-tab' className="tablinks" onClick={() => {
                    document.getElementsByClassName('mobile-middle-div')[0].style.display = 'flex';
                    document.getElementsByClassName('mobile-right')[0].style.display = 'none';
                    document.getElementsByClassName('mobile-left-div')[0].style.display = 'none';
                }} >Search</button>
            </div>
            <div id='mobile-right-id' className='mobile-right'>
                <Mixer beta_playlist={props.beta_playlist} set_beta={props.set_beta} staged_finals={stagedFinals}
                       set_staged_finals={setStagedFinals} index={index} colors={props.colors}/>
                <Push token={props.token} staged_finals={stagedFinals} user_id={userId} set_user_id={setUserId}/>
            </div>
            <div className='mobile-left-div'>
                <MobileLeft token={props.token} alpha_playlist={props.alpha_playlist} reset_alpha={props.reset_alpha}
                            add_to_alpha={props.add_to_alpha} sort_alpha={props.sort_alpha} remove_from_alpha={props.remove_from_alpha}
                            beta_playlists={props.beta_playlist} set_beta={props.set_beta} colors={props.colors}/>
            </div>
            <div className='mobile-middle-div'>
                <MobileMiddle token={props.token} add_to_alpha={props.add_to_alpha} colors={props.colors} />
            </div>
        </section>
    )
}

export default Right;