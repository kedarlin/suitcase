import React, { useState } from 'react';
import './Header.css';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className='header scrolleffectn'>
      <div className='header-n'>
        <div className='header-logo-container'>
          <div className='header-logo'>oslo</div>
          <div className='header-logo-h'>oslo</div>
        </div>
        <div className='header-navbar'>
          <div className='header-items'>
            <div className='header-item-container'>
              <div className='header-item'>Work</div>
              <div className='header-item-h'>Work</div>
            </div>
            <div className='header-item-container'>
              <div className='header-item'>Studio</div>
              <div className='header-item-h'>Studio</div>
            </div>
            <div className='header-item-container'>
              <div className='header-item'>Contact</div>
              <div className='header-item-h'>Contact</div>
            </div>
          </div>
          <button className='header-button'>Remix</button>
          <button className='header-button' onClick={toggleTheme} type='toggle'>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
        <div className='header-navbar-m'>
          <div onClick={toggleMenu} style={{ cursor: "pointer", alignItems: "center" }}>
            {isOpen ? <FaTimes fontSize="25px" className='darkmode'/> : <FaBars fontSize="25px" className='darkmode'/>}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='header-menu-list'>
          <div className='header-item-container'>
            <div className='header-item'>Work</div>
            <div className='header-item-h'>Work</div>
          </div>
          <div className='header-item-container'>
            <div className='header-item'>Studio</div>
            <div className='header-item-h'>Studio</div>
          </div>
          <div className='header-item-container'>
            <div className='header-item'>Contact</div>
            <div className='header-item-h'>Contact</div>
          </div>
          <button className='header-button'>Remix</button>
        </div>
      )}
    </div>
  );
}

export default Header;