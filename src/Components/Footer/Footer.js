import React from 'react'
import './Footer.css'
import { useNavigate } from 'react-router-dom';
const Footer = () => {

    const navigate = useNavigate();
    return (
        <div className="footer">
            <div className='footer-left'>
                <div className='footer-left-desc'>
                    We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.
                </div>
                <button className='footer-button'>Get for Free</button>
            </div>
            <div className='footer-right'>
                <div className='footer-right-head'>EXPLORE</div>
                <div className='footer-right-links darkmode'>
                    <div className='footer-right-1'>
                        <div className='footer-item-container' onClick={() => navigate('/work')}>
                            <p className='footer-item'>Work</p>
                            <p className='footer-item-h'>Work</p>
                        </div>
                        <div className='footer-item-container'>
                            <p className='footer-item'>Studio</p>
                            <p className='footer-item-h'>Studio</p>
                        </div>
                        <div className='footer-item-container'>
                            <p className='footer-item'>Contact</p>
                            <p className='footer-item-h'>Contact</p>
                        </div>
                    </div>
                    <div className='footer-right-2'>
                        <div className='footer-item-container'>
                            <p className='footer-item'>Twitter</p>
                            <p className='footer-item-h'>Twitter</p>
                        </div>
                        <div className='footer-item-container'>
                            <p className='footer-item'>Dribble</p>
                            <p className='footer-item-h'>Dribble</p>
                        </div>
                        <div className='footer-item-container'>
                            <p className='footer-item'>Instagram</p>
                            <p className='footer-item-h'>Instagram</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer