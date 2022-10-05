import Image from 'next/image'
import DummyLogo from '../../public/dummylogo.png'
import styles from '../events/events.module.css'
import Hamburger_menu from '../../components/elements/hamburger_menu'
import Ham_icon from '../../components/elements/ham_icon'
import { useEffect, useState } from 'react'

function Event() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://apply.devfolio.co/v2/sdk.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      document.body.removeChild(script)
    }
  }, [])

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
                <div className={styles.title}>Software Track</div>
              </div>
            </div>
            <div className={styles.mobile_poster_software}></div>
            <div className={styles.details}>
              <br />
              <div className={styles.heading}>
              The Software Track of NITS HACKS 5.0 is a Software Hackathon where the participants are asked to build an optimised application based on a problem statement. 
              </div>
              <br />
              <ul className={styles.ulist}>
                <li>
                There would be a bunch of statements provided to them from which they are at liberty to choose any one. Once selected they start working on finding the solution to that.
                </li>
                <li>
                Participants from various Institutes are welcomed to take part in this contest. They have to form groups of a maximum of 4 members and tackle the problem opted by them accordingly.
                </li>
                <li>
                There will be an idea evaluation round and on the basis of that, selected teams will be allowed to present their final submission to the panellist.
                </li>
                <li>
                This is a hybrid hackathon so teams can participate both offline and online. 
                </li>
              </ul>
              <br />
              <div>For more Details <a href="https://www.notion.so/jyotimoy-kashyap-gdscnits/NITSHACKS-5-0-Software-Track-f66c10f965cf44a4b8cdd97b8b074f3b" target="_blank"><u>Click here</u></a></div>
              <br />
            </div>
            <div className={styles.btnwrapper}>
              {/* <button
                className={styles.devfolioregisterbtn}
                onClick={() => {
                  window.location.href = ''
                }}
              ></button> */}
              <div
                className="apply-button"
                data-hackathon-slug="YOUR-HACKATHON-SLUG"
                data-button-theme="light"
                style={{ height: '44px', width: '312px' }}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_section_software}></div>
    </div>
  )
}

export default Event
