import React from 'react';

// Board component that takes in two props: guesses and answer
const Board = ({ guesses, answer }) => {
  const getCellStyle = (char, idx) => {
    if (char === answer[idx]) {
      return { backgroundColor: '#4CAF50' }; // Green - Correct and in the exact position
    } else if (answer.includes(char)) {
      return { backgroundColor: '#FFC107' }; // Yellow - Correct but in the wrong position
    } else {
      return { backgroundColor: '#333333' }; // Dark grey - Incorrect
    }
  };

  // The Board component renders the guesses and answer in a grid format using React.createElement
  return React.createElement(
    'div',
    { className: 'board' },
    guesses.map((guess, index) =>
      React.createElement(
        'div',
        { key: index, className: 'row' },
        guess.split('').map((char, idx) =>
          React.createElement(
            'div',
            { key: idx, className: 'cell', style: getCellStyle(char, idx) },
            char
          )
        )
      )
    )
  );
};

export default Board;
