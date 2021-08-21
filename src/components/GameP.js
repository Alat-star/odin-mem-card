import React from 'react';
import Score from './Score';
import Game from './Game';


function GameP({ count, newMedal, bestScore, increment, decrement, medal }) {
    return (
        <div style={{
            display: 'grid',
            gridGap: '10px',
        }}>
            <Score count={count} newMedal={newMedal} bestScore={bestScore} />
            <Game decrement={decrement} medal={medal} increment={increment} />
        </div>
    )
}

export default GameP
