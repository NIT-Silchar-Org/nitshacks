import Image from 'next/image'
import DummyLogo from '../../public/dummylogo.png'
import styles from '../events/events.module.css'
import Hamburger_menu from '../../components/elements/hamburger_menu'
import Ham_icon from '../../components/elements/ham_icon'
import { useState } from 'react'

function Event() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className={styles.eventspage}>
      <Hamburger_menu showMenu={showMenu} />
      <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className={styles.left_section}>
        <div className={styles.background}>
          <div className={styles.content}>
            <div className={styles.headers}>
              <div className={styles.event_logo}>
                <Image src={DummyLogo}/>
              </div>
              <div className={styles.head}>
                <div className={styles.title}>UI/UX Track</div>
              </div>
            </div>
            <div className={styles.mobile_poster_uiux}></div>
            <div className={styles.details}>
              <br />
              <p className={styles.subhead}>
              The newly added UI/UX track of NITSHacks is here to satisfy your hunger of making great 
              designs and elevating user experience to the next level. This path is introduced to familiarize 
              people with the fascinating world of UI/UX designing and show people the importance of this art 
              in the industry. Participants will be given specific themes on which they will make website/app designs. 
              Let your creative juices flow and make extraordinary designs to pave your way towards victory and win exciting
              cash prizes. The designs will be judged on their creativity, practicality and color combination/ moodboarding.
              This will be an offline event and students above the age of 16 are allowed to compete for these amazing prizes 
              and to have a good time. Participants are allowed to use whichever software they prefer to craft their designs. 
              Offline participation will be highly encouraged and appreciated rather than online
              </p>
              <br />
              <ul className={styles.ulist}>
                <li>
                  <div className={styles.subhead}>Round 1: Ideation</div>
                  Once you register for the challenge you would get your problem statement through email or facebook post.
                  You have to solve this design problem by conducting user research, creating user journeys, user personas.
                  You can use the 5 principles of design thinking - empathize, define, ideate, prototype and test.
                  At the end submit your solution in a Google Form link that will be provided to you
                </li>
                <li>
                  <div className={styles.subhead}>Round 2: Designing on Figma ( Including wireframing )</div>
                    The selected participants will have to work on the actual designing of the problem statement 
                    including wireframing (important).
                </li>
                <li>
                  <div className={styles.subhead}>Round 3: Prototyping and improving interactions ( Final Round )</div>
                    This will be the final round where after improving your interactions , prototypes , 
                    animations you will have to present your design and ideas in front of juries.
                </li>
                <li>
                  <div className={styles.subhead}>Rules and Guidelines</div>
                    <ul className={styles.rulesul}>
                      <li>Only individual participation is allowed</li>
                      <li>The design should be Figma and each participant must have a Figma account.</li>
                      <li>The hackathon will be in a hybrid model</li>
                      <li>The design should be real and new</li>
                      <li>Existing website/application design cloning will be eliminated at any stage.</li>
                    </ul>
                  </li>
              </ul>
            </div>
            <div className={styles.btnwrapper}>
              <button 
                className={styles.registerbtn}
                onClick={()=>{
                  window.location.href = ''
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_section_uiux}>
      </div>
    </div>
  )
}

export default Event;
