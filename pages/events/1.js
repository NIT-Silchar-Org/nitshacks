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
                <div className={styles.title}>Software Track</div>
              </div>
            </div>
            <div className={styles.mobile_poster_software}></div>
            <div className={styles.details}>
              <br />
              <div className={styles.heading}>
                The Software Track of NITS HACKS 5.0 is a Software Hackathon where the participants 
                are asked to build an optimised application based on a problem statement.
              </div>
              <br />
              <ul className={styles.ulist}>
                <li>
                There would be a bunch of statements provided to them from which they are at liberty
                to choose any one. Once selected they start working on finding the solution to that.
                </li>
                <li>
                Participants from various Institutes are welcomed to take part in this contest.
                They have to form groups of [x] members and tackle the problem opted by them accordingly.
                </li>
                <li>
                The contest would consist of two rounds- Prelims and Mains. Based on the results of the Prelims round,
                [x] number of teams will be finally selected for the main round.
                </li>
                <li>
                The prelims round will be held in the online mode, whereas the final round will be an onsite
                round being held live in our college.
                </li>
                <li>
                The prelims round would be held from x to y and the results of the prelims round will be declared on [x] date.
                The final round will be held on [xyz] date. The results of which will be announced on the [same day/ on this date]
                </li>
                <li>
                The winners of the Final round will be awarded with exciting prizes worth [x amount].
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
      <div className={styles.right_section_software}>
      </div>
    </div>
  )
}

export default Event;
