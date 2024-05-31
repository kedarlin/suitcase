import React, { useEffect, useState } from 'react'
import Header from '../../Components/Header/Header'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'

const Home = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [isDarkMode]);
    return (
        <div className='home'>
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <Body />
            <Footer />
        </div>
    )
}

export default Home