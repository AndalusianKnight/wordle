import React from 'react';
import Board from './board';
import Keyboard from './keyboard';
import './App.css';

// App component that renders the Board and Keyboard components
const App = () => {
  const guesses = ["might", "flood", "stray"];
  const answer = "moody";

  return React.createElement(
    'div', 
    { className: 'App' },
    React.createElement('h1', null, 'Wordle - React Edition'),
    React.createElement('h2', null, 'Guess the word'),
    React.createElement(Board, { guesses: guesses, answer: answer }),
    React.createElement(Keyboard, null)
  );
}

export default App;
