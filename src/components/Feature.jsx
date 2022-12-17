import React from "react";
import group2 from '../img/Group 2.png'
import musicicon from '../img/music icon.png'
import group4 from '../img/Group 4.png'

const Feature = ({ icon, title }) => {

  console.log()
  return (
    <div data-aos='slide-right' className="flex items-center justify-center flex-col relative text-center md:mx-12 mb-16 ">
      <div className="bg-[#081730] rounded-2xl p-4">
        <img className="w-[3rem]" src={group2} alt="" />
      </div>

      <span className="mt-5">{title}</span>
      <span className="text-[#707070] mt-4">
        Nunc elementum, dolor vitae lacinia pulvinar, augue felis scelerisque
        libero, sit amet laoreet lorem.
      </span>
      <span className="text-[#E600FF] underline cursor-pointer">Learn more</span>
    </div>
  );
};

export default Feature;
