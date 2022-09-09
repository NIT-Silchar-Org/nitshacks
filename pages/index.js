import default_logo from "../public/Default.png";
import { useState,useEffect } from "react";
import Ham_icon from "../components/elements/ham_icon";
import Social_media_icons from "../components/elements/social_media_icons";
import Hamburger_menu from "../components/elements/hamburger_menu";
import Image from 'next/image';
// importing secureConnectionStart
import About from "../components/sections/about";

// var logo_counter=false;
function Hs() {
  const [showMenu, setShowMenu] = useState(false);

  
  return (
    <div className="hs">
      <div className="hero_bg min-h-[100vh] w-[100vw] flex bg-slate-500 bg-[url('../public/tokyo.png')]">
        <Hamburger_menu showMenu={showMenu}/>
        
        <div className="hero_logo flex items-center justify-center w-[100vw] min-h-[100vh]">
          {/* <img src={default_logo} alt="logo" className={showMenu?"lg:translate-x-[20vw] transition-all":"transition-all"} id="logo" loading="lazy"/> */}
          <div className={showMenu?"lg:translate-x-[20vw] transition-all lg:scale-75 scale-90 ":"transition-all"}>
            <Image
              src={default_logo}
              alt="logo"
              id="logo"
            />

          </div>
        </div>

        <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* social media icons */}
        <Social_media_icons/>
      </div>
      <About/>
    </div>
  );
}

export default Hs;
