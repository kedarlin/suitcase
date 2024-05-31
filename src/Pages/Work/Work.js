import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import './Work.css'

const Work = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

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
        <div className='work'>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className='work-content'>
                <div className='work-head'>
                    <h1 className='work-title'>
                        Explore Designs<br />that is
                        <span className='work-title-span'> Functional</span>
                    </h1>
                </div>
                <div className='work-sliders'>
                    <div className='work-slider one'>
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
                        <div className='slide'>
                            <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                        </div>
                        <div className='slide'>
                            <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                        </div>
                        <div className='slide'>
                            <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                        </div>
                        <div className='slide'>
                            <img src='/Assets/slide-img-6.jpg' alt='slide-img' />
                        </div>
                    </div>
                    {/* <div className='work-slider two'>
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
                    </div> */}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Work