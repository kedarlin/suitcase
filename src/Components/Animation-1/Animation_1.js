import React, { useContext, useEffect, useState } from 'react'
import './Animation_1.css'
import { ThemeContext } from '../../Themes/ThemeContext';
import Phone from '../Phone/Phone';

const AnimationOne = () => {
  const { theme } = useContext(ThemeContext);
    const [showInitialAnimation, setShowInitialAnimation] = useState(true);
    const [showLaterAnimation, setShowLaterAnimation] = useState(false);
    const [showGif, setShowGif] = useState(false);

    const handleClick = () => {
        setShowInitialAnimation(!showInitialAnimation);
        const duration = showInitialAnimation ? 2000 : 0;
        if(showInitialAnimation)
        setShowGif(true);
        setTimeout(() => {
          setShowGif(false);
          setShowLaterAnimation(!showLaterAnimation);
        }, duration);
      };

    useEffect(() => {
        if (theme === 'dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);
  return (
    <div className="anime-1" style={{ backgroundColor: theme === 'light' ? "#f2f2f2" : "" }}>
      <div className={`initial-animation ${showInitialAnimation ? "" : 'hide'}`}>
        <div className="animation-head scrolleffect" style={{ color: theme === 'light' ? "black" : "white" }}>
          <h3 className="animation-title">Transforms your ideas into designs</h3>
          <h5 className="animation-desc">Genius creates fully-editable UI designs with just a simple product description.</h5>
        </div>
        <div className="animation-input">
          <input className="input-animation" type="text" placeholder="An app to book intergalactic travel" style={{ backgroundColor: theme === 'light' ? "#d3d3d3" : "", color: theme === 'light' ? "black" : "white" }} />
          <button className="input-button" onClick={handleClick}>Generate</button>
        </div>
      </div>
      {showGif && (
        <div className="gif-container" style={{ display: "flex", width: "100%", alignContent: "center", justifyContent: "center" }}>
          <img src="/Assets/spinner.gif" alt="Loading animation" />
        </div>
      )}
      <div className={`later-animation ${showLaterAnimation ? 'show' : ''}`} onClick={handleClick}>
        <div className='phone-1'>
          <Phone />
        </div>
        <div className="animation-2" style={{ backgroundColor: theme === 'light' ? "#d3d3d3" : "", color: theme === 'light' ? "black" : "white" }}>
          <div className="tab-img">
            <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
            <div className='img-desc'>
              Genius
            </div>
            <img src='/Assets/slide-img-5.jpg' alt='' className='tabimg' />
            <div className='img-desc'>
              Genius
            </div>
            <img src='/Assets/slide-img-1.jpg' alt='' className='tabimg' />
            <div className='img-desc'>
              Genius
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimationOne