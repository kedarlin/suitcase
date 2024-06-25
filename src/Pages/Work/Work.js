import React, { useEffect } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import './Work.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import AnimationOne from '../../Components/Animation-1/Animation_1';
import AnimationTwo from '../../Components/Animation-2/Animation_2';
import SliderAnimation from '../../Components/SliderAnimation/SliderAnimation';
import { FiArrowUpRight } from 'react-icons/fi';

const Work = () => {

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
                    <div className='work-box-project scrolleffectleftside'>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box-desc'>
                            <div className='work-box-name'>
                                <p className='work-box-title'>Suitcase App</p>
                                <FiArrowUpRight size={20} />
                            </div>
                            <div className='work-box-name-h'>
                                <p className='work-box-title'>Travel Smart and Safety</p>
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='work-box-project scrolleffectrightside'>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box-desc'>
                            <div className='work-box-name'>
                                <p className='work-box-title'>Suitcase App</p>
                                <FiArrowUpRight size={20} />
                            </div>
                            <div className='work-box-name-h'>
                                <p className='work-box-title'>Travel Smart and Safety</p>
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='work-box-project scrolleffect'>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box-desc'>
                            <div className='work-box-name'>
                                <p className='work-box-title'>Suitcase App</p>
                                <FiArrowUpRight size={20} />
                            </div>
                            <div className='work-box-name-h'>
                                <p className='work-box-title'>Travel Smart and Safety</p>
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='work-box-project scrolleffectleftside'>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box-desc'>
                            <div className='work-box-name'>
                                <p className='work-box-title'>Suitcase App</p>
                                <FiArrowUpRight size={20} />
                            </div>
                            <div className='work-box-name-h'>
                                <p className='work-box-title'>Travel Smart and Safety</p>
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                    <div className='work-box-project scrolleffectrightside'>
                        <div className='work-box scrolleffect'>
                            <img src='./Assets/box-img-1.png' alt='box-img' />
                        </div>
                        <div className='work-box-desc'>
                            <div className='work-box-name'>
                                <p className='work-box-title'>Suitcase App</p>
                                <FiArrowUpRight size={20} />
                            </div>
                            <div className='work-box-name-h'>
                                <p className='work-box-title'>Travel Smart and Safety</p>
                                <FiArrowUpRight size={20} />
                            </div>
                        </div>
                    </div>
                </div>
                <SliderAnimation />
                {/* <div className="work-animations">
                    <AnimationOne />
                    <AnimationTwo />
                </div> */}
            </div>
            <Footer />
        </div>
    );
};

export default Work;