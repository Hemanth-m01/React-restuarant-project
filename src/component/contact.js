import React from 'react'
import Footer from './footer'

function Contact() {
  return (
    <>
      <div className='contact-page-wrapper'>
          <h1 className='primary-heading'>Have Question In Mind?</h1>
          <h1 className='primary-heading'>Let us Help you</h1>
          <div className="contact-form-container">
              <input type="text" placeholder='yourmail@gmail.com' />
              <button className='secondary-button'>Submit</button>
          </div>
      </div>
    <Footer />
    </>
  )
}

export default Contact