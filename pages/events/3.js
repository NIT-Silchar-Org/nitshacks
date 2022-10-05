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
                <div className={styles.title}>Coding Track</div>
              </div>
            </div>
            <div className={styles.mobile_poster_coding}></div>
            <div className={styles.details}>
              <br />
              <p className={styles.subhead}>
              The coding competition is open to all undergraduate programmers in India and will be split into preliminary and final rounds according to ICPC guidelines. Prelims will be held in online mode on 06/10/2022(Tentative). The top 20 preliminaries teams out of which 5 spots are reserved for the NITS Team(excluding the top 15) will participate in the final round which is an on-site competition.
              </p>
              <br />
              <div className={styles.subhead}>Rules and Guidelines</div>
              <ul className={styles.rulesul}>
                <li>A team of 2-3 members from the same college is required to participate in the contest.</li>
                <li>An eligible individual may join only one team.</li>
                <li>Each participant must have a CodeForces account.</li>
                <li>A team must be created in Codeforces comprising of the members.</li>
                <li>Finally, you should register for the contest using the formed team.</li>
                <li>The team must also register in the provided Google form, failure to do so will result in the team's disqualification.</li>
                <li>
                  For the onsite teams who qualify for finals:
                  <ul className={styles.coding_rules}>
                    <li>Travelling expenses, accommodation will be reimbursed to some extent by the institute. 
                    </li>
                    <li>A team can use no more than one laptop during the contests.</li>
                  </ul>
                </li>
              </ul>
              <br />
            </div>
            <div className={styles.btnwrapper}>
              <a target="_blank" href='https://forms.gle/kdJuqzaa6fdpQG7r7'>
                <button 
                  className={styles.registerbtn}
                >
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_section_coding}>
      </div>
    </div>
  )
}

export default Event;
