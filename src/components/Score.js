import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Score({ count, newMedal, bestScore }) { 
     
    
    return (
        <div className='score-div' >
            <h2 style={{color: '#fefefe',}} className='score-header'>Score Board</h2>
            <div className='score-board'>
                <div>
                    <p>Best Score:</p> 
                    <p><i>{bestScore}</i></p>
               </div>

                <div>
                    <p>Player Score:</p> 
                    <p><i>{count}</i></p>
               </div>
                <div className='medal-div'>
                   {newMedal} 
                </div>
            </div>
            
            {/* <div className='medal-div'> */}
                {/* {newMedal} */}
            {/* </div> */}
        </div>
    )
}

export default Score
