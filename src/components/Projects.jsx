import React from 'react'
import "./projects.css"
const Projects = () => {
  return (
    <div id="project">
      <div className="featured-container">
      <h1 className="featured-title">Featured Projects</h1>
      <div className="featured-projects">
        <img src="/images/stewie gun.png" alt="Stewie" className="stewie stewie-top" />
        <img src="/images/stewie gun.png" alt="Stewie" className="stewie stewie-bottom" />
        <div className="projects-grid">
          <div className="project-box dark-red">
            <h5 className="title">Album</h5>
            <h5 className='techStacks'>Tech Stacks Used:</h5>
            <p className='description'>React, Tailwind Css</p>
            <a href="https://piyushalbum.netlify.app/" target='_blank'><button className='projectButton'>click here</button></a>
          </div>
          <div className="project-box dark-grey">
          <h5 className="title">Gardening Website</h5>
            <h5 className='techStacks'>Tech Stacks Used:</h5>
            <p className='description'>HTML, CSS, Bootstrap, JS</p>
            <a href="https://gardeningwebsite.netlify.app/" target='_blank'><button className='projectButton'>click here</button></a>
          </div>
          <div className="project-box light-brown">
          <h5 className="title">Portfolio</h5>
            <h5 className='techStacks'>Tech Stacks Used:</h5>
            <p className='description'>HTML, CSS, Bootstrap, JS</p>
            <a href="https://piyushnp.netlify.app/" target='_blank'><button className='projectButton'>click here</button></a>
          </div>
          <div className="project-box dark-brown">
          <h5 className="title">sketch.io</h5>
            <h5 className='techStacks'>Tech Stacks Used:</h5>
            <p className='description'>react</p>
            <a href="https://sketchio.netlify.app/" target='_blank'><button className='projectButton'>click here</button></a>
          </div>
        </div>
        <div className="brian brian-left">
          <img src="/images/brian.png" alt="Brian" />
        </div>
        <div className="brian brian-right">
          <img src="/images/brian.png" alt="Brian" />
        </div>
      </div>
    </div>
    </div>
  )
}

export default Projects
