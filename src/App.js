import React, {useState, useEffect} from 'react';
import {BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faCheckSquare, faCoffee, faUser, faBars, faSquare, faMedal, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Score from './components/Score';
import Game from './components/Game';
import Header from './components/Header';
import Home from './components/Home';
import GameP from './components/GameP';


import './App.css';

library.add(fab, faSquare, faMedal, faBars, faCheckSquare, faUser, faCoffee, faFacebookF, faTwitter, faLinkedinIn, faInstagram)


function App() {

  

  const initialCount = 0;
    const [count, setCount] = useState(0);
    const [bestScore, setScore] = useState(0);
    const [scoreBoard, setBoardScore] = useState([]);
    // const [game, setGame] = useState(false);

  const increment = () => {
    if(count) {
      medal();
    }
    setCount(count => count+2)
  }

  const decrement = () => {
    if(count) {
      medal();
    }
    setCount(count => count-5)
    
  }

  useEffect( () => {
    getBestScore();
    setBoardScore([...scoreBoard, count])
    console.log(bestScore);
  },[count])

  const getBestScore = () => {
    let highestScore = 0;
    for(let i = 0; i < scoreBoard.length; i++) {
      if (scoreBoard[i] > highestScore ) {
          highestScore = scoreBoard[i];
      }
    }
    setScore(highestScore)
    return highestScore;
  }

  const [newMedal, setMedal] = useState('');

  const medal = () => {

    if ( count < 10 ) {
      setMedal(null);
    }
    if ((count >= 10) && (count < 20) ) {
      setMedal(<div className='medal' style={{
        color: ''
      }}>
        <p>Bronze </p>
        <div className='icon-div' style={{
          color: '#CD7F32',
        }}><FontAwesomeIcon size="2x" icon={["fas", "medal"]} /></div>
      </div>)
    }
    if ((count >= 20) && (count < 30) ) {
      setMedal(<div className='medal' style={{
        color: 'silver',
      }}>
        <p>Silver </p>
        <div className='icon-div'><FontAwesomeIcon size="2x" icon={["fas", "medal"]} /></div>
      </div>)
    }

    if ((count >= 60) && (count < 100) ) {
      setMedal(<div className='medal' style={{
        color: '#FFD700',
      }}>
        <p>Gold </p>
        <div className='icon-div'><FontAwesomeIcon size="2x" icon={["fas", "medal"]} /></div>
      </div>)
    }
 }

 useEffect( () => {
   medal();
 },[count])

  

  return (
    <BrowserRouter>
      <div className="App">
        <div className='container'>
          <Header />
          <Switch>
            <Route path="/" component={Home} exact />

            <Route path="/gamep">
              <GameP  count={count} newMedal={newMedal} bestScore={bestScore} decrement={decrement} medal={medal} increment={increment}  />
            </Route>
          </Switch>
          {/* <Game decrement={decrement} medal={medal} increment={increment} /> */}

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
