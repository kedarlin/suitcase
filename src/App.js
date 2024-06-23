import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Work from './Pages/Work/Work';
import { ThemeProvider } from './Themes/ThemeContext';
import Studio from './Pages/Studio/Studio';
import Contact from './Pages/Contacts/Contact';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/work' element={<Work />} />
            <Route path='/studio' element={<Studio />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;