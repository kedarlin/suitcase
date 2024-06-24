import React, { useState } from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleVideoVisibilityChange = (isVisible) => {
    if (isVisible) {
      setIsVideoPlaying(true);
    } else {
      setIsVideoPlaying(false);
    }
  };

  return (
    <div className='contact'>
      <Header />
      <img className='contact-img' src='/Assets/oslo_phone_1.avif' alt='syncfit-img' />
      <div className='contact-video-container'>
        <video
          className='contact-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={isVideoPlaying}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onVisibilityChange={handleVideoVisibilityChange}
        >
          <source src='/Assets/syntiro_oslo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='contact-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='contact-video-container'>
        <video
          className='contact-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={isVideoPlaying}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onVisibilityChange={handleVideoVisibilityChange}
        >
          <source src='/Assets/syntiro_oslo_vidoe_2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='contact-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='contact-video-container'>
        <video
          className='contact-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={isVideoPlaying}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onVisibilityChange={handleVideoVisibilityChange}
        >
          <source src='/Assets/syntiro_oslo_vidoe_3.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='contact-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='contact-video-container'>
        <video
          className='contact-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={isVideoPlaying}
          onPlay={() => setIsVideoPlaying(true)}
          onPause={() => setIsVideoPlaying(false)}
          onVisibilityChange={handleVideoVisibilityChange}
        >
          <source src='/Assets/syntiro_oslo_vidoe_4.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='contact-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <Footer />
    </div>
  );
}

export default Contact;