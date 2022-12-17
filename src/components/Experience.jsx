import React from "react";
import Feature from "./Feature";
import path318 from '../img/Path 318.png'

function Experience() {
  return (
    <section id="about" className="flex flex-col items-center justify-start md:px-[5rem] px-[2rem] bg-[#020917] md:h-[60rem] h-[90rem] md:pt-[18rem] pt-[14rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      <img data-aos='zoom-in' className="w-[5rem]" src={path318} alt="" />

      <div data-aos="fade-up" className="mt-7 flex flex-col md:items-center text-[2rem]">
        <span>An Amazing App Can Change Your Daily Life</span>
        <span>
          <b>Music Experience</b>
        </span>
      </div>

      <div className="md:flex items-center justify-around mt-[6rem] w-[100%]">
        <Feature icon='Group 2' title='For Live Music' />
        <Feature icon='music icon' title='For Daily Music' />
        <Feature icon='Group 4' title='For Artists' />
      </div>

    </section>
  );
}

export default Experience;
