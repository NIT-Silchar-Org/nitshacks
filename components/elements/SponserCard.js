import React from 'react'
import devfolio from '../../public/home/Devfolio.png'
import Image from 'next/image'

const SponserCard = ({imgSrc}) => {
  return (
    <div className="w-64 h-32 px-8 bg-gray-800/[0.75] rounded-lg flex items-center justify-center m-8 hover:shadow-[0_6px_20px_gray] duration-200">
      <div className="relative w-60 mx-auto h-100">
        <Image src={imgSrc} />
      </div>
    </div>
  )
}

export default SponserCard
