import './mobileMiddle/MobilePool.css';
import './mobileMiddle/MobileSearch.css';
import React, { useState, useEffect } from 'react';
import MobilePool from './mobileMiddle/MobilePool';

function MobileMiddle(props) {

    const [trackQuery, setTrackQuery] = useState('');
    const [trackObject, setTrackObject] = useState();

    const getQuery = (event) => {
        if (event.key === 'Enter') {
            // 👇 Get input value
            const track = event.target.value.toLowerCase().replace(/\s+/g, '');
            setTrackQuery(track);
        }
    }

    useEffect(() => {
        if (trackQuery.length > 0) {
            async function fetchQuery(query, token) {
                const result = await fetch("https://api.spotify.com/v1/search?q=" + query + "&type=track&market=US&limit=32"
                    , {
                        method: "GET", headers: {Authorization: `Bearer ${token}`}
                    });
                const track = await result.json();
                setTrackObject(track);
            }
            fetchQuery(trackQuery, props.token);
        }
    }, [trackQuery])

    return (
        <section id='mobile-middle' >
            <MobilePool pool={trackObject} token={props.token} add_to_alpha={props.add_to_alpha} colors={props.colors}/>
            <input onKeyDown={getQuery} id='mobile-search-bar' type="search" placeholder='Search by Song or Artist'
                   style={{backgroundColor: props.colors[1], color: props.colors[2], borderColor: props.colors[3]}}/>
        </section>
    )
}

export default MobileMiddle;