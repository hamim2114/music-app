import React from "react";
import DownloadAds from "./DownloadAds";
import backgraphic from '../img/backgraphics.png'
import p1 from '../img/p 1.png'
import p2 from '../img/p 2.png'
import p3 from '../img/p 3.png'
import p4 from '../img/p 4.png'

function Hero() {
  return (
    <div
      id="home"
      className="bg-[#081730] md:flex items-center justify-between md:px-[5rem] px-[2rem] rounded-b-[5rem] w-[100%] md:h-[35rem] h-[68rem] relative z-[3]"
    >
      {/* mobile screen */}
      <div className="md:hidden ml-6 ">
        <div>
          <img
            className="absolute mt-[15rem]"
            src={backgraphic}
            alt=""
          />
          <img
            data-aos="slide-left"
            className="absolute h-[34rem] mt-[5rem]  "
            src={p1}
            alt=""
          />
          <img
            data-aos="slide-left"
            data-aos-delay="200"
            className="absolute left-[82px] top-[413px] w-[175px] "
            src={p2}
            alt=""
          />
          <img
            className="absolute w-[5rem] left-[59px] top-[500px] "
            src={p3}
            alt=""
          />
        </div>
      </div>

      <div className="flex md:hidden flex-col items-start justify-center h-[100%]  text-[2rem]">
        <div data-aos="slide-right" className="mt-[36rem]">
          <span>Experience The</span>{" "}
          <span>
            <b>Best Quality Music</b>
          </span>
          <br />
          <span className="text-[18px] text-[#525D6E]">
            Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
            Suspendisse in leo non risus tincidunt lobortis.
          </span>
          <div data-aos="slide-right"
          data-aos-delay="200">
            <span className="text-[13px] ">
              Download now on IOS and Android
            </span>
            <DownloadAds />
          </div>
        </div>
      </div>

      {/* dextop screen */}
      <div data-aos="slide-right" className="md:flex hidden flex-col items-start justify-center h-[100%] md:text-[3rem] text-[2rem]">
        <span>Experience The</span>{" "}
        <span>
          <b>Best Quality Music</b>
        </span>
        <span className="text-[15px] text-[#525D6E]">
          Donec laoreet nec velit vitae aliquam. Ut quis tincidunt purus.
          <br />
          Suspendisse in leo non risus tincidunt lobortis.
        </span>
        <div data-aos="slide-right"
          data-aos-delay="200">
          <span className="text-[13px]">Download now on IOS and Android</span>
          <DownloadAds />
        </div>
      </div>

      <div className="relative w-[50%] hidden md:flex ">
        <img
          className="absolute top-[-8rem] left-[19rem]"
          src={backgraphic}
          alt=""
        />
        <img
          data-aos="slide-left"
          className="absolute top-[-15rem] h-[34rem] left-[13rem] "
          src={p1}
          alt=""
        />
        <img
          data-aos="slide-left"
          data-aos-delay="200"
          className="absolute left-[235px] top-[94px] w-[175px] "
          src={p2}
          alt=""
        />
        <img
          className="absolute w-[5rem] left-[13rem] top-[12rem] "
          src={p3}
          alt=""
        />
        <img
          className="absolute w-[5rem] left-[12.5rem] top-[12rem] "
          src={p4}
          alt=""
        />
      </div>
    </div>
  );
}

export default Hero;
