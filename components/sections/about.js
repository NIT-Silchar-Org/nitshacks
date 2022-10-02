import React, { useEffect } from 'react'
import styles from '../../styles/Home.module.css'
import download from '../../public/btn.svg'
import Image from 'next/image'

const About = ({ showMenu }) => {
  useEffect(() => {
    console.log(showMenu)
  }, [showMenu])
  return (
    <div className="w-screen h-screen md:p-12 bg-transparent flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin">
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex flex-col duration-500 items-center justify-center pb-5 md:p-8`}
      >
        <div className="font-babaPro py-2 border-b">ABOUT</div>
        <div className="font-babaPro py-2 border-b">NITS HACKS 5.0</div>
      </div>

      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } max-w-3xl rounded-3xl duration-500 text-base sm:text-[1.6rem] uppercase p-8 font-medium sm:my-4 text-center leading-9`}
      >
        Here comes one of the grandest module of Tecnoesis, back again to cater
        the technical hunger of the masses. NITS HACKS 5.0 is all about
        providing the enthusiasts with a taste of the emerging technical aspects
        of real life applications. The idea is to bring together as many
        celebrated minds in the field of tech on the same stage where they can
        compete and build together.
      </div>

      <div
        className={`${
          showMenu
            ? 'opacity-0 duration-200'
            : 'duration-500 h-[4rem] relative cursor-pointer my-4'
        }`}
        onClick={() => {
          window.open(
            'https://drive.google.com/file/d/1wSkWPiRuhry8HZ0rpCRyCgFac43JKjzh/view?usp=drivesdk',
          )
        }}
      >
        <Image
          src={download}
          priority="true"
          className="absolute top-0 left-0"
        />
        <div className="absolute top-[1.5rem] left-[6rem] z-2 font-babaPro text-sm -translate-x-1/2 -translate-y-1/2">
          DOWNLOAD
        </div>
      </div>
    </div>
  )
}

export default About
