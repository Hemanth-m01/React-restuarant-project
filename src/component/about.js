import React from 'react'
import AboutBackground from '../asset/about-background.png'
import AboutBannerImage from '../asset/about-background-image.png'
import { BsFillPlayBtnFill } from 'react-icons/bs'
import Works from '../component/works'

export default function About() {
  return (
    <>
        <div className='about-section-container'>
            <div className="about-background-image-container">
                <img src={AboutBackground} alt="" /> 
            </div>
            <div className='about-section-image-container'>
                <img src={AboutBannerImage} alt="" />
            </div>
            <div className="about-section-text-container">
                <p className="primary-subheading">About</p>
                <h1 className="primary-heading">
                    Food is an Important part of Balanced Diet
                </h1>
                <p className="primary-text">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit modi totam, officiis eveniet enim iure, nemo eaque nesciunt, earum tenetur labore sint rerum dolorum ratione quidem suscipit adipisci. Dolore, laboriosam.
                </p>
                <p className="primary-text">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint eaque, praesentium omnis minus itaque animi!
                </p>
                <div className="about-buttons-container">
                    <button className='secondary-button'>Learn More</button>
                    <button className='watch-video-button'>
                        <BsFillPlayBtnFill />
                        Watch Video</button>
                </div>
            </div>
        </div>
    <Works />
    </>
  )
}
