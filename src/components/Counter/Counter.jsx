import { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
 
	const updateCount = (newCount) => {
	  setCount((prevCount) => prevCount + newCount);
	};
 
	const increment = () => {
	  updateCount(1);
	};
 
	const decrement = () => {
	  if (count > 0) {
		 updateCount(-1);
	  }
	};
 
	return (
	  <div>
		 <h2>Counter: {count}</h2>
		 <button onClick={increment}>Increment</button>
		 <button onClick={decrement}>Decrement</button>
	  </div>
	);
 };

export default Counter