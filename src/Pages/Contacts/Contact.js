import React from 'react';
import './Contact.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';

const Contact = () => {

  return (
    <div className='syntrio'>
      <Header />
      <img className='syntrio-img' src='/Assets/oslo_phone_1.avif' alt='syncfit-img' />
      <div className='syntrio-video-container'>
        <video
          className='syntrio-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={true}
          muted
        >
          <source src='/Assets/syntiro_oslo.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='syntrio-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='syntrio-video-container'>
        <video
          className='syntrio-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={true}
        >
          <source src='/Assets/syntiro_oslo_vidoe_2.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='syntrio-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='syntrio-video-container'>
        <video
          className='syntrio-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={true}
        >
          <source src='/Assets/syntiro_oslo_vidoe_3.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='syntrio-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <div className='syntrio-video-container'>
        <video
          className='syntrio-video'
          loop
          width="100%"
          height="100%"
          controls
          autoPlay={true}
        >
          <source src='/Assets/syntiro_oslo_vidoe_4.mp4' type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className='syntrio-para'>
        This is my first large scale project.
        Syntiro is an integrated system that monitors our day-to-day Electricity & water usage and help optimize it. With live stats, remote control over appliances and Solar roof add-on, this is the one for all solution to all your problems.
      </div>
      <Footer />
    </div>
  );
}

export default Contact;