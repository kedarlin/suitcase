import React, { useEffect } from 'react';
import './Body.css';

const Body = () => {
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

      <div className='body-2 scrolleffect'>
        <img src='/Assets/img-1.png' alt='img-1' className='body-2-img' />
      </div>

      <div className='body-3'>
        <h4 className='body-3-desc scrolleffect'>
          Through extensive user research, we discovered that many e-bike users felt overwhelmed by the technology and controls on their bikes. To address this, we created a simple and intuitive interface that allows riders to easily adjust their level of assist and monitor their battery life. We also incorporated GPS navigation, allowing riders to plan their route and track their progress.
        </h4>
      </div>

      <div className='body-4 scrolleffect'>
        <img src='/Assets/img-2.png' alt='img-2' className='body-4-img' />
      </div>

      <div className='body-5 scrolleffect'>
        <img src='/Assets/img-3.png' alt='img-5' className='body-5-img' />
      </div>

      <div className='body-6'>
        <h4 className='body-6-desc scrolleffect'>
          The end result is a user-friendly electric bicycle that makes it easy for riders to enjoy the benefits of e-bikes without feeling overwhelmed by technology. With VoltBike, riding smarter has never been easier!
        </h4>
      </div>
    </div>
  );
};

export default Body;