import React, { useState, useEffect } from 'react';

function Push(props) {


    useEffect(() => {
        async function fetchProfile(token) {
            const result = await fetch("https://api.spotify.com/v1/me", {
                method: "GET", headers: {Authorization: `Bearer ${token}`}
            });
            const profile = await result.json();
            props.set_user_id(profile.id);
        }
        fetchProfile(props.token);
    }, [props.token])



    //const profileName = document.getElementById('profile-name').innerHTML;

    return (
        <button id='push-button' placeholder='Push' onClick={() => {
            props.staged_finals.map(playlist => {

                const trackUris = playlist.map(track =>
                    track[5]
                )

                async function createPlaylist(token) {
                    const result = await fetch(`https://api.spotify.com/v1/users/${props.user_id}/playlists`, {
                        method: 'POST',
                        headers: {Authorization: `Bearer ${props.token}`},
                        body: JSON.stringify({"name": playlist[0][9],
                            "description": "Playlist created with PlayNPush",
                            "public": false})
                    });

                    const createdPlaylist = await result.json();

                    fetch(`https://api.spotify.com/v1/playlists/${createdPlaylist.id}/tracks`, {
                        method: 'POST',
                        headers: {Authorization: `Bearer ${props.token}`},
                        body: JSON.stringify({
                            "uris": trackUris,
                            "position": 0
                        })
                    })
                }
                createPlaylist(props.token);
            })
            alert('Playlist created with PlayNPush');
        }}><span id='push-text' >PUSH</span></button>
    )
}

export default Push;



//



//const requestOptions = {method: 'PUT', headers: {Authorization: `Bearer ${props.token}`},
//                 body: JSON.stringify({"name": props.staged_finals, })};
//             fetch(`https://api.spotify.com/v1/users/smedjan/${profileName}`, requestOptions)