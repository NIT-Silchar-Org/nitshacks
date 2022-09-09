import Image from 'next/image'
import React from 'react'
import cs_default from '../../public/cs_default.svg'
import cs_var from '../../public/cs_var.svg'

const Gallery = () => {
  return (
    <div className="w-screen h-screen bg-indigo-900" id="gallery">
      <div className="text-white text-[2.6rem] font-babaPro text-center py-8">
        Gallery
      </div>
      <div className="w-100 h-[70vh] flex items-center justify-center">
        <div>
          <Image src={cs_default} />
        </div>
      </div>
    </div>
  )
}

export default Gallery
