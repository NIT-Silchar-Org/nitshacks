import React from 'react';
import Image from 'next/image';
import top_left_svg from "../../public/Vector 14.svg";
import bottom_left_svg from "../../public/Vector 15.svg";
import right_svg from "../../public/Vector 11.svg";

const Hamburger_menu = ({showMenu,setShowMenu}) => {
  // document.querySelector(".right_svg").style.bottom=null;
  // document.querySelector(".right_svg").style.minHeight=null;
  return (
    <div
      className={
        showMenu
          ? 'hamburger lg:w-[55vw] w-[100vw] min-h-[100vh] flex items-center justify-center fixed top-0 left-0 z-10 border-2 border-[#FF00BF] transition-all'
          : 'hamburger lg:w-[45vw] w-[100vw] min-h-[100vh] flex items-center justify-center fixed top-0 left-[-100vw] lg:left-[-45vw] z-10 border-2 border-[#FF00BF] transition-all'
      }
      style={{
        background:
          'linear-gradient(to bottom,rgba(70, 190, 212, 0.44),rgba(177, 114, 218, 0.74),rgba(208, 60, 171, 0.55))',
      }}
    >
      <div className="hamburger_menu flex flex-col ">
        <a onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} href="/#about" className="hamburger_links font-light">
          About HACKS
        </a>
        <a onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} href="/#aboutTecno" className="hamburger_links font-light">
          About TECNO
        </a>
        <a onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} href="/#events" className="hamburger_links font-light">
          Events
        </a>
        <a onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} href="/#sponsors" className="hamburger_links font-light">
          Sponsorship
        </a>
        <a onClick={() => setShowMenu((prevShowMenu) => !prevShowMenu)} href="/#contact" className="hamburger_links font-light">
          Contact
        </a>
      </div>
      {/* <img src={rec} alt="rec" className="absolute top-0 left-0 z-[-1]"/> */}
      <div className="image_wrapper absolute -top-5 -left-10 lg:top-0 lg:-left-2">
        <Image
          src={top_left_svg}
          alt="top_left"
          className="min-h-[unset] h-[20vh] lg:h-[25vh]"
        />
      </div>
      <div className="image_wrapper absolute -bottom-5 -left-10 lg:bottom-0 lg:-left-2">
        <Image
          src={bottom_left_svg}
          alt="bottom_left"
          className="min-h-[unset] h-[20vh] lg:h-[25vh]"
        />
      </div>
      <div className="image_wrapper absolute top-0 right-1">
        <Image
          src={right_svg}
          alt="right"
          className="right_svg min-h-[unset] bottom-[unset] h-[100vh]"
        />
      </div>
    </div>
  )
}

export default Hamburger_menu;