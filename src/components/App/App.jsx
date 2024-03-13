import Button from '../Button/Button' 
import { useState } from 'react';
import './App.css'
import Counter from '../Counter/Counter';
import PasswordStrengthChecker from '../PasswordStrengthChecker/PasswordStrengthChecker';


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
      <button onClick={handleVisibility}>Toggle visibility</button>
      <Counter />
      <PasswordStrengthChecker />
      <Button handleClick={() => generateRandomNumber(10)}>1-10</Button>
      <Button handleClick={() => generateRandomNumber(20)}>1-20</Button>
      <Button handleClick={() => generateRandomNumber(30)}>1-30</Button>
      <h2>{randomNum}</h2>
    </>
  );
}


export default App
