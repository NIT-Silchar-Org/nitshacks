import default_logo from '../../public/Default.png'
import { useState, useEffect } from 'react'
import Ham_icon from '../elements/ham_icon'
import Social_media_icons from '../elements/social_media_icons'
import Hamburger_menu from '../elements/hamburger_menu'
import Image from 'next/image'

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className="hero_bg min-h-[100vh] w-[100vw] flex bg-slate-500 bg-[url('../public/tokyo.png')]" id="hero">
      <Hamburger_menu showMenu={showMenu} />

      <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />

    </div>
  )
}

export default Hero
