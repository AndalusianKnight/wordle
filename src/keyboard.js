import React from 'react';

// Keyboard component that renders the keyboard
const Keyboard = () => {
  const keys = [
    'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
    'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
    'Z', 'X', 'C', 'V', 'B', 'N', 'M'
  ];

  return React.createElement(
    'div',
    { className: 'keyboard' },
    keys.map(key => 
      React.createElement('button', { key: key, className: 'key' }, key)
    )
  );
};

export default Keyboard;
