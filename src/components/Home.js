import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 

export default function Home ({startGame}) {

    return(
        <div style={{
            display: 'grid',
            gridGap: '20px',
            justifyContent: 'center',
            alignItems: 'center',

        }}>
            <div style={{
                display: 'grid',
            }}>
                <h3 style={{
                    textAlign: 'center',
                    color: '#fefefe'

                }}>Welcome to memGame</h3>
                <p>
                    Simple rule tho, but hard to live by with time. <em >!!!Never click an image twice.</em>

                </p>
            </div>
            <div style={{
                paddingLeft: '20px',
            }}><img src='https://miro.medium.com/max/550/0*GJ1K5CSaIgHc560m.gif' alt='giphy' /></div>
            <button style={{
                color: '#fefefe',
                fontSize: '3.5vmin',
                paddingTop: '10px',
                // borderolor
            }}><Link to="/gamep" style={{
                color: '#fefefe',
                textDecoration: 'none',
            }}>Play</Link></button>
        </div>
    )
}