import React, { useState } from 'react'
// import Sidebar from '../components/sections/Sidebar/Sidebar'
import TecnoTeamSidebar from '../components/sections/TecnoTeamSidebar/TecnoTeamSidebar'
import Main from '../components/sections/Modules/Modules.js'
import styles from '../styles/Modules.module.scss'
// import Slider from '../components/style-guide/Slider/Slider'
// import { fetchModule } from '../utils/events_fetch'
// import LogoHamburger from '../components/sections/Navbar/LogoHamburger'
import data from '../Data/team.json'

const Team = () => {
  const [selectedItem, setSelectedItem] = useState(0)
  const [active, setActive] = useState(false)
  return (
    <>
      <div className={styles.mod_container}>
        <div className={styles.bg}>
          <div id={styles.one}></div>
          <div id={styles.two}></div>
          <div id={styles.three}></div>
          <div id={styles.four}></div>
        </div>
        <div className={styles.main}>
          <Main
            setSelectedItem={setSelectedItem}
            setActive={setActive}
            active={active}
            modules={data}
            isteampage={true}
          />
        </div>
        <div>
          <TecnoTeamSidebar
            setSelectedItem={setSelectedItem}
            selectedItem={selectedItem}
            active={active}
            setActive={setActive}
            modules={data}
          />
        </div>
      </div>
    </>
  )
}

export default Team
