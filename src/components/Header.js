import React from 'react';
import logo from './images/ALAT.png';

function Header() {
    return (
        <div className='header'>
            <div className='logo-div'>
                <img src={logo} alt='logo'></img>
            </div>
            <h1>giphyMemGame</h1>
        </div>
    )
}

export default Header;
