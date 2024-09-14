import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <>
      <section class="text-gray-600 body-font">
        <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img
              class="batman-img"
              alt="batman-img"
              src="/images/petman.png"
            />
          </div>
          <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 class="title-font sm:text-4xl text-3xl font-medium text-gray-900 mb-3">
              Piyush Karn
              <br  />
              
            </h1>
            <h5 className="title-font sm:text-2xl text-3xl font-medium text-gray-900">student | web developer</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
