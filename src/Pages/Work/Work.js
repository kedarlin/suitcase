import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Marquee from "react-fast-marquee";
import './Work.css';

const Work = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    const [isMarqueePaused, setIsMarqueePaused] = useState(false);

    const handleMarqueeHover = () => {
        setIsMarqueePaused(true);
    };

    const handleMarqueeLeave = () => {
        setIsMarqueePaused(false);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    return (
        <div className='work'>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className='work-content'>
                <div className='work-head'>
                    <h1 className='work-title'>
                        Explore Designs<br />that are
                        <span className='work-title-span'> Functional</span>
                    </h1>
                </div>
                <div className='work-sliders' onMouseEnter={handleMarqueeHover} onMouseLeave={handleMarqueeLeave}>
                    <Marquee pauseOnHover={isMarqueePaused} speed={80}>
                        <div className='work-slides'>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                            </div>
                        </div>
                    </Marquee>
                    <Marquee pauseOnHover={isMarqueePaused} direction='right' speed={80}>
                        <div className='work-slides'>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' />
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                            </div>
                        </div>
                    </Marquee>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Work;