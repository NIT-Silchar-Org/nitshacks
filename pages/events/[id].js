import Image from 'next/image'
import DummyLogo from '../../public/dummylogo.png'
import styles from '../events/events.module.css'

function Event() {

  return (
    <div className={styles.eventspage}>
      <div className={styles.left_section}>
        <div className={styles.background}>
          <div className={styles.content}>
            <div className={styles.headers}>
              <div className={styles.event_logo}>
                <Image src={DummyLogo}/>
              </div>
              <div className={styles.head}>
                <div className={styles.title}>Event 1</div>
                <div className={styles.module}>Module: Lorem</div>
              </div>
            </div>
            <div className={styles.mobile_poster}></div>
            <div className={styles.details}>
                Id dolor Lorem dolore veniam ad cupidatat aliqua deserunt. Sunt
                sit commodo tempor mollit do deserunt aute non enim esse
                incididunt. Eiusmod Lorem non ipsum adipisicing id dolore
                pariatur mollit ea voluptate aliquip qui ipsum. Eiusmod
                excepteur duis tempor est labore magna irure incididunt anim
                esse cupidatat. Est aliquip ullamco et cillum officia cupidatat
                fugiat amet non est ullamco aliqua Lorem ea. Elit dolor
                voluptate duis magna. In qui aliqua nisi reprehenderit cupidatat
                officia mollit laboris eiusmod dolore laborum ea consequat quis.
                sit commodo tempor mollit do deserunt aute non enim esse
                incididunt. Eiusmod Lorem non ipsum adipisicing id dolore
                pariatur mollit ea voluptate aliquip qui ipsum. Eiusmod
                excepteur duis tempor est labore magna irure incididunt anim
                esse cupidatat. Est aliquip ullamco et cillum officia cupidatat



                Id dolor Lorem dolore veniam ad cupidatat aliqua deserunt. Sunt
                sit commodo tempor mollit do deserunt aute non enim esse
                incididunt. Eiusmod Lorem non ipsum adipisicing id dolore
                pariatur mollit ea voluptate aliquip qui ipsum. Eiusmod
                excepteur duis tempor est labore magna irure incididunt anim
                esse cupidatat. Est aliquip ullamco et cillum officia cupidatat
                fugiat amet non est ullamco aliqua Lorem ea. Elit dolor
                voluptate duis magna. In qui aliqua nisi reprehenderit cupidatat
                officia mollit laboris eiusmod dolore laborum ea consequat quis.
                Proident mollit laboris laborum in qui irure nostrud et est et
                ad nulla ad fugiat. Qui ad veniam consectetur veniam excepteur
                veniam consectetur deserunt officia ipsum consequat.              

            </div>
            <div className={styles.btnwrapper}>
              <button 
                className={styles.registerbtn}
                onClick={()=>{
                  window.location.href = 'https://devfolio.co/'
                }}
              ></button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right_section}>
      </div>
    </div>
  )
}

export default Event;
