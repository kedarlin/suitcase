import React from 'react'
import './Studio.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Studio = () => {
  return (
    <div className='studio'>
        <Header />
        <img className='studio-img' src='/Assets/oslo_syncfit_img.png' alt='syncfit-img' />
        <Footer />
    </div>
  )
}

export default Studio