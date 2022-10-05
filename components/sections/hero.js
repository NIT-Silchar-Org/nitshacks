import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Group from '../../public/img/Group-13.png'
import styles from '../../styles/Hero.module.css'
const Hero = ({showMenu}) => {
  const [font,setFont] = useState('glitch1');
  const [Top,setTop] = useState('0');
  const [rightNit,setRightNit] = useState('15');
  const [leftHack,setLeftHack] = useState('0');
  const [change,setChange] = useState(false);
  const [disp , setDisp] = useState('block')

// NITS GLITCH STYLES //
const stylesNits = {
  fontFamily:font,
  color:'#fff',
}
const stylesNits2 = {
  fontFamily:font,
  color:'#fff',
  position:'absolute',
  top:`${Top}%`,
  left:`${rightNit}%`,
}
//NITS GLITCH STYLE END //

// HACKS GLITCH STYLE //
const stylsHack = {
  fontFamily:font,
}


const styleHack2 = {
  fontFamily:font,
  position:'absolute',
  bottom:`${Top}%`,
  left:`${leftHack}%`
}
// HACK GLITCH STYLE ENDS //


// USE EFFECT FOR TIMEOUTS //
  useEffect(()=>{
   const timer1 =  setTimeout(() => {
      setTop('3')
      setLeftHack('10')
      setRightNit('22')
      setFont('glitch2')
    }, 200);
   const timer1_1 =  setTimeout(() => {
      setFont('glitch5')
    }, 300);
   const timer2 =  setTimeout(() => {
    setFont('glitch3')
    }, 350);
   const timer3 =  setTimeout(() => {
    setFont('glitch4')
    setRightNit('5')
    setLeftHack('-10')
    }, 370);
   const timer4 =  setTimeout(() => {
    setFont('glitch3')
    }, 420);
    const timer6 =  setTimeout(() => {
      setTop('0');
      setRightNit('15');
      setLeftHack('0')
      setFont('glitch1')
      }, 450);

  const timer = setTimeout(() => {
    setTop('0')
    setFont('glitch1')
    setRightNit('15')
    setLeftHack('0')
    setChange(!change)
  }, Math.floor(Math.random() * (5000 - 1000) + 1000));

    return () => {
      clearTimeout(timer1)
      clearTimeout(timer1_1)
      clearTimeout(timer2)
      clearTimeout(timer3)
      clearTimeout(timer4)
      clearTimeout(timer6)
      clearTimeout(timer)
    }
  },[change])

  return (
    <div className="flex flex-col absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">

      <div className={`m-auto ${styles.text_shadow} ${showMenu?'translate-y-[-20vw] duration-500 opacity-0':'duration-500 block opacity-100'}`}>
        <p style={stylesNits} className={` sm:text-[5.5rem] text-5xl`}>NITS</p>
        <p style={stylesNits2} className={` sm:text-[5.5rem] text-5xl`}>NITS</p>
      </div>

      <div className={`m-auto md:w-70 sm:w-60 w-36 ${showMenu?'lg:translate-x-[25vw] transition-all duration-300':'transition-all'}` }>
        <Image src={Group} alt="Group" />
      </div>
      
      <div className={`text-8xl mt-4 ${styles.text_shadow}  ${showMenu?'translate-y-[20vw] duration-500 opacity-0':'duration-500 block opacity-100'}`}>
        <div style={stylsHack} className={`text-center  sm:text-[5.5rem] text-5xl`}>
          <p>HACKS</p>
          <p>5.0</p>
        </div>
        <div style={styleHack2} className={`text-center  sm:text-[5.5rem] text-5xl`}>
          <p>HACKS</p>
          <p>5.0</p>
        </div>
      </div>
      
    </div>

  )
}

export default Hero
