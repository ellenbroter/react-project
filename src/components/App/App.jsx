import { useState } from 'react';
import styles from './App.module.css'
import Button from '../Button/Button' 
import Counter from '../Counter/Counter';
import PasswordStrengthChecker from '../PasswordStrengthChecker/PasswordStrengthChecker';
import RandomQuote from '../RandomQuote/RandomQuote';
import CountdownTimer from '../CountdownTimer/CountdownTimer';



function App() {
  const [isVisible, setIsVisible] = useState(true);
  const [randomNum, setRandomNum] = useState('-');

  const handleVisibility = () => {
    setIsVisible(!isVisible);
  }

  const generateRandomNumber = (max) => {
    const randomNum = Math.floor(Math.random() * max + 1);
    setRandomNum(randomNum);
  }

  return (
    <>
      <h1>{isVisible ? 'I am visible, right here!' : ''}</h1>
      <button onClick={handleVisibility} className={styles.myButton}>Toggle visibility</button>
      <Counter />
      <PasswordStrengthChecker />
      <Button handleClick={() => generateRandomNumber(10)}>1-10</Button>
      <Button handleClick={() => generateRandomNumber(20)}>1-20</Button>
      <Button handleClick={() => generateRandomNumber(30)}>1-30</Button>
      <h2>{randomNum}</h2>
      <RandomQuote />
      <CountdownTimer />
    </>
  );
}


export default App
