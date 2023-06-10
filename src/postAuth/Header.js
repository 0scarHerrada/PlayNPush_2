import './header/Nav.css';
import React from 'react';
import Nav from './header/Nav';

function Header(props) {

    return (
        <section id='header' style={{backgroundColor: props.colors[0]}}>
            <Nav token={props.token} dark_mode={props.dark_mode} set_dark_mode={props.set_dark_mode} colors={props.colors}/>
        </section>
    )
}

export default Header;