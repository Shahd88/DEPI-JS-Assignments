import React, { useState } from 'react';

function App() {
  const initialTexts = [
    "What is React?",
    "What are props in React?",
    "What is JSX",
    "What is React Hooks",
    "What is the use of useEffect React Hooks",
    " What are keys in React?"
  ];

  const answers = [
    "React is a front-end and open-source JavaScript library",
    "The props in React are the inputs to a component of React",
    "JSX stands for JavaScript XML. It allows us to write HTML inside JavaScript and place them in the DOM without using functions like appendChild( ) or createElement( ).",
    "React Hooks are the built-in functions that permit developers for using the state and lifecycle methods within React components",
    "The useEffect React Hook is used for performing the side effects in functional components",
    "A key is a special string attribute that needs to be included when using lists of elements."
  ];

  const initialColors = Array(6).fill("#f0f0f0");

  const [texts, setTexts] = useState(initialTexts);
  const [colors, setColors] = useState(initialColors);

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    if (index === activeIndex) {
      setTexts(initialTexts);
      setColors(initialColors);
      setActiveIndex(null);
    } else {
      const newTexts = [...initialTexts];
      newTexts[index] = answers[index];

      const newColors = [...initialColors];
      newColors[index] = "#5388EF";

      setTexts(newTexts);
      setColors(newColors);
      setActiveIndex(index);
    }
  };

  const divStyle = {
    padding: '20px',
    margin: '10px',
    textAlign: 'center',
    borderRadius: '8px',
    cursor: 'pointer',
    fontFamily: 'Arial, sans-serif',
    fontSize: '18px',
    color: '#a2a2a2',
  };

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
      {texts.map((text, index) => (
        <div
          key={index}
          style={{ ...divStyle, backgroundColor: colors[index], width: '400px', height: '300px' }}
          onClick={() => handleClick(index)}
        >
          {text}
        </div>
      ))}
    </div>
  );
}

export default App;


