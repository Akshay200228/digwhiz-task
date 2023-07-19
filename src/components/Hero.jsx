import React, { useEffect } from 'react';
import { banner, building, home } from "../assets";
import Swiper from 'swiper';
import 'swiper/css';

const Hero = () => {
  useEffect(() => {
    let slider;

    // Initialize Swiper
    slider = new Swiper('#slider', {
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return `<button class="${className} ${index === 1 ? 'bg-yellow-400' : 'bg-white'}"></button>`;
        },
      },
    });

    // Clean up
    return () => {
      if (slider) {
        slider.destroy();
      }
    };
  }, []);

  return (
    <section id="home" className="h-screen flex md:flex-row flex-col">
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 opacity-50"></div>
        <div id="slider" className="w-screen h-full md:h-screen relative swiper-container">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <img src={banner} alt="Banner" className="object-cover object-center h-[100vh] w-full" />
            </div>
            <div className="swiper-slide">
              <img src={building} alt="Banner" className="object-cover object-center h-[100vh] w-full" />
            </div>
            <div className="swiper-slide">
              <img src={home} alt="Banner" className="object-cover object-center h-[100vh] w-full" />
            </div>
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <div className="boxWidth paddingX absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start sm:top-1/2 sm:left-1/4 sm:w-1/2 md:top-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4 z-10">
          <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white ss:leading-[3rem] leading-[2.5rem] text-left">
            WE DO BIG THINGS <br />
            WITH BIG IDEAS
          </h1>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md mt-8">Button</button>
        </div>
      </div>
      {/* Below image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 sm:p-4 bg-yellow-300 z-10">
        <p className="text-primary text-sm sm:text-base">Consulting And Estimate For Your Project, Contact Us Today</p>
        <button className="bg-white text-primary px-4 py-2 rounded-md">Button</button>
      </div>
    </section>
  );
};

export default Hero;
