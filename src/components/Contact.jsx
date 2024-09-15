import React from 'react'
import "./contact.css"

const Contact = () => {
  return (
    <div id='contact'>
      <div className="background-img">
      </div>
        <div>
          <p className='contactheader left-5'>Wanna come to my apartment?</p>
        </div>
        <div className='socials-right'>
          <a href="https://www.linkedin.com/in/piyushkarn-314a5b2a2/">
            <img src="/images/linkedin.png" alt="" className='social-icons' />
          </a>
          <a href="https://github.com/piiyuushh">
            <img src="/images/github.png" alt="" className='social-icons' />
          </a>
          <a href="mailto:piyushkarn76@gmail.com">
            <img src="/images/email.png" alt="" className='social-icons' />
          </a>
        </div>
    </div>
  )
}

export default Contact;