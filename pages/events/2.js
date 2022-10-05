import Image from 'next/image'
import DummyLogo from '../../public/dummylogo.png'
import styles from '../events/events.module.css'
import Hamburger_menu from '../../components/elements/hamburger_menu'
import Ham_icon from '../../components/elements/ham_icon'
import img from '../../public/events/UIUX_track.png'
import { useState } from 'react'

function Event() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <div className={styles.eventspage}>
      <Hamburger_menu showMenu={showMenu} />
      <Ham_icon showMenu={showMenu} setShowMenu={setShowMenu} />
      <div className={styles.left_section}>
        <div className={styles.background}>
          <div className={styles.content}>
            <div className={styles.headers}>
              <div className={styles.event_logo}>
                <Image src={DummyLogo} />
              </div>
              <div className={styles.head}>
                <div className={styles.title}>UI/UX Track</div>
              </div>
            </div>
            <div className={styles.mobile_poster_uiux}></div>
            <div className={styles.details}>
              <br />
              <p className={styles.subhead}>
                The newly added UI/UX track of NITSHacks is here to satisfy your
                hunger of making great designs and elevating user experience to
                the next level. This path is introduced to familiarize people
                with the fascinating world of UI/UX designing and show people
                the importance of this art in the industry.Let your creative
                juices flow and make extraordinary designs to pave your way
                towards victory and win exciting prizes.
              </p>
              <br />
              <b>
                <p>
                  The event will be organized in a single phase and participants
                  will be judged on 3 criteria: Ideation, Design and
                  Prototyping. Multiple problem statements will be available for
                  the participant. Each participant can select only one problem
                  statement. Submission of multiple problem statements will not
                  be considered.
                </p>
              </b>
              <br />
              <div>Rules and Guidelines</div>
              <ul className={styles.rulesul}>
                <li>Only individual participation is allowed</li>
                <li>
                  The design should be Figma and each participant must have a
                  Figma account.
                </li>
                <li>The hackathon will be in a hybrid model</li>
                <li>The design should be real and new</li>
                <li>
                  Existing website/application design cloning will be eliminated
                  at any stage.
                </li>
              </ul>
              <br />
            </div>
            <div className={styles.btnwrapper}>
              {/* <a target="_blank" href='https://forms.gle/vS1scytr5gqh61Up7'> */}
              <button disabled className={styles.registerbtn}></button>
              {/* </a> */}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_section_uiux}>
        <Image
          src={img}
          objectFit="cover"
          style={{
            width: '40vw',
            height: '100vh',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  )
}

export default Event
