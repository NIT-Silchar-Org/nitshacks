import React, { useEffect, useState } from 'react'
import SponserCard from '../elements/SponserCard'
import devfolio from '../../public/home/Devfolio.png'
import polygon from '../../public/home/Polygon.png'
import solana from '../../public/home/Solana.png'
import replit from '../../public/home/Replit.png'
import filecoin from '../../public/home/Filecoin.png'
import Carousel from '../elements/Carousel'


const Sponsers = ({showMenu}) => {

  const tierOneSponsors = [
    {imgSrc: devfolio},
    {imgSrc: polygon},
  ]

  const tierTwoSponsors = [
    {imgSrc: solana},
    {imgSrc: replit},
    {imgSrc: filecoin},
  ]
  
  const [carouselSizes,setCarouselSizes] = useState ({
    tierOneSize: tierOneSponsors.length,
    tierTwoSize: tierTwoSponsors.length,
  })

  useEffect(() => {
    if(screen.width<640){
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,1);
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize,1);
        return newSizes;
      })
    }else if(screen.width<1200){
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,2);
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize,2);
        return newSizes;
      })
    }else{
      setCarouselSizes((prev) => {
        const newSizes = {...prev}
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize,3);
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize,3);
        return newSizes;
      })
    }

  },[])

  return (
    <div
      className="w-screen min-h-screen md:p-12 bg-transparent flex text-white items-center justify-center flex-col text-2xl md:text-[2.6rem] font-thin"
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
        } flex items-center`}
      >
        {/* <div className="flex flex-col md:flex-row justify-between">
          <SponserCard imgSrc={devfolio} />
          <SponserCard imgSrc={polygon} />
        </div> */}
        <Carousel cardList={tierOneSponsors} carouselSize = {carouselSizes.tierOneSize} />
      </div>
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex items-center`}
      >
        {/* <div className="flex flex-col md:flex-row justify-between">
          <SponserCard imgSrc={solana} />
          <SponserCard imgSrc={replit} />
          <SponserCard imgSrc={filecoin} />
        </div> */}
        <Carousel cardList={tierTwoSponsors} carouselSize = {carouselSizes.tierTwoSize} />
      </div>
    </div>
  )
}

export default Sponsers
