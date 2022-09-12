import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Group from '../../public/img/Group-13.png'
import styles from '../../styles/Hero.module.css'

const Hero = () => {
  const [font,setFont] = useState('glitch1');
  const [Top,setTop] = useState('1');
  const [rightNit,setRightNit] = useState('44');
  const [leftHack,setLeftHack] = useState('28');
  const [disp1,setDisp1] = useState('');
  const [disp2,setDisp2] = useState('hidden');
  const [change,setChange] = useState(true);

  // useEffect(()=>{
  //  const timer1 =  setTimeout(() => {
  //     setTop('4')
  //     setLeftHack('60')
  //     setRightNit('36')
  //     setFont('glitch3')
  //   }, 200);
  //  const timer1_1 =  setTimeout(() => {
  //     setFont('glitch5')
  //   }, 250);
  //  const timer2 =  setTimeout(() => {
  //   setFont('glitch2')
  //   }, 280);
  //  const timer3 =  setTimeout(() => {
  //   setFont('glitch3')
  //   setRightNit('44')
  //   setLeftHack('28')
  //   setDisp1('hidden')
  //   setDisp2('')
  //   }, 350);
  //  const timer4 =  setTimeout(() => {
  //   setFont('glitch3')
  //   }, 400);
  //  const timer4_1 =  setTimeout(() => {
  //   setFont('glitch5')
  //   }, 420);
  //  const timer5 =  setTimeout(() => {
  //    setDisp2('hidden')
  //   }, 450);
  //   const timer6 =  setTimeout(() => {
  //     setFont('glitch1')
  //     }, 450);

  // const timer = setTimeout(() => {
  //   setTop('1')
  //   setDisp1('')
  //   setDisp2('hidden')
  //   setFont('glitch1')
  //   setRightNit('44')
  //   setLeftHack('28')
  //   setChange(!change)
  // }, 1000);
    
  //   return () => {
  //     clearTimeout(timer1)
  //     clearTimeout(timer1_1)
  //     clearTimeout(timer2)
  //     clearTimeout(timer3)
  //     clearTimeout(timer4)
  //     clearTimeout(timer4_1)
  //     clearTimeout(timer5)
  //     clearTimeout(timer6)
  //     clearTimeout(timer)
  //   }
  // },[change])

  
  return (
    <div className=" flex flex-col w-[40rem] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">

      <div className={`m-auto mb-5 ${styles.text_shadow}`}>
        <p className={`font-${font} md:text-7xl sm:text-5xl text-4xl `}>NITS</p>
        {/* <p className={`font-${font} ${disp1} absolute top-${Top} right-${rightNit} md:text-7xl sm:text-5xl text-4xl`}>NITS</p> */}
        {/* <p className={`font-glitch4 ${disp2}  absolute left-28 top-4 md:text-7xl sm:text-5xl text-4xl`}>NITS</p> */}
      </div>

      <div className="m-auto md:w-80 sm:w-60 w-44">
        <Image src={Group} alt="Group" />
      </div>
      
      <div className={`text-8xl ${styles.text_shadow}`}>
        <div className={`text-center font-${font} md:text-7xl sm:text-5xl text-4xl`}>
          <p>HACKS</p>
          <p>3.0</p>
        </div>
        {/* <div className={`text-center font-${font} ${disp1} absolute bottom-${Top} left-${leftHack} md:text-7xl sm:text-5xl text-4xl`}>
          <p>HACKS</p>
          <p>3.0</p>
        </div> */}
        {/* <div className={`text-center font-glitch4 ${disp2} absolute left-8 -bottom-6 md:text-7xl sm:text-5xl text-4xl`}>
          <p>HACKS</p>
          <p>3.0</p>
        </div> */}
      </div>
      
    </div>
  )
}

export default Hero
