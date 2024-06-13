import React, { useEffect, useState } from 'react'
import { FaBatteryHalf, FaSearch, FaSignal, FaWifi } from 'react-icons/fa'
import './Phone.css'

const Phone = () => {
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
    return (
        <div className="phone">
            <div className='phone-noti-bar'>
                <div className='phone-noti-time'>{time}</div>
                <span className='phone-noti-notch'></span>
                <div className='phone-noti-icons'>
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
                <div className="phone-tab-item is-active">Comets</div>
                <div className="phone-tab-item">Stars</div>
                <div className="phone-tab-item">Planets</div>
                <div className="phone-tab-item">Galaxies</div>
            </div>
            <div className='phone-tab-img'>
                <img src='/Assets/slide-img-1.jpg' alt='' className='tabimg' />
                <div className='phone-img-desc'>
                    Genius
                </div>
                <img src='/Assets/slide-img-4.jpg' alt='' className='tabimg' />
                <div className='phone-img-desc'>
                    Genius
                </div>
                <img src='/Assets/slide-img-5.jpg' alt='' className='tabimg' />
                <div className='phone-img-desc'>
                    Genius
                </div>
            </div>
        </div>
    )
}

export default Phone