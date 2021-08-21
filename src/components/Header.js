import React from 'react';
import logo from './images/ALAT.png';

function Header() {
    return (
        <div className='header' style={{
            backgroundColor: 'rgba(37,37,37,.1)',
        }}>
            <div className='logo-div'>
                <img src={logo} alt='logo'></img>
            </div>
            <h1>giphyMemGame</h1>
        </div>
    )
}

export default Header;
