import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export default function Home ({startGame}) {

    return(
        <div style={{
            display: 'grid',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <h3 style={{
                textAlign: 'center',
                color: '#fefefe'

            }}>Welcome to memGame</h3>
            <p>
                Simple rule tho, but hard to live by with time. <em >!!!Never click an image twice.</em>

            </p>
            <div><img src='https://miro.medium.com/max/550/0*GJ1K5CSaIgHc560m.gif' alt='giphy' /></div>
            <button><Link to="/gamep" >Play</Link></button>
        </div>
    )
}