import React from 'react'
import styles from '../../styles/Home.module.css'
import download from '../../public/download.svg'
import Image from 'next/image'

const About = () => {
  return (
    <div
      className="w-screen h-screen md:p-12 bg-indigo-900 flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin"
      id="about"
    >
      <div className="flex flex-col items-center justify-center pb-5 md:p-8">
        <div className="font-babaPro">ABOUT</div>
        <div className="font-babaPro">NITS HACKS 3.0</div>
      </div>

      <div
        className={`w-4/5 md:w-3/5 rounded-3xl ${styles.box} text-base md:text-[1.4rem] p-8 font-medium md:my-20`}
      >
        Here comes one of the grandest module of Tecnoesis, back again to cater
        the technical hunger of the masses. NITS HACKS 3.0 is all about
        providing the enthusiasts with a taste of the emerging technical aspects
        of real life applications. The idea is to bring together as many
        celebrated minds in the field of tech on the same stage where they can
        compete and build together.
      </div>

      <div className="w-56 h-20 relative cursor-pointer my-8">
        <Image src={download} layout="fill" objectFit="cover" priority="true" />
      </div>
    </div>
  )
}

export default About
