import { useEffect } from "react";
const Ham_icon = ({setShowMenu,showMenu}) => {
  useEffect(()=>{
    if(showMenu){
      document.getElementById("top").style.transform="rotateZ(38deg) translateX(-4px)";
      document.getElementById("mid").style.transform="translateX(45px)";
      document.getElementById("bottom").style.transform="rotateZ(-38deg) translateX(-4px)";
    }else{
      document.getElementById("top").style.transform="rotateZ(0)";
      document.getElementById("mid").style.transform="translateX(0)";
      document.getElementById("bottom").style.transform="rotateZ(0)";
    }
  },[showMenu]);
  
  return (
    <svg width="42" height="32" viewBox="0 0 42 32" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>setShowMenu(!showMenu)}  className="fixed top-4 left-3 z-20 overflow-hidden hover:cursor-pointer">
        <path id="top" className="transition-all origin-left" d="M3 3H39.2019" stroke="url(#paint0_linear_1701_1626)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="mid" className="transition-all origin-left" d="M3 15.9778H39.2019" stroke="url(#paint1_linear_1701_1626)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <path id="bottom" className="transition-all origin-left" d="M3 28.9556H39.2019" stroke="url(#paint2_linear_1701_1626)" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round"/>
        <defs>
        <linearGradient id="paint0_linear_1701_1626" x1="3" y1="3" x2="37.1907" y2="3" gradientUnits="userSpaceOnUse">
        <stop stopColor="#70E0F9"/>
        <stop offset="1" stopColor="#F757CF"/>
        </linearGradient>
        <linearGradient id="paint1_linear_1701_1626" x1="3" y1="15.9778" x2="37.1907" y2="15.9778" gradientUnits="userSpaceOnUse">
        <stop stopColor="#70E0F9"/>
        <stop offset="1" stopColor="#F757CF"/>
        </linearGradient>
        <linearGradient id="paint2_linear_1701_1626" x1="3" y1="28.9556" x2="37.1907" y2="28.9556" gradientUnits="userSpaceOnUse">
        <stop stopColor="#70E0F9"/>
        <stop offset="1" stopColor="#F757CF"/>
        </linearGradient>
        </defs>
    </svg>
  )
}

export default Ham_icon;

