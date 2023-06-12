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
    }, [props.token])

    const changerColors = ['#1AB26B', '#43A3C7', '#C743A3', '#C76643']
    const changerSecondary = ['#24A86A', '#348EAF', '#AF348E', '#AF5534']
    const changerThird = ['#2F9D6A', '#348EAF', '#AF348E', '#AF5534']
    let changerIndex = 0;

    const handleColorChange = () => {
        changerIndex++;

        document.getElementsByClassName('bg-color-changer')[0].style.backgroundColor = changerColors[changerIndex];
        document.getElementsByClassName('bg-color-changer')[0].style.borderColor = changerSecondary[changerIndex];
        document.getElementsByClassName('bg-color-changer')[0].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

        document.getElementsByClassName('bg-color-changer')[1].style.backgroundColor = changerColors[changerIndex];
        document.getElementsByClassName('bg-color-changer')[1].style.borderColor = changerSecondary[changerIndex];
        document.getElementsByClassName('bg-color-changer')[1].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

        document.getElementsByClassName('bg-color-changer')[2].style.backgroundColor = changerColors[changerIndex];
        document.getElementsByClassName('bg-color-changer')[2].style.borderColor = changerSecondary[changerIndex];
        document.getElementsByClassName('bg-color-changer')[2].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

        if (document.getElementsByClassName('bg-color-changer')[3]) {
            document.getElementsByClassName('bg-color-changer')[3].style.backgroundColor = changerColors[changerIndex];
            document.getElementsByClassName('bg-color-changer')[3].style.borderColor = changerSecondary[changerIndex];
            document.getElementsByClassName('bg-color-changer')[3].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

            document.getElementsByClassName('bg-color-changer')[4].style.backgroundColor = changerColors[changerIndex];
            document.getElementsByClassName('bg-color-changer')[4].style.borderColor = changerSecondary[changerIndex];
            document.getElementsByClassName('bg-color-changer')[4].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

            document.getElementsByClassName('bg-color-changer')[5].style.backgroundColor = changerColors[changerIndex];
            document.getElementsByClassName('bg-color-changer')[5].style.borderColor = changerSecondary[changerIndex];
            document.getElementsByClassName('bg-color-changer')[5].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];
        }

        if (document.getElementsByClassName('bg-color-changer')[6]) {
            document.getElementsByClassName('bg-color-changer')[6].style.backgroundColor = changerColors[changerIndex];
            document.getElementsByClassName('bg-color-changer')[6].style.borderColor = changerSecondary[changerIndex];
            document.getElementsByClassName('bg-color-changer')[6].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];

            document.getElementsByClassName('bg-color-changer')[7].style.backgroundColor = changerColors[changerIndex];
            document.getElementsByClassName('bg-color-changer')[7].style.borderColor = changerSecondary[changerIndex];
            document.getElementsByClassName('bg-color-changer')[7].style.boxShadow = '0 0 9px ' + changerSecondary[changerIndex];
        }

        document.getElementById('profile-border').style.borderColor = changerColors[changerIndex];

        const inputColor = document.querySelectorAll('input');
        inputColor.forEach(track => {
            track.style.setProperty('--text-border-color', '2px solid ' + changerSecondary[changerIndex]);
            track.style.setProperty('--text-box-shadow', '0 0 12px ' + changerSecondary[changerIndex]);
        });

        const buttonColor = document.querySelectorAll('button');
        buttonColor.forEach(track => {
            track.style.setProperty('--sort-color', changerColors[changerIndex]);
            track.style.setProperty('--sort-text-shadow', '0 0 1px ' + changerSecondary[changerIndex] +
            ', 0 0 1px '+ changerSecondary[changerIndex]);
            track.style.setProperty('--sort-background-color', changerThird[changerIndex]);
            track.style.setProperty('--text-box-shadow', '0 0 9px ' + changerSecondary[changerIndex]);
        });

        const finalColor = document.querySelectorAll('ul');
        finalColor.forEach(track => {
            track.style.setProperty('--final-box-shadow', '0 0 8px ' + changerSecondary[changerIndex]);
            track.style.setProperty('--final-border-color', '1px solid ' + changerSecondary[changerIndex]);
        });

        if (changerIndex === 3) {
            changerIndex = -1;
        }
    }

    const handleDarkMode = () => {
        if (props.dark_mode === false) {
            props.set_dark_mode(prev => !prev);
        } else {
            props.set_dark_mode(prev =>!prev);
        }
    }

    return (
        <nav>
            <li id='the-mini-player' className='nav-mini-player'>
                <span className="material-symbols-outlined">playlist_remove</span>
                <div className='player-image'>
                    <img src={profileImg} alt=""/>
                </div>
                <span>Artist Name | Song Title</span>
                <span className="material-symbols-outlined">drag_indicator</span>
            </li>
            <ul id='non-mobile-nav'>
                <li id='reg-github' className='github'>
                    <a target="_blank"  href='https://github.com/0scarHerrada/PlayNPush_2'>
                        <img src={props.colors[7]} alt=""/>
                    </a>
                </li>
                <li id='nb-1'>
                    <span className="material-symbols-outlined" onClick={handleColorChange} style={{color: props.colors[2]}}>palette</span>
                </li>
                <li id='profile'>
                    <div id='profile-container'>
                        <img id='profile-border' src={profileImg} alt='Profile'/>
                    </div>
                    <p id='profile-name' style={{color: props.colors[6], textShadow: 'none'}}>{profileName}</p>
                </li>
                <li id='nb-2'>
                    <span className="material-symbols-outlined" onClick={handleDarkMode} style={{color: props.colors[2]}}>routine</span>
                </li>
                <li id='reg-spotify' className='spotify'>
                    <a target="_blank" href='https://open.spotify.com/'>
                        <img id='nav-spotify-logo' src={props.colors[8]} alt=""/>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;