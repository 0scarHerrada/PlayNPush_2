import './middle/Pool.css';
import './middle/Search.css';
import './middle/SortBy.css';
import React, {useEffect, useState} from 'react';
import Pool from './middle/Pool';
import Search from './middle/Search';
import SortBy from './middle/SortBy';


function Middle(props) {

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
        <section id='middle'>
            <Pool pool={trackObject} token={props.token} add_to_alpha={props.add_to_alpha}/>
            <input onKeyDown={getQuery} id='search-bar' type="search" placeholder='Search by Song or Artist'/>
        </section>
    )
}

export default Middle;