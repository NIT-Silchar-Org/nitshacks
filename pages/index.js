import default_logo from '../public/Default.png'
import { useState, useEffect, useRef } from 'react'
import Ham_icon from '../components/elements/ham_icon'
import Social_media_icons from '../components/elements/social_media_icons'
import Hamburger_menu from '../components/elements/hamburger_menu'
import Image from 'next/image'
// importing secureConnectionStart
import Main from '../components/sections/Main'
import Hero from '../components/sections/hero'
import Head from 'next/head'
import FOG from 'vanta/dist/vanta.fog.min'
// import CLOUDS2 from 'vanta/dist/vanta.clouds.min.js'

// var logo_counter=false;
function Hs() {
  const [showMenu, setShowMenu] = useState(false)
  const [vantaEffect, setVantaEffect] = useState(0)
  const myRef = useRef(0)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        FOG({
          el: myRef.current,
          highlightColor: 0x3cbcf5,
          highlightColor: 0x2aa3eb,
          midtoneColor: 0xeb2ac2,
          lowlightColor: 0x3f17c3,
          baseColor: 0xffffff,
          speed: 2.6,
        }),
      )
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])

  return (
    <div className="hs bg-sky-900">
      <Head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js"></script>
        <title>NITS HACKS</title>
      </Head>
      <div
        ref={myRef}
        className="hero_bg min-h-[100vh] w-[100vw] flex bg-slate-500 bg-[url('../public/tokyo.png')]"
      >
        <Hamburger_menu showMenu={showMenu} setShowMenu = {setShowMenu}/>

        <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />

        {/* social media icons */}
        <Social_media_icons />
      </div>
      <Hero showMenu={showMenu} />
      <Main showMenu={showMenu} />
    </div>
  )
}

export default Hs
