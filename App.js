
import './App.css';
import { useState,useEffect } from 'react';

function App() {
  const [quoteInfo, setQuoteInfo] = useState({});

  useEffect(() => {
    getQuote();}, []);
  const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      setQuoteInfo({
        text:data.content,
        author:data.author,
      });
    });
  };
  return (
    <div className= "App" >
    <header id="head">
    <h1>QUOTE GENERATOR</h1>
    </header>
      <div id ="quote-box">
        <p id ="text">{quoteInfo.text}</p>
        <p id ="author">-{quoteInfo.author}</p>
        <button id = "new-quote" onClick={getQuote}>
        New Quote 
        </button>
        </div>
        </div>
        )
        // <a href={'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='} id="tweet-quote"></a>
        //  <span><img className='hello' src={require('./123.jpeg')}></img></span>
}

export default App;
