import React from 'react'
import Navbar from './navbar'
import BannerBackgroundImage from '../asset/home-banner-background.png'
import HomeBannerImage from '../asset/home-banner-image.png'
import {FiArrowRight}  from 'react-icons/fi'
import About from './about'

export default function Home() {
  return (
    <>
      <div className='home-container'>
          <div className='home-banner-container'>
            <div className='home-bannerImage-container'>
              <img src={BannerBackgroundImage} alt="" />
            </div>
            <div className='home-text-section'>
              <h1 className='primary-heading'>
                Your Favorite Food Delivered Hot & Fresh
              </h1>
              <p className="primary-text">
                Healthy Switcher chefs do all the prep work,like peeding, chopping & marinating, so you can cook a fresh food
              </p>
              <button className='secondary-button'>
                Order Now <FiArrowRight />
              </button>
            </div>
            <div className="home-image-section">
              <img src={HomeBannerImage} alt="" />
            </div>
          </div>
      </div>
    <About />
    </>
  )
}
