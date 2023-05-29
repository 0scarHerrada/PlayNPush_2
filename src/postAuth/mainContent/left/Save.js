import React from 'react';

function Save(props) {

    return (
        <button id='save-button' placeholder='Save' onClick={() => {
            props.save(true)
            props.stage(false)
        }}><span id='save-text'>SAVE</span></button>
    )
}

export default Save;