import React, { useEffect, useState } from 'react';
import './Header.css';
import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Header = ({ toggleTheme, isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const elements = document.querySelectorAll('.scrolleffectn');
    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: '-=50', opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 1,
          scrollTrigger: {
            trigger: element,
            start: 'top 100%',
            marker: true,
            toggleActions: 'play none none none',
          },
        }
      );
    });
  }, []);

  return (
    <div className='header scrolleffectn'>
      <div className='header-n'>
        <div className='header-logo-container' onClick={() => navigate('/')}>
          <div className='header-logo'>oslo</div>
          <div className='header-logo-h'>oslo</div>
        </div>
        <div className='header-navbar'>
          <div className='header-items'>
            <div className='header-item-container' onClick={() => navigate('/work')}>
              <div className='header-item'>Work</div>
              <div className='header-item-h'>Work</div>
            </div>
            <div className='header-item-container' onClick={() => navigate('/studio')}>
              <div className='header-item'>Studio</div>
              <div className='header-item-h'>Studio</div>
            </div>
            <div className='header-item-container' onClick={() => navigate('/contact')}>
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
            {isOpen ? <FaTimes fontSize="25px" className='darkmode' /> : <FaBars fontSize="25px" className='darkmode' />}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className='header-menu-list'>
          <div className='header-item-container' onClick={() => navigate('/work')}>
            <div className='header-item'>Work</div>
            <div className='header-item-h'>Work</div>
          </div>
          <div className='header-item-container' onClick={() => navigate('/studio')}>
            <div className='header-item'>Studio</div>
            <div className='header-item-h'>Studio</div>
          </div>
          <div className='header-item-container' onClick={() => navigate('/contact')}>
            <div className='header-item'>Contact</div>
            <div className='header-item-h'>Contact</div>
          </div>
          <button className='header-button'>Remix</button>
          <button className='header-button' onClick={toggleTheme} type='toggle'>
            {isDarkMode ? <FaMoon /> : <FaSun />}
          </button>
        </div>
      )}
    </div>
  );
}

export default Header;