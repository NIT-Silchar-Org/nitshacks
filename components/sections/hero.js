import React from 'react'
import Image from 'next/image'
import NITS from '../../public/img/NITS.png'
import Group from '../../public/img/Group-13.png'
import Hack from '../../public/img/Hack.png'
import styles from '../../styles/Hero.module.css'

const style = {
  position:"absolute",
  top:"0",
  border:"2px solid red",
  animation:"nits1 0.3s linear ease-out",
}



const Hero = () => {
  return (
    <div className=" flex flex-col w-[40rem] absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%]">
      <div>
        <Image src={NITS} alt="NITS" className="" />
      <div className={`${styles.animate} `}>
        <Image src={NITS} alt="NITS"  />
      </div>
      </div>
      <div className="m-auto">
        <Image src={Group} alt="Group" />
      </div>
      <div>
        <Image src={Hack} alt="Hack" className="" />
      </div>
    </div>
  )
}

export default Hero
