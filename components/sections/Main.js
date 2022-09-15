import About from './About'
import AboutTecno from './AboutTecno'
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

const Main = () => {
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
    <div className="relative bg-black overflow-y-hidden overflow-x-hidden">
      <div
        className="relative absolute w-32 h-32 z-10 top-20"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      >
        <Image src={eclipse} />
      </div>
      <div
        className="relative absolute w-32 h-32 z-10 top-[30vh] left-10"
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      >
        <Image src={cube} />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[50vh] left-[85vw]"
        style={{ transform: `translateY(-${offsetY * 0.7}px)` }}
      >
        <Image src={arrow} />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[70vh] left-[85vw]"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      >
        <Image src={ring} />
      </div>
      <div className="absolute -top-20">
        <About />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[100vh]"
        style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
      >
        <Image src={square} />
      </div>
      <div className="relative -top-20">
        <AboutTecno />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[100vh] left-[88vw]"
        style={{ transform: `translateY(-${offsetY * 0.6}px)` }}
      >
        <Image src={triangle} />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[120vh]"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      >
        <Image src={cross} />
      </div>
      <div className="relative -top-40">
        <Events />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 left-[85vw] top-[200vh]"
        style={{ transform: `translateY(-${offsetY * 0.4}px)` }}
      >
        <Image src={arrow} className="rotate-180" />
      </div>
      <div className="relative -top-40">
        <Sponsers />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 top-[170vh]"
        style={{ transform: `translateY(-${offsetY * 0.32}px)` }}
      >
        <Image src={arrow} className="rotate-90" />
      </div>
      <div
        className="relative absolute w-40 h-40 z-15 -right-[87vw] top-[170vh]"
        style={{ transform: `translateY(-${offsetY * 0.32}px)` }}
      >
        <Image src={ring2} />
      </div>
      <div
        className="relative absolute w-40 h-40 z-10 -right-[89vw] top-[140vh]"
        style={{ transform: `translateY(-${offsetY * 0.3}px)` }}
      >
        <Image src={ball} />
      </div>
      <Contact />
    </div>
  )
}

export default Main
