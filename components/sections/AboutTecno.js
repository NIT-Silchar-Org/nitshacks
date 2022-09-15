import React from 'react'

const AboutTechno = () => {
  return (
    <div
      className="w-screen h-screen md:p-12 bg-indigo-900 flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin"
      id="about"
    >
      <div className="flex flex-col items-center justify-center pb-5 md:p-8">
        <div className="font-babaPro py-2 border-b">ABOUT TECNO</div>
      </div>

      <div
        className={`w-4/5 md:w-3/5 rounded-3xl text-base md:text-[1.6rem] uppercase p-8 font-medium md:my-4 text-center leading-9`}
      >
        Tecnoesis is the annual techno-managerial event of NIT Silchar,
        promising all tech geeks the ideal niche of fascinating events,
        workshops, competitions and interactions worth a lifetime. This mega
        event has left its mark as of the most prominent techfests across the
        country. The cauldron of enthusiasm and knowledge attracts various
        students, presenting the chance to let their minds run wild with ideads,
        fostering the inventors of the future.
      </div>
    </div>
  )
}

export default AboutTechno
