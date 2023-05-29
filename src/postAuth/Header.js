import './header/Logout.css';
import './header/Nav.css';
import './header/MiniPlayer.css';
import React, {useEffect, useState} from 'react';
import Logout from './header/Logout';
import Nav from './header/Nav';
import MiniPlayer from './header/MiniPlayer';

function Header(props) {

    return (
        <section id='header'>
            <Logout />
            <Nav token={props.token}/>
        </section>
    )
}

export default Header;