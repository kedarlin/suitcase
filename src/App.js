import React, { useState, useEffect } from 'react';
import Header from './Components/Header/Header';
import Body from './Components/Body/Body';
import Footer from './Components/Footer/Footer';
import './App.css';

function App() {

  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(prefersDarkMode);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(prevMode => !prevMode);
  };
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <div className="App">
      <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode}/>
      <Body />
      <Footer />
    </div>
  );
}

export default App;
