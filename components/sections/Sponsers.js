import React from 'react'
import SponserCard from '../elements/SponserCard'
import devfolio from '../../public/home/Devfolio.png'
import polygon from '../../public/home/Polygon.png'
import solana from '../../public/home/Solana.png'
import replit from '../../public/home/Replit.png'
import filecoin from '../../public/home/Filecoin.png'


const Sponsers = () => {
  return (
    <div className="w-screen h-screen md:p-12 bg-black flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin">
      <div className="flex flex-col items-center justify-center pb-5 md:p-8 my-4">
        <div className="font-babaPro py-2 border-b">SPONSERS</div>
      </div>

      <div className="flex items-center h-[80vh]">
        <div className="flex flex-col md:flex-row justify-between">
          <SponserCard imgSrc={devfolio} />
          <SponserCard imgSrc={polygon} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-between">
        <SponserCard imgSrc={solana} />
        <SponserCard imgSrc={replit} />
        <SponserCard imgSrc={filecoin} />
      </div>
    </div>
  )
}

export default Sponsers
