import React from 'react'
import facebook from '../../public/socialimg/facebook.png'
import twitter from '../../public/socialimg/twitter.png'
import github from '../../public/socialimg/github.png'
import linkedin from '../../public/socialimg/linkedin.png'
import instagram from '../../public/socialimg/instagram.png'
import Image from 'next/image'
const SocialMedia = () => {
  return (
    <div className="flex flex-col absolute translate-x-[-50%] translate-y-[-50%] left-[5%] top-[75%]">
      <div>
        <Image src={facebook} />
      </div>
      <div>
        <Image src={instagram} />
      </div>
      <div>
        <Image src={twitter} />
      </div>
      <div>
        <Image src={github} />
      </div>
      <div>
        <Image src={linkedin} />
      </div>
    </div>
  )
}

export default SocialMedia
