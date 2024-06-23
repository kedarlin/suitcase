import React from 'react'
import './Contact.css'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

const Contact = () => {
  return (
    <div className='contact'>
        <Header />
        <img className='contact-img' src='/Assets/oslo_syncfit_img.png' alt='syncfit-img' />
        <Footer />
    </div>
  )
}

export default Contact