import React from 'react'
import './Hero.css'
const Herosecond = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
  <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      
      <div class="flex lg:flex-row md:flex-col">
        <a href="https://www.linkedin.com/in/piyushkarn-314a5b2a2/"><img src="/images/linkedin.png" alt="" className='social-icons' /></a>
        <a href="https://github.com/piiyuushh"><img src="/images/github.png" alt="" className='social-icons' /></a>
        <a href="mailto:piyushkarn76@gmail.com"><img src="/images/email.png" alt="" className='social-icons' /></a>
      </div>
    </div>
    <div>
      <img alt="hero" src="/images/swagPeter.png" className='pointing-img'/>
    </div>
  </div>
</section>
    </>
  )
}

export default Herosecond
