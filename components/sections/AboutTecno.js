import React from 'react'

const AboutTechno = ({showMenu}) => {
  return (
    <div className="w-screen min-h-screen md:p-12 bg-transparent flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin">
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex flex-col duration-500 items-center justify-center pb-5 md:p-8`}
      >
        <div className="font-babaPro py-2 border-b">ABOUT IIC</div>
      </div>

      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } max-w-4xl rounded-3xl text-base md:text-[1.6rem] uppercase p-8 font-medium md:my-4 text-center leading-9`}
      >
        Ministry of Education, Govt. of India has established 'MoE's Innovation Cell' to systematically foster the culture of Innovation amongst all Higher Education Institutions. MIC has envisioned encouraging creation of 'Institution's Innovation Council (IICs)' across selected HEIs. National Institute of Technology Silchar has initiated the efforts for implementing the National innovation and start-up policy (NISP) under the aegis of the Ministry of Education's Innovation Cell (MIC). IIC fosters and encourages growth of institute's students' up and coming start-ups and promotes technological growth through competitions.
      </div>
    </div>
  )
}

export default AboutTechno
