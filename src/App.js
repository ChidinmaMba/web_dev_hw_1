//Create a React app from scratch.

//Show a single h1 that says "Good morning" if between midnight and 12PM.

//or "Good Afternoon" if between 12PM and 6PM.

//or "Good evening" if between 6PM and midnight.

//Apply the "heading" style in the styles.css

//Dynamically change the color of the h1 using inline css styles.

//Morning = red, Afternoon = green, Night = blue.

import React, { useState, useEffect } from 'react';
import './App.css';

function App() {

  const [color, setColor] = useState('');
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    // we only need hours for conditional styling
    const currTime = new Date().getHours();

    if (currTime >= 0 && currTime < 12) {
      setGreeting('Good morning');
      setColor('red');
    }
    else if (currTime >= 12 && currTime < 18) {
      setGreeting('Good Afternoon');
      setColor('green');
    } 
    else {
      setGreeting('Good evening');
      setColor('blue');
    }
  }, []);

  return (
    <div className="App">
      <h1 style={{ color }} className="heading"> {greeting} </h1>
    </div>
  );
}

export default App;
