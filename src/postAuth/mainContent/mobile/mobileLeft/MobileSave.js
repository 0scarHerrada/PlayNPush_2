import React from 'react';

function MobileSave(props) {

    return (
        <button id='mobile-save-button' className='bg-color-changer' placeholder='Save' onClick={() => {
            props.save(true)
            props.stage(false)
        }}><span id='save-text'>SAVE</span></button>
    )
}

export default MobileSave;