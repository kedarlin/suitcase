import React, { useContext, useEffect } from 'react';
import './Body.css';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { ThemeContext } from '../../Themes/ThemeContext';

const Body = () => {
  const { theme } = useContext(ThemeContext);
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
  }, []);

  return (
    <div className='body'>
      <div className='body-1'>
        <h1 className='body-1-head scrolleffect'>Suitcase App</h1>
        <h2 className='body-1-title scrolleffect'>Travel Smart & Safely</h2>
        <h4 className='body-1-desc scrolleffect'>
          Ziggo, the smart suitcase app that lets you control your luggage like a smart home! With Ziggo, you can easily lock and unlock your suitcase, check the battery level, and even receive notifications if your suitcase strays too far from you.
        </h4>
        <div className='body-1-items scrolleffect'>
          <div className='body-1-item'>
            <p className='body-1-item-title'>Client</p>
            <p className='body-1-item-desc'>Client Example</p>
          </div>
          <div className='body-1-item'>
            <p className='body-1-item-title'>Services</p>
            <div className='body-1-item-services'>
              <p className='body-1-item-desc'>Visual Design</p>
              <p className='body-1-item-desc'>UI & UX Design</p>
            </div>
          </div>
          <div className='body-1-item'>
            <p className='body-1-item-title'>Industries</p>
            <p className='body-1-item-desc'>Travel</p>
          </div>
          <div className='body-1-item'>
            <p className='body-1-item-title'>Date</p>
            <p className='body-1-item-desc'>January 2023</p>
          </div>
        </div>
      </div>

      <div className='body-2 scrolleffect' style={{ backgroundColor: theme==='light'?"#f2f2f2":""}}>
        <img src='/Assets/img-1.png' alt='img-1' className='body-2-img' />
      </div>

      <div className='body-3'>
        <h4 className='body-3-desc scrolleffect'>
          Through extensive user research, we discovered that many e-bike users felt overwhelmed by the technology and controls on their bikes. To address this, we created a simple and intuitive interface that allows riders to easily adjust their level of assist and monitor their battery life. We also incorporated GPS navigation, allowing riders to plan their route and track their progress.
        </h4>
      </div>

      <div className='body-4 scrolleffect' style={{ backgroundColor: theme==='light'?"#f2f2f2":""}}>
        <img src='/Assets/img-2.png' alt='img-2' className='body-4-img' />
      </div>

      <div className='body-5 scrolleffect' style={{ backgroundColor: theme==='light'?"#f2f2f2":""}}>
        <img src='/Assets/img-3.png' alt='img-5' className='body-5-img' />
      </div>

      <div className='body-6 scrolleffect'>
        <h4 className='body-6-desc'>
          The end result is a user-friendly electric bicycle that makes it easy for riders to enjoy the benefits of e-bikes without feeling overwhelmed by technology. With VoltBike, riding smarter has never been easier!
        </h4>
      </div>
    </div>
  );
};

export default Body;