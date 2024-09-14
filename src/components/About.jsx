import React from "react";
import "./Hero.css";
import "./About.css";
const About = () => {
  return (
    <div className="about">
      <h1
        class="sm:text-4xl text-3xl font-medium text-gray-900 mb-5"
        className="about-header"
      >
        About Me
      </h1>

      <section class="text-gray-600 body-font w-full">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center mb-4">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="object-cover object-center rounded"
              alt="hero"
              src="/images/piyushTv.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" className="about-header text-black">
            Description
            </h1>
            <p class="mb-8 leading-relaxed" className="topic">
            I am Piyush Karn, an undergraduate student currently exploring the world of web development. An intermediate level developer with few working experience.
            </p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" className="about-header text-black">Working environment</h1>
            <p class="mb-8 leading-relaxed" className="topic">
            Windows and MacOS
            </p>
            <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900" className="about-header text-black">Tech Stack</h1>
            <p class="mb-8 leading-relaxed" className="topic">
            HTML, CSS, JavaScript, React, Next.js, Node.js, Git, GitHub, Netlify, Vercel etc.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
