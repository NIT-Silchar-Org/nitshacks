import React, { useState } from 'react'
import styles from './Events.module.scss'

const events = ['hi', 'hello', 'hey']

const EventList = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  return (
    <div className={styles.body}>
      <div className={styles.options}>
        {events.map((event, index) => {
          return (
            <div
              className={`${styles.option} ${
                activeIndex === index ? styles.active : styles.not_active
              }`}
              style={{
                background:
                  'url(https://66.media.tumblr.com/6fb397d822f4f9f4596dff2085b18f2e/tumblr_nzsvb4p6xS1qho82wo1_1280.jpg)',
              }}
              onClick={() => setActiveIndex(index)}
              key={index}
            >
              <div className={styles.shadow}></div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventList
