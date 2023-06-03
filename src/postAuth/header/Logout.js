import React from 'react';

function Logout() {
    return (
        <div id='logout-container' onClick={() => {
            window.close() ;
        }}>
            <span>EXIT</span>
            <span id='logout' className="material-symbols-outlined">logout</span>
        </div>
    )
}

export default Logout;