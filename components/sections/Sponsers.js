import React, { useEffect, useState } from 'react'
import SponserCard from '../elements/SponserCard'
import devfolio from '../../public/home/Devfolio.png'
import polygon from '../../public/home/Polygon.png'
import solana from '../../public/home/Solana.png'
import replit from '../../public/home/Replit.png'
import filecoin from '../../public/home/Filecoin.png'
import taskade from '../../public/home/taskade.png'
import echo3d from '../../public/home/echo3d.png'
import campuskarma from '../../public/home/CampusKarma.png'
import Carousel from '../elements/Carousel'

const Sponsers = ({ showMenu }) => {
  const tierOneSponsors = [
    { imgSrc: devfolio, imghref: 'https://devfolio.co/' },
    { imgSrc: polygon, imghref: 'https://polygon.technology/' },
  ]

  const tierTwoSponsors = [
    { imgSrc: solana, imghref: 'https://solana.com/' },
    { imgSrc: replit, imghref: 'https://replit.com/' },
    { imgSrc: filecoin, imghref: 'https://filecoin.io/' },
  ]
  const tierThreeSponsors = [
    { imgSrc: taskade, imghref: 'https://www.taskade.com/' },
  ]

  const tierFourSponsors = [
    { imgSrc: echo3d, imghref: 'https://www.echo3d.co/' },
    { imgSrc: campuskarma, imghref: 'https://www.campuskarma.in/' },
  ]
  const [carouselSizes, setCarouselSizes] = useState({
    tierOneSize: tierOneSponsors.length,
    tierTwoSize: tierTwoSponsors.length,
    tierThreeSize: tierThreeSponsors.length,
    tierFourSize: tierFourSponsors.length,
  })

  useEffect(() => {
    if (screen.width < 640) {
      setCarouselSizes((prev) => {
        const newSizes = { ...prev }
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize, 1)
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize, 1)
        newSizes.tierThreeSize = Math.min(newSizes.tierThreeSize, 1)
        newSizes.tierFourSize = Math.min(newSizes.tierFourSize, 1)
        return newSizes
      })
    } else if (screen.width < 1200) {
      setCarouselSizes((prev) => {
        const newSizes = { ...prev }
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize, 2)
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize, 2)
        newSizes.tierThreeSize = Math.min(newSizes.tierThreeSize, 2)
        newSizes.tierFourSize = Math.min(newSizes.tierFourSize, 2)
        return newSizes
      })
    } else {
      setCarouselSizes((prev) => {
        const newSizes = { ...prev }
        newSizes.tierOneSize = Math.min(newSizes.tierOneSize, 3)
        newSizes.tierTwoSize = Math.min(newSizes.tierTwoSize, 3)
        newSizes.tierThreeSize = Math.min(newSizes.tierThreeSize, 3)
        newSizes.tierFourSize = Math.min(newSizes.tierFourSize, 3)
        return newSizes
      })
    }
  }, [])

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
        <div className="font-babaPro py-2 border-b">SPONSORS</div>
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
        <Carousel
          cardList={tierOneSponsors}
          carouselSize={carouselSizes.tierOneSize}
        />
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
        <Carousel
          cardList={tierTwoSponsors}
          carouselSize={carouselSizes.tierTwoSize}
        />
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
        <Carousel
          cardList={tierThreeSponsors}
          carouselSize={carouselSizes.tierThreeSize}
        />
      </div>

      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } flex items-center`}
      >
        <Carousel
          cardList={tierFourSponsors}
          carouselSize={carouselSizes.tierFourSize}
        />
      </div>
    </div>
  )
}

export default Sponsers
