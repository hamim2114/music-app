import React from "react";
import DownloadAds from "./DownloadAds";
import path318 from '../img/Path 318.png'

function Download() {
  return (
    <div id="event" className=" bg-[#020917] flex flex-col items-center justify-start md:px-[5rem] px-[2rem] h-[48rem] pt-[18rem] md:mt-[-10rem] mt-[-15rem] ">
      <img data-aos='zoom-out' className="w-[5rem]" src={path318} alt="" />
      <div data-aos='slide-up' className="mt-7 flex flex-col items-center text-[2rem]">
        <span>Download The Best Music</span>
        <b>App Now</b>
        <span className="text-[1rem] text-gray-400 md:px-[15rem] text-center mt-[1rem] ">
          Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
          Vestibulum ullamcorper volutpat varius.
        </span>
      </div>
      <div data-aos='slide-up' data-aos-delay='200' className="mt-14">
        <DownloadAds/>
      </div>
    </div>
  );
}

export default Download;
