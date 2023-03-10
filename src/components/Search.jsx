import React from "react";
import MusicPlayer from "./MusicPlayer";
import backGraphic from '../img/backgraphics.png'
import d1 from '../img/d1.png'
import d2 from '../img/d2.png'
import d3 from '../img/d3.png'
import d4 from '../img/d4.png'
import search from '../img/search.png'
import path318 from '../img/Path 318.png'

function Search() {
  return (
    <div id="preformer" className="relative md:h-[65rem] md:px-[5rem] px-[2rem] bg-[#081730] pt-[18rem] pb-[10rem] md:mt-[-15rem] mt-[-20rem] z-[1] md:flex items-center justify-between rounded-b-[5rem]">
      
      <div className=" flex-1  ">
        <img
          className="absolute top-[22rem] left-[-47rem]"
          src={backGraphic}
          alt=""
        />
        <img
        data-aos='slide-right'
          className="absolute w-[16rem] top-[26rem] "
          src={d1}
          alt=""
        />
        <img
        data-aos='slide-right'
        data-aos-delay='200'
          className="absolute w-[9rem] top-[32.7rem] md:left-[7rem] left-[5rem] "
          src={d2}
          alt=""
        />
        <img
        data-aos='slide-right'
        data-aos-delay='400'
          className="absolute w-[9rem] top-[33rem] md:left-[17rem] left-[15rem] "
          src={d3}
          alt=""
        />
        <img
        data-aos='slide-left'
          className="absolute w-[17rem] top-[50rem] left-[2rem] "
          src={d4}
          alt=""
        />
      </div>

      {/* right side */}
      <div className="flex items-start flex-col justify-start flex-1 h-[100%] md:pt-[9rem] pt-[47rem] z-[6]">
        {/* search */}
        <div className="flex justify-start w-[100%]">
          <input
            type="text"
            placeholder="Enter the keyword or URL"
            className="flex-[1] outline-none bg-[#020917] rounded-xl h-[3rem] p-3 "
          />
          {/* search icon */}
          <div className="flex  items-center rounded-xl ml-4 bg-gradient-to-bl from-[#F3071D] to-[#E600FF] p-4 h-[3rem] ">
            <img
              className="w-[1.5rem]"
              src={search}
              alt=""
            />
          </div>
        </div>
        {/* tild icon */}
        <div className="flex md:justify-start justify-center mt-[5rem] items-center w-[100%]">
          <img
            className="w-[5rem]"
            src={path318}
            alt=""
          />
        </div>
        {/* paragraph */}
        <div className="flex flex-col mt-5 text-4xl">
          <span>Search Music by</span>
          <span>
            <b>Name or Direct URL</b>
          </span>
          <span className="text-sm mt-3 text-[#4D586A]">
            Duis feugiat congue metus, ultrices vulputate <br /> nibh viverra
            eget. Vestibulum ullamcorper <br /> volutpat varius.
          </span>
        </div>
        {/* music player */}
        <div data-aos='zoom-in' className="pt-[5rem]">
          <MusicPlayer />
        </div>
      </div>
    </div>
  );
}

export default Search;
