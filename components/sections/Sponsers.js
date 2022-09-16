import React from 'react'
import SponserCard from '../elements/SponserCard'
import devfolio from '../../public/home/Devfolio.png'
import polygon from '../../public/home/Polygon.png'
import solana from '../../public/home/Solana.png'
import replit from '../../public/home/Replit.png'
import filecoin from '../../public/home/Filecoin.png'


const Sponsers = ({showMenu}) => {
  return (
    <div
      className="w-screen h-screen md:p-12 bg-transparent flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin"
      id="sponsors"
    >
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex flex-col items-center justify-center pb-5 md:p-8 my-4`}
      >
        <div className="font-babaPro py-2 border-b">SPONSORSHIP</div>
      </div>

      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex items-center h-[80vh]`}
      >
        <div className="flex flex-col md:flex-row justify-between">
          <SponserCard imgSrc={devfolio} />
          <SponserCard imgSrc={polygon} />
        </div>
      </div>
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex items-center h-[80vh]`}
      >
        <div className="flex flex-col md:flex-row justify-between">
          <SponserCard imgSrc={solana} />
          <SponserCard imgSrc={replit} />
          <SponserCard imgSrc={filecoin} />
        </div>
      </div>
    </div>
  )
}

export default Sponsers
