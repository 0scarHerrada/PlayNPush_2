import React, {useEffect, useState} from 'react';

function Nav(props) {


    const [profileName, setProfileName] = useState('Username');
    const [profileImg, setProfileImg] = useState("https://i.scdn.co/image/ab67616d00001e027dd26d4f61619a3745898807");

    useEffect(() => {

        async function fetchProfile(token) {
            const result = await fetch("https://api.spotify.com/v1/me", {
                method: "GET", headers: { Authorization: `Bearer ${token}` }
            });

            const profile = await result.json();


            setProfileName(profile.display_name);
            setProfileImg(profile.images[0].url);
        }

        fetchProfile(props.token);
    }, [])



    return (
        <nav>
            <li id='the-mini-player' className='nav-mini-player'>
                <span className="material-symbols-outlined">playlist_remove</span>
                <div className='player-image'>
                    <img src={require("../../assets/header-assets/oscar_mntn.jpg")} alt=""/>
                </div>
                <span>Artist Name | Song Title</span>
                <span className="material-symbols-outlined">drag_indicator</span>
            </li>
            <ul id='mobile-nav'>
                <li>
                    <a href='http://localhost:3000/?'>
                        <span id='mini-player-button' className="material-symbols-outlined">pip</span>
                    </a>
                </li>
                <li>
                    <a href='http://localhost:3000/?'>
                        <span className="material-symbols-outlined">auto_detect_voice</span>
                    </a>
                </li>
                <li id='profile'>
                    <div id='profile-container'>
                        <img src={require("../../assets/header-assets/oscar_mntn.jpg")} alt='Profile'/>
                    </div>
                    <p>Oscar Herrada</p>
                </li>
                <li>
                    <a href='http://localhost:3000/?'>
                        <span className="material-symbols-outlined">settings</span>
                    </a>
                </li>
                <li id='mini-spotify' className='spotify'>
                    <a href='http://localhost:3000/?'><img src={require("../../assets/Spotify_Logo_RGB_Black.png")} alt=""/></a>
                </li>
            </ul>
            <ul id='non-mobile-nav'>
                <li>
                    <a href='http://localhost:3000/?'>Mini Player</a>
                </li>
                <li>
                    <a href='http://localhost:3000/?'>Party</a>
                </li>
                <li id='profile'>
                    <div id='profile-container'>
                        <img src={profileImg} alt='Profile'/>
                    </div>
                    <p id='profile-name'>{profileName}</p>
                </li>
                <li>
                    <a href='http://localhost:3000/?'>Preferences</a>
                </li>
                <li id='reg-spotify' className='spotify'>
                    <a href='http://localhost:3000/?'><img src="https://storage.googleapis.com/pr-newsroom-wp/1/2018/11/Spotify_Logo_RGB_Black.png" alt=""/></a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;