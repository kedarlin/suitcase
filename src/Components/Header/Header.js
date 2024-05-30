import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className='header scrolleffectn'>
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
      </div>
      
    </div>
  );
}

export default Header;