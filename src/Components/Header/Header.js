import React, { useEffect, useState } from 'react';
import './Header.css';
// import { FaBars, FaMoon, FaSun, FaTimes } from 'react-icons/fa';
// import { useNavigate } from 'react-router-dom';
// import gsap from 'gsap';
// import ScrollTrigger from 'gsap/ScrollTrigger';
// import { ThemeContext } from '../../Themes/ThemeContext';

const Header = () => {
  // const [isOpen, setIsOpen] = useState(false);
  // const toggleMenu = () => {
  //   setIsOpen(!isOpen);
  // }
  // const { theme, toggleTheme } = useContext(ThemeContext);
  // const navigate = useNavigate();
  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const elements = document.querySelectorAll('.scrolleffectn');
  //   elements.forEach((element) => {
  //     gsap.fromTo(
  //       element,
  //       { y: '-=50', opacity: 0 },
  //       {
  //         y: 0,
  //         opacity: 1,
  //         delay: 0.5,
  //         duration: 1,
  //         scrollTrigger: {
  //           trigger: element,
  //           start: 'top 100%',
  //           marker: true,
  //           toggleActions: 'play none none none',
  //         },
  //       }
  //     );
  //   });
  // }, []);
  const [review, setReview] = useState(0);
  const [navActive, setNavActive] = useState(false);
  const reviewData = [
    {
      image: "/assets/profile.jpeg",
      review: "\"Naveen is kind of obsessed with design\"",
      author: "— Sam"
    },
    {
      image: "/assets/profile.jpeg",
      review: "\"Naveen is kind of obsessed with\"",
      author: "— aam"
    },
  ]

  const changeReview = () => {
    setReview(pre => (pre + 1) % 2);
    setTimeout(changeReview, 2000)
  }

  useEffect(() => {
    setTimeout(changeReview, 2000)
  }, [])



  return (
    // <div className='header scrolleffectn'>
    //   <div className='header-n'>
    //     <div className='header-logo-container' onClick={() => navigate('/')}>
    //       <div className='header-logo'>oslo</div>
    //       <div className='header-logo-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>oslo</div>
    //     </div>
    //     <div className='header-navbar'>
    //       <div className='header-items'>
    //         <div className='header-item-container' onClick={() => navigate('/work')}>
    //           <div className='header-item'>Work</div>
    //           <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Work</div>
    //         </div>
    //         <div className='header-item-container' onClick={() => navigate('/studio')}>
    //           <div className='header-item'>Studio</div>
    //           <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Studio</div>
    //         </div>
    //         <div className='header-item-container' onClick={() => navigate('/contact')}>
    //           <div className='header-item'>Contact</div>
    //           <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Contact</div>
    //         </div>
    //       </div>
    //       <button className='header-button'>Remix</button>
    //       <button className='header-button' onClick={toggleTheme} type='toggle'>
    //         {theme==='light' ? <FaMoon /> : <FaSun />}
    //       </button>
    //     </div>
    //     <div className='header-navbar-m'>
    //       <div onClick={toggleMenu} style={{ cursor: "pointer", alignItems: "center" }}>
    //         {isOpen ? <FaTimes fontSize="25px" style={{ color:"white"}} /> : <FaBars fontSize="25px" style={{ color: "white"}}/>}
    //       </div>
    //     </div>
    //   </div>
    //   {isOpen && (
    //     <div className={`header-menu-list ${isOpen ? 'open' : ''}`}>
    //       <div className='header-item-container' onClick={() => navigate('/work')}>
    //         <div className='header-item'>Work</div>
    //         <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Work</div>
    //       </div>
    //       <div className='header-item-container' /*onClick={() => navigate('/studio')}*/>
    //         <div className='header-item'>Studio</div>
    //         <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Studio</div>
    //       </div>
    //       <div className='header-item-container' /*onClick={() => navigate('/contact')}*/>
    //         <div className='header-item'>Contact</div>
    //         <div className='header-item-h' style={{ color: theme === 'light' ? "#b9b9b9" : "" }}>Contact</div>
    //       </div>
    //       <button className='header-button'>Remix</button>
    //       <button className='header-button' onClick={toggleTheme} type='toggle'>
    //         {theme==='dark' ? <FaMoon /> : <FaSun />}
    //       </button>
    //     </div>
    //   )}
    // </div>
    <div className='nav'>
      <div className={`nav-left nav-left-${review}`}>
        <img src={reviewData[review].image} alt="profile" className='nav-photo' />
        <div className='nav-name'>{reviewData[review].review} <span>{reviewData[review].author}</span></div>
      </div>
      <div className={`menu-icon ${navActive && 'menu-icon-active'}`} onClick={() => setNavActive(pre => !pre)}>
        <div className='menu-icon-line-1'></div>
        <div className='menu-icon-line-2'></div>
      </div>
      <div className={`nav-right ${navActive && 'nav-right-active'}`}>
        <a href='/work'>My Works</a>
        <a 
        onClick={(e) => {
          e.preventDefault();
          const target = document.getElementById('contacts')
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' })
          }
        }}
        >Contacts</a>
        <a href='/resume.pdf' target='_blank'>Resume</a>
      </div>
    </div>
  );
}

export default Header;