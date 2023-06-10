import React from 'react';

function Stage(props) {
    return (
        <button id='stage-button' className='bg-color-changer' placeholder='Stage' onClick={() => {
            props.stage(true)
            props.save(false)

            if (document.getElementById('name-a-playlist').value && props.alpha_playlist.length > 0) {
                const betaName = document.getElementById('name-a-playlist').value;

                const trackDurations = props.alpha_playlist.map(track => track[6])

                const playlistDuration = trackDurations.reduce((accumulator, currentValue) => {
                    return accumulator + currentValue
                },0);

                const roundedPlaylistDuration = Math.round(playlistDuration/60000)

                const namedAlpha = props.alpha_playlist.map(track =>
                    [...track, betaName, roundedPlaylistDuration, 'false']
                )
                props.set_beta((prev) => [...prev, namedAlpha])
            }
        }}><span id='stage-text'>STAGE</span></button>
    )
}

export default Stage;