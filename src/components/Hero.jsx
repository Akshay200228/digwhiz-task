import React, { useEffect } from 'react';
import { banner, building, home } from "../assets";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import $ from 'jquery';
import 'slick-carousel';

const Hero = () => {
  useEffect(() => {
    let slider;

    $(document).ready(function () {
      slider = $('#slider');

      slider.slick({
        dots: true,
        appendDots: $('.slick-dots-container'),
        dotsClass: 'slick-dots',
        customPaging: function (slider, i) {
          return (
            `<button class="dot ${i === 1 ? 'bg-yellow-400' : 'bg-white'}"></button>`
          );
        },
      });
    });

    // Clean up
    return () => {
      if (slider) {
        slider.slick('unslick');
      }
      document.body.style.overflowX = 'auto';
    };
  }, []);

  return (
    <section id="home" className="h-screen flex md:flex-row flex-col">
      <div className="w-full h-screen relative">
        <div className="absolute inset-0 opacity-50"></div>
        <div id="slider" className="w-screen h-full md:h-screen relative">
          <img src={banner} alt="Banner" className="object-cover h-full w-full" />
          <img src={building} alt="Banner" className="object-cover h-full w-full" />
          <img src={home} alt="Banner" className="object-cover h-full w-full" />
        </div>
        <div className="boxWidth paddingX absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-start sm:top-1/2 sm:left-1/4 sm:w-1/2 md:top-1/2 md:w-2/5 lg:w-1/3 xl:w-1/4">
          <h1 className="font-poppins font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-white ss:leading-[3rem] leading-[2.5rem] text-left">
            WE DO BIG THINGS <br />
            WITH BIG IDEAS
          </h1>
          <button className="bg-yellow-600 text-white px-4 py-2 rounded-md mt-8">Button</button>
        </div>
      </div>
      {/* Slider dots */}
      <div className="absolute inset-x-0 bottom-4 mb-20 flex justify-center">
        <div className="slick-dots-container flex justify-center">
          <button className="dot bg-yellow-400"></button>
          <button className="dot bg-white"></button>
          <button className="dot bg-white"></button>
        </div>
      </div>
      {/* Below image */}
      <div className="absolute inset-x-0 bottom-0 flex justify-between p-2 sm:p-4 bg-yellow-300">
        <p className="text-primary text-sm sm:text-base">Consulting And Estimate For Your Project, Contact Us Today</p>
        <button className="bg-white text-primary px-4 py-2 rounded-md">Button</button>
      </div>
    </section>
  );
};

export default Hero;
