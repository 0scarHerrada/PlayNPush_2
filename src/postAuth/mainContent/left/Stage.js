import React from 'react';

function Stage(props) {
    return (
        <button id='stage-button' placeholder='Stage' onClick={() => {
            props.stage(true)
            props.save(false)
        }}><span id='stage-text'>STAGE</span></button>
    )
}

export default Stage;