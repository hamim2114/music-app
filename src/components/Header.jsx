import React, { useEffect, useRef, useState } from "react";
import CenterMenu from "./CenterMenu";
import menu from "../img/menu.svg";
import close from "../img/close.svg";
import musicLogo from "../img/MuzicLogo.png";

function Header() {
  const [toggle, setToggle] = useState(false);
  
  // for close menu outside click
  const btnref = useRef();
  useEffect(() => {
    const closeDropDown = (e) => {
      if (e.path[0] !== btnref.current) {
        setToggle(false);
      }
    };
    document.body.addEventListener('click', closeDropDown);
    return () => document.body.removeEventListener('click', closeDropDown)
  }, []);

  const btnStyle =
    "border-[2px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div
      id="home"
      className="bg-[#081730] flex md:px-[5rem] px-[2rem] pt-[2.4rem] text-[0.8rem]"
    >
      <img className="w-[42px] h-[42px]" src={musicLogo} alt="" />
      <div className="hidden w-[100%] md:block md:flex justify-between">
        <div className="ml-[15rem]">
          <CenterMenu />
        </div>
        <div className=" ">
          <button className={`mr-[35px] hover:bg-[#232A4E] ` + btnStyle}>
            Login
          </button>
          <button className={` bg-[#232A4E] ` + btnStyle}>Sign Up</button>
        </div>
      </div>
      {/* mobile menu */}
      <div
        data-aos="slide-right"
        className="md:hidden flex flex-1 justify-end z-[10] "
      >
        <img
          className="w-[28px] h-[28px] "
          ref={btnref}
          onClick={() => setToggle(!toggle)}
          src={toggle ? close : menu}
          alt=""
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-[5rem] right-[-2rem] bg-gray-600 w-[160px] p-6 rounded-md text-[1.5rem] animate__animated animate__slideInRight `}
        >
          <CenterMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
