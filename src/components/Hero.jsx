import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <div id="hero">
      <section>
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div>
            <img
              class="batman-img"
              alt="batman-img"
              src="/images/petman.png"
            />
          </div>
          <div>
            <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-3" className="about-header text-8xl">
              Piyush Karn
              <br  />
            </h1>
            <h5 class="title-font sm:text-2xl text-3xl font-medium text-gray-900" className="about-header text-4xl text-black">student | web developer</h5>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
