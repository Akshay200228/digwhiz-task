import React from 'react';
import styles from "../style";
import { about, icn1, icn2, icn3 } from '../assets';

const aboutData = [
  {
    title: "Card 1 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore maxime accusantium consectetur nisi laborum. Iusto fugit molestias sit quia?",
    icon: icn1,
  },
  {
    title: "Card 2 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore maxime accusantium consectetur nisi laborum. Iusto fugit molestias sit quia?",
    icon: icn2,
  },
  {
    title: "Card 3 Title",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolore maxime accusantium consectetur nisi laborum. Iusto fugit molestias sit quia?",
    icon: icn3,
  },
];

const About = () => (
  <section className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    <div className="w-full sm:w-1/2 mb-6 sm:mb-0 pr-6">
      <img src={about} alt="About" className="w-full" />
    </div>
    <div className="w-full sm:w-1/2 flex flex-col justify-between">
      {aboutData.map((card, index) => (
        <div className="flex flex-col mb-6" key={index}>
          <div className="flex items-start mb-2">
            <img src={card.icon} alt={`Card ${index + 1}`} className="w-10 h-10 mr-4 sm:mr-8" />
            <div>
              <h3 className="text-lg font-bold text-[#FFB700]">{card.title}</h3>
              <p className="text-[#6D7396]">{card.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default About;
