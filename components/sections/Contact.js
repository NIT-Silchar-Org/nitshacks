import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons'
import Map from './Map'
import styles from './Contact.module.scss'
library.add(faFacebook, faTwitter)

// const Contact = () => {
//   return (
//     <div className="w-screen h-[60vh] bg-[#120118] overflow-y-hidden font-lemonMilk">
//       <div className="relative absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-32 h-24">
//         <Image src={hacks} layout="fill" objectFit="cover" priority="true" />
//       </div>
//       <div className="relative absolute -top-16 left-4 w-28 h-20">
//         <Image src={topL} layout="fill" objectFit="cover" priority="true" />
//       </div>
//       <div className="relative absolute -top-36 left-[100vw] -translate-x-[120%] w-32 h-24">
//         <Image src={topR} layout="fill" objectFit="cover" priority="true" />
//       </div>
//       <div className="w-[95%] mx-auto relative -top-[55%]">
//         <div className="flex justify-between items-center w-full mx-auto">
//           <div className="text-white uppercase">
//             <div>©copyright</div>
//             <div>2022, Nits hacks</div>
//             <div>national institute of technology, silchar</div>
//           </div>
//           <div className="text-white uppercase">How to reach</div>
//         </div>
//         <div className="w-[14rem] h-[4rem] relative cursor-pointer my-2">
//           <Image
//             src={download}
//             layout="fill"
//             objectFit="cover"
//             priority="true"
//           />
//           <div className="absolute top-[1.5rem] left-[6.5rem] z-2 font-babaPro text-sm -translate-x-1/2 -translate-y-1/2 text-white">
//             Visit Tecnosis
//           </div>
//         </div>
//         <div className="text-white">CONNECT:</div>
//         <div className="flex text-white">
//           <FontAwesomeIcon
//             icon={faFacebook}
//             className="w-8 h-8 m-2 cursor-pointer"
//           />
//           <FontAwesomeIcon
//             icon={faTwitter}
//             className="w-8 h-8 m-2 cursor-pointer"
//           />
//         </div>
//         <div className="text-white">CONTACT US:</div>
//         <div className="text-white text-sm font-['Montserrat'] my-4">
//           nitshack@gmail.com
//         </div>

//         <div className='absolute -bottom-8 right-0'>
//           <Map />
//         </div>
//       </div>
//     </div>
//   )
// }

const Contact = () => {
  // I am NOT using tailwind cuz I don't want
  // readability to go out of the window plus it is unnecessary
  // bullshit and verbose when css is enough, and for some reason,
  // possibly my own ignorance, .module.scss is not
  // working for me, so, with deepest regret and most
  // sincere apologies to whoever is reading this and has to
  // work on this, inline styles it is!!
  return (
    <div className={styles.footer}>
      <div className={styles.bg}>
        <img src="/hacks.svg" className={styles.hacks}></img>
        <img src="/TopL.svg" className={styles.topL}></img>
        <img src="/TopR.svg" className={styles.topR}></img>
      </div>
      <div className={styles.footerText}>
        <div className="left-content text-white">
          ©COPYRIGHT
          <br />
          2022, NITS HACKS
          <br />
          NATIONAL INSTITUTE OF TECHNOLOGY, SILCHAR
          <br />
          <br />
          <br />
          <div
            className="visit"
            style={{
              position: 'relative',
            }}
            onClick={() => {
              window.open('https://tecnoesis.org/')
            }}
          >
            <img src="/btn.svg" className={styles.btn}></img>
            <span className={styles.btnText}>VISIT TECNOESIS</span>
          </div>
          <br />
          <br />
          CONNECT:
          <div
            className="connect"
            style={{
              display: 'flex',
              flexDirection: 'row',
            }}
          >
            <div
              className="fb"
              onClick={() => {
                window.open('https://www.facebook.com/NITSHacks/')
              }}
            >
              <FontAwesomeIcon
                icon={faFacebook}
                className="w-8 h-8 m-2 cursor-pointer"
              />
            </div>
            <div
              className="twitter"
              onClick={() => {
                window.open('https://twitter.com/nitshacks')
              }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="w-8 h-8 m-2 cursor-pointer"
              />
            </div>
          </div>
          <br />
          CONTACT US:
          <br />
          <a href="mailto:nitshacks@tecnoesis.org">nitshacks@tecnoesis.org</a>
        </div>
        <div className={styles.reach}>
          HOW TO REACH
          <br />
          <br />
          <div className={styles.map}>
            <Map />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
