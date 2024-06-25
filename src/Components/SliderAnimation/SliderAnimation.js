import React, { useContext } from 'react'
import './SliderAnimation.css'
import { ThemeContext } from '../../Themes/ThemeContext';

const SliderAnimation = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={`work-sliders ${theme === 'dark' ? 'dark-slide' : ''}`}>
            <div className='slider'>
                <div className='slide-track'>
                    <div className='slide'>
                        <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-1.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-2.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-3.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-4.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                    <div className='slide'>
                        <img src='/Assets/slide-img-5.jpg' alt='slide-img' className='ori-img' />
                        <div className='slide-hover'>
                            {/* <img src='/Assets/hover-img.jpg' alt='slide-img' className='hov-img' /> */}
                            <div className='slide-cont'>
                                <h3 className='slide-title'>Project</h3>
                                {/* <h5 className='slide-desc'>This was done by the Portfolio's name called oslo company</h5> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SliderAnimation