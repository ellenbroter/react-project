import { useState } from 'react';

const RandomQuote = () => {
	const quotes = [ "The only way to do great work is to love what you do. - Steve Jobs",
		"Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
		"Your time is limited, don't waste it living someone else's life. - Steve Jobs",
		"Strive not to be a success, but rather to be of value. - Albert Einstein",
		"The way to get started is to quit talking and begin doing. - Walt Disney",
		"Life is what happens when you're busy making other plans. - John Lennon", ];

const [randomQuote, setRandomQuote] = useState('-');

  const generateRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setRandomQuote(quotes[randomIndex]);
  };

  return (
    <div>
      <button onClick={generateRandomQuote}>Generate Random Quote</button>
      <p>{randomQuote}</p>
    </div>
  );
};

export default RandomQuote;