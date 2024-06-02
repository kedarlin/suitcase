import React, { useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Work.scss'; // Import the SCSS file

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
                    <div className='slider reverse'>
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
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Work;