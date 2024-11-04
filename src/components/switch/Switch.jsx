import React, { useState, useEffect } from 'react';
import './yypp.css'; // Include your styles here
import Pages from '../pages/Pages'

function Switch() {
  // State to track the theme, default is 'light'
  const [theme, setTheme] = useState('light');

  // Toggle function to switch themes
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Update the body class to apply the theme globally
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`app ${theme}`}>
      <h1>{theme === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
      <button  onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
     
      <Pages/>

    </div>
  );
}

export default Switch;