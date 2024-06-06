import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Work.css';
import { FaBatteryHalf, FaRegSun, FaSearch, FaSignal, FaSun, FaWifi } from 'react-icons/fa';

const Work = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    const [showLaterAnimation, setShowLaterAnimation] = useState(false);

    const handleClick = () => {
        setShowLaterAnimation(true);
    };

    const [time, setTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const options = {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                hour12: false,
            };
            const indiaTime = new Date().toLocaleTimeString('en-US', options);
            setTime(indiaTime);
        };

        updateTime();
        const intervalId = setInterval(updateTime, 60000);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: '0px 0px 20% 0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, options);

        const elementsToAnimate = document.querySelectorAll('.scrolleffect, .scrolleffectn');
        elementsToAnimate.forEach(element => {
            observer.observe(element);
        });

        return () => {
            elementsToAnimate.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className='work'>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className='work-content'>
                <div className='work-head scrolleffect'>
                    <h1 className='work-title'>
                        Explore Designs<br />that are
                        <span className='work-title-span'> Functional</span>
                    </h1>
                </div>
                <div className='work-boxes'>
                    <div className='work-box scrolleffect'>
                        <img src='./Assets/box-img-1.png' alt='box-img' />
                    </div>
                    <div className='work-box scrolleffect'>
                        <img src='./Assets/box-img-1.png' alt='box-img' />
                    </div>
                </div>
                <div className='work-sliders'>
                    <div className='slider'>
                        <div className='slide-track'>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='slider reverse'>
                        <div className='slide-track'>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                            <div className='slide'>
                                <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                                <div className='slide-hover'>
                                    <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' />
                                    <div className='slide-cont'>
                                        <h3 className='slide-title'>Project</h3>
                                        <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="work-animations">
                    <div className="anime-1">
                        <div className={`initial-animation ${showLaterAnimation ? 'hide' : ''}`}>
                            <div className="animation-head scrolleffect">
                                <h3 className="animation-title">Transforms your ideas into designs</h3>
                                <h5 className="animation-desc">Genius creates fully-editable UI designs with just a simple product description.</h5>
                            </div>
                            <div className="animation-input">
                                <input className="input-animation" type="text" placeholder="An app to book intergalactic travel" />
                                <button className="input-button" onClick={handleClick}>Generate</button>
                            </div>
                        </div>
                        <div className={`later-animation ${showLaterAnimation ? 'show' : ''}`}>
                            <div className="animation-1">
                                <div className='noti-bar'>
                                    <div className='noti-time'>{time}</div>
                                    <span className='noti-notch'></span>
                                    <div className='noti-icons'>
                                        <FaSignal />
                                        <FaWifi />
                                        <FaBatteryHalf />
                                    </div>
                                </div>
                                <div className='phone-input'>
                                    <FaSearch />
                                    <span>The Cosmos</span>
                                </div>
                                <div className='phone-tab'>
                                    <div class="tab-item is-active">Comets</div>
                                    <div class="tab-item">Stars</div>
                                    <div class="tab-item">Planets</div>
                                    <div class="tab-item">Galaxies</div>
                                </div>
                                <div className='tab-img'>
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                </div>
                            </div>
                            <div className="animation-2">
                                <div className="tab-img">
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                    <img src='/Assets/slide-img-2.jpg' alt='' className='tabimg' />
                                    <div className='img-desc'>
                                        Genius
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Work;