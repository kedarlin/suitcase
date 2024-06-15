import React, { useContext } from 'react'
import './Animation_2.css'
import { LuSparkle } from 'react-icons/lu'
import Phone from '../Phone/Phone'
import { ThemeContext } from '../../Themes/ThemeContext';

const AnimationTwo = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className='anime-2' style={{ backgroundColor: theme === 'light' ? "#f2f2f2" : "" }}>
            <div className="animation-head-2 scrolleffect" style={{ color: theme === 'light' ? "black" : "white" }}>
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
    )
}

export default AnimationTwo