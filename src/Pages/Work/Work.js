import React, { useContext, useEffect, useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Work.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { LuSparkle } from 'react-icons/lu';
import Phone from '../../Components/Phone/Phone';
// import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { ThemeContext } from '../../Themes/ThemeContext';

const Work = () => {
    const { theme } = useContext(ThemeContext);

    const [showLaterAnimation, setShowLaterAnimation] = useState(false);

    const handleClick = () => {
        setShowLaterAnimation(!showLaterAnimation);
    };

    useEffect(() => {
        if (theme==='dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const elements = document.querySelectorAll('.scrolleffect');
        elements.forEach((element) => {
            gsap.fromTo(
                element,
                { y: '+=70', opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
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
        const elementLeftSide = document.querySelectorAll('.scrolleffectleftside');
        elementLeftSide.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '-=70', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        marker: true,
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
        const elementRightSide = document.querySelectorAll('.scrolleffectrightside');
        elementRightSide.forEach((element) => {
            gsap.fromTo(
                element,
                { x: '+=70', opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 1,
                    scrollTrigger: {
                        trigger: element,
                        start: 'top 90%',
                        marker: true,
                        toggleActions: 'play none none none',
                    },
                }
            );
        });
    }, []);

    return (
        <div className='work'>
            <Header />
            <div className='work-content'>
                <div className='work-head scrolleffect'>
                    <h1 className='work-title'>
                        Explore Designs<br />that are
                        <span className='work-title-span'> Functional</span>
                    </h1>
                </div>
                <div className='work-boxes'>
                    {/* <Carousel
                        width="100%"
                        showThumbs={false}
                        showStatus={false}
                        centerMode={true}
                        autoPlay={true}
                        infiniteLoop={true}
                        interval={2000}
                        style={{ height: "600px"}}
                        > */}
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box scrolleffectleftside'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box scrolleffectrightside'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box scrolleffectleftside'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box scrolleffectrightside'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                    {/* </Carousel> */}
                </div>
                <div className={`work-sliders ${theme==='dark'?'dark-slide':''}`}>
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
                </div>
                <div className="work-animations">
                    <div className="anime-1">
                        <div className={`initial-animation ${showLaterAnimation ? 'hide' : ''}`}>
                            <div className="animation-head scrolleffect" style={{ color:"white"}}>
                                <h3 className="animation-title">Transforms your ideas into designs</h3>
                                <h5 className="animation-desc">Genius creates fully-editable UI designs with just a simple product description.</h5>
                            </div>
                            <div className="animation-input">
                                <input className="input-animation" type="text" placeholder="An app to book intergalactic travel" />
                                <button className="input-button" onClick={handleClick}>Generate</button>
                            </div>
                        </div>
                        <div className={`later-animation ${showLaterAnimation ? 'show' : ''}`} onClick={handleClick}>
                            <div className='phone-1'>
                                <Phone />
                            </div>
                            <div className="animation-2">
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
                    <div className='anime-2'>
                        <div className="animation-head-2 scrolleffect" style={{ color: "white"}}>
                            <h3 className="animation-title">Design with AI magic</h3>
                            <h5 className="animation-desc">Unlock your creativity and bring ideas to life with AI-powered design utilities.</h5>
                        </div>
                        <div className='design-2'>
                            <div className='img-design'>
                                <LuSparkle className='star' />
                            </div>
                            <div className='phone-2'>
                                <Phone />
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