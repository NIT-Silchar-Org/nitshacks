import About from './about'
import AboutIIC from './AboutIIC'
import Contact from './Contact'
import Events from './Events'
import Image from 'next/image'
import eclipse from '../../public/home/ecllipse.svg'
import cube from '../../public/home/cube.svg'
import arrow from '../../public/home/arrow.svg'
import ring from '../../public/home/ring.svg'
import square from '../../public/home/square.svg'
import cross from '../../public/home/cross.svg'
import triangle from '../../public/home/triangle.svg'
import ring2 from '../../public/home/ring2.svg'
import ball from '../../public/home/ball.svg'
import Sponsers from './Sponsers'
import { useEffect, useState } from 'react'

const Main = ({showMenu}) => {
  const [offsetY, setOffsetY] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset-window.screenY)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div className="relative bg-sky-900/[0.6] overflow-y-hidden overflow-x-hidden">
      <div className="absolute">
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[20vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
        >
          <Image src={eclipse} />
        </div>
        <div
          className="relative w-20 h-20 md:w-32 md:h-32 top-[40vh] left-10 bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
        >
          <Image src={cube} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[50vh] left-[80vw] md:left-[85vw] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
        >
          <Image src={arrow} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[100vh] left-[80vw] md:left-[85vw] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        >
          <Image src={ring} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[160vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
        >
          <Image src={square} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[200vh] left-[80vw] md:left-[88vw] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
        >
          <Image src={triangle} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[190vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        >
          <Image src={cross} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 left-[85vw] top-[300vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
        >
          <Image src={arrow} className="rotate-180" />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 top-[260vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.32}px)` }}
        >
          <Image src={arrow} className="rotate-90" />
        </div>
        <div
          className="relative w-20 z-4 h-20 md:w-40 md:h-40 -right-[87vw] top-[305vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.32}px)` }}
        >
          <Image src={ring2} />
        </div>
        <div
          className="relative w-20 h-20 md:w-40 md:h-40 -right-[90vw] top-[280vh] bg-transparent"
          style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
        >
          <Image src={ball} />
        </div>
      </div>

      <div className="overflow-y-hidden overflow-x-hidden">
        <div className="relative top-0 bg-transparent min-h-screen" id="about">
          <About showMenu={showMenu} />
        </div>

        <div className="relative top-0 bg-transparent min-h-screen" id="aboutIIC">
          <AboutIIC showMenu={showMenu} />
        </div>

        <div className="relative top-0 bg-transparent min-h-screen" id="events">
          <Events showMenu={showMenu} />
        </div>

        <div className="relative top-0 bg-transparent min-h-screen" id="sponsors">
          <Sponsers showMenu={showMenu} />
        </div>
        <div className="relative top-0 md:top-0 bg-transparent min-h-screen sm:min-h-0" id="contact">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Main
