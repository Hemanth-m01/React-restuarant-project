import React from 'react'
import ProfilePic from '../asset/john-doe-image.png'
import { AiFillStar} from 'react-icons/ai'
import Contact from './contact'

function Testimonials() {
  return (
    <>
        <div className='work-section-wrapper'>
            <div className="work-section-top">
                <p className="primary-subheading">Testimonials</p>
                <h1 className="primary-heading">What they are Saying</h1>
                <p className="primary-text">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque sapiente, nostrum corporis amet reprehenderit accusantium, consequatur nobis quo dicta tempora incidunt voluptas minima qui nihil!
                </p>
            </div>
            <div className="testimonial-section-bottom">
                <img src={ProfilePic} alt="" />
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis doloribus accusantium corrupti voluptate qui ab aliquam, est cupiditate dolorum earum saepe iste nemo repudiandae sit hic incidunt sunt at praesentium?
                </p>
                <div className="testimonials-stars-container">
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                    <AiFillStar />
                </div>
                <h2>John Doe</h2>
            </div>
        </div>
    <Contact />    
    </>
  )
}

export default Testimonials