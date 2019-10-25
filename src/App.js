import React, {useState, useMemo} from 'react';
import fp from 'lodash/fp'
import Ship from './Components/Ship';
import ClickedNumbers from './Components/ClickedNumbers';
import Stars from './Components/Stars';
import ActionButton from './Components/ActionButton';
import './App.css';

const allNumbers = [1,2,3,4,5,6,7,8,9];
const generateRandomNumber = () => fp.random(1,9)
const DEFAULT_NO_CHANCES = 5;

function App() {
  const [noOfStars, setNoOfStars] = useState(generateRandomNumber());
  const [noOfChances, setNoOfChances] = useState(DEFAULT_NO_CHANCES);
  const [clickedNumbers, setClickNumbers] = useState([]);
  const [successNumbers, setSuccessNumbers] = useState([]);
  const handleNoClick = useMemo(() => (e)=>{
    const num =  Number(e.currentTarget.value);
      if(clickedNumbers.includes(num)) {
        setClickNumbers(clickedNumbers.filter(n => n !== num))
      } else {
        setClickNumbers([...clickedNumbers,num]);
      }
  },[clickedNumbers]);

const handleEqualButton = useMemo(() => (e) => {
  const sum = clickedNumbers.reduce((agg,ele)=> agg+ele, 0);

  if(sum === noOfStars){
    setSuccessNumbers(fp.uniq([...successNumbers, ...clickedNumbers]))
    setNoOfStars(generateRandomNumber());
  } else {
    setNoOfChances(0);
  }
  setClickNumbers([]);
},[clickedNumbers, noOfStars, successNumbers]);


const handleRefreshButton = useMemo(() => (e) => {
  setNoOfChances(noOfChances - 1)
  setNoOfStars(generateRandomNumber());
},[noOfChances])


const restartGame = useMemo(() => () => {
  setClickNumbers([]);
  setSuccessNumbers([]);
  setNoOfChances(DEFAULT_NO_CHANCES);
}, [])

const lostGame = noOfChances === 0;
const wonGame = successNumbers.length === allNumbers.length;
const gameEnded = lostGame || wonGame;

const getContent = () => {
  if(gameEnded) return (
    <>
      <h3 className="App-end-message">{lostGame? 'You Lose': 'You Win'} </h3>
      <button className="App-restart-button" type="button" onClick={restartGame} > Play Again</button>
    </>
  )
  return (
    <>
    <div className="Game-Body">
      <div className="App-body-column">
        <Stars noOfStars={noOfStars} />
      </div>
      <div className="App-body-column">
        <ActionButton handleClick={handleEqualButton} content={'🆗'}/>
        <ActionButton  handleClick={handleRefreshButton} content={'🔄'}/>
      </div>
      <div className="App-body-column">
        <ClickedNumbers numbers={clickedNumbers} handleNoClick={handleNoClick} />
      </div>
    </div>
    <div>
      <Ship successNumbers={successNumbers} allNumbers={allNumbers} handleNoClick={handleNoClick}/>
    </div>
    </>
  )
};

  return (
    <div className="App">
    <header className="App-header">
    <div> Play Nine </div>
    <div> {noOfChances} chances </div>
    </header>
      <div className="App-Body">
      {getContent()}
      </div>
    </div>
  );
}

export default App;
