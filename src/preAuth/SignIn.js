import React from 'react';

function SignIn() {
    return (
        <div id='button-div'>
            <button id='button'>
                <a className='login-button' href="/auth/login"><span id='log-in-text' >Connect</span></a>
            </button>
        </div>
    );
}

export default SignIn;