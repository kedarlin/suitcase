import React from 'react'
import './Footer.css'
// import { useNavigate } from 'react-router-dom';
const Footer = () => {

    // const navigate = useNavigate();
    return (
        <div className='section-6' id='contacts'>
            <div className='section-6-inner'>
                <dotlottie-player
                    src="https://lottie.host/2186eb0c-7733-4173-a3c7-0dec479d04a9/53VG0cwJ3S.lottie"
                    autoplay
                    loop
                    style={{ height: '10%' }}
                />
                <div className='section-6-inner-text'>Thanks for scrolling 23,000 pixels, Now it's your turn to say hello!</div>
                <div className='section-6-inner-buttons'>
                    <a className='section-6-inner-button' href='mailto:nave2krishna@gmail.com'>nave2krishna@gmail.com</a>
                    <a className='section-6-inner-button' href='https://wa.me/9444024304' target='_blank'>+91 9444024304</a>
                </div>
            </div>
            <div className='section-6-footer'>
                <div className='section-6-footer-left'>
                    <img className='section-6-footer-image' src='/assets/profile.png' alt='profile' />
                    <div className='section-6-footer-left-inner'>
                        <div className='section-6-footer-left-text-1'>Sincerely</div>
                        <div className='section-6-footer-left-text-2'>Naveen Krishna</div>
                    </div>
                </div>
                <div className='section-6-footer-right'>
                    <a><img src="/assets/insta.png" alt="insta" /></a>
                    <a><img src="/assets/dribble.png" alt="dribble" /></a>
                    <a><img src="/assets/linkedin.png" alt="linkedin" /></a>
                </div>
            </div>
        </div>
        // <div className="footer">
        //     <div className='footer-left scrolleffect'>
        //         <div className='footer-left-desc'>
        //             We specialize in crafting exceptional digital experiences to help our clients achieve their business goals.
        //         </div>
        //         <button className='footer-button'>Get for Free</button>
        //     </div>
        //     <div className='footer-right scrolleffect'>
        //         <div className='footer-right-head'>EXPLORE</div>
        //         <div className='footer-right-links darkmode'>
        //             <div className='footer-right-1'>
        //                 <div className='footer-item-container' onClick={() => navigate('/work')}>
        //                     <p className='footer-item'>Work</p>
        //                     <p className='footer-item-h'>Work</p>
        //                 </div>
        //                 <div className='footer-item-container'>
        //                     <p className='footer-item'>Studio</p>
        //                     <p className='footer-item-h'>Studio</p>
        //                 </div>
        //                 <div className='footer-item-container'>
        //                     <p className='footer-item'>Contact</p>
        //                     <p className='footer-item-h'>Contact</p>
        //                 </div>
        //             </div>
        //             <div className='footer-right-2'>
        //                 <div className='footer-item-container'>
        //                     <p className='footer-item'>Twitter</p>
        //                     <p className='footer-item-h'>Twitter</p>
        //                 </div>
        //                 <div className='footer-item-container'>
        //                     <p className='footer-item'>Dribble</p>
        //                     <p className='footer-item-h'>Dribble</p>
        //                 </div>
        //                 <div className='footer-item-container'>
        //                     <p className='footer-item'>Instagram</p>
        //                     <p className='footer-item-h'>Instagram</p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}

export default Footer