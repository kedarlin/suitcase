import React, { useContext, useEffect, useState } from 'react';
import { FaBatteryHalf, FaSearch, FaSignal, FaWifi } from 'react-icons/fa';
import './Phone.css';
import { ThemeContext } from '../../Themes/ThemeContext';

const Phone = () => {
    const [time, setTime] = useState('');
    const [activeTab, setActiveTab] = useState('Comets');
    const { theme } = useContext(ThemeContext);

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

    const tabContent = {
        Comets: [
            { imgSrc: '/Assets/slide-img-1.jpg', desc: 'Comet A' },
            { imgSrc: '/Assets/slide-img-2.jpg', desc: 'Comet B' },
        ],
        Stars: [
            { imgSrc: '/Assets/slide-img-3.jpg', desc: 'Star A' },
            { imgSrc: '/Assets/slide-img-4.jpg', desc: 'Star B' },
        ],
        Planets: [
            { imgSrc: '/Assets/slide-img-5.jpg', desc: 'Planet A' },
            { imgSrc: '/Assets/slide-img-1.jpg', desc: 'Planet B' },
        ],
        Galaxies: [
            { imgSrc: '/Assets/slide-img-2.jpg', desc: 'Galaxy A' },
            { imgSrc: '/Assets/slide-img-3.jpg', desc: 'Galaxy B' },
        ],
    };

    const handleTabClick = (tab, event) => {
        event.stopPropagation();
        setActiveTab(tab);
    };

    return (
        <div className="phone" style={{ backgroundColor: theme === 'light' ? "#d3d3d3" : "", color: theme === 'light' ? "black" : "white" }}>
            <div className='phone-noti-bar'>
                <div className='phone-noti-time'>{time}</div>
                <span className='phone-noti-notch'></span>
                <div className='phone-noti-icons'>
                    <FaSignal />
                    <FaWifi />
                    <FaBatteryHalf />
                </div>
            </div>
            <div className='phone-input' style={{ backgroundColor: theme === 'light' ? "#a0a0a0" : "", color: theme === 'light' ? "black" : "white" }}>
                <FaSearch />
                <span>The Cosmos</span>
            </div>
            <div className='phone-tab'>
                {Object.keys(tabContent).map(tab => (
                    <div 
                        key={tab}
                        className={`phone-tab-item ${activeTab === tab ? 'is-active' : ''}`}
                        style={{ borderBottomColor: activeTab === tab ? (theme === 'light' ? 'black' : 'white') : 'transparent' }}
                        onClick={(event) => handleTabClick(tab, event)}
                    >
                        {tab}
                    </div>
                ))}
            </div>
            <div className='phone-tab-img'>
                {tabContent[activeTab].map((content, index) => (
                    <div key={index}>
                        <img src={content.imgSrc} alt='' className='tabimg' />
                        <div className='phone-img-desc'>
                            {content.desc}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Phone;