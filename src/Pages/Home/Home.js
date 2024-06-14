import React, { useContext, useEffect } from 'react'
import Header from '../../Components/Header/Header'
import Body from '../../Components/Body/Body'
import Footer from '../../Components/Footer/Footer'
import { ThemeContext } from '../../Themes/ThemeContext'

const Home = () => {
    const { theme} = useContext(ThemeContext);
    useEffect(() => {
        if (theme==='dark') {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }, [theme]);
    return (
        <div className='home'>
            <Header />
            <Body />
            <Footer />
        </div>
    )
}

export default Home