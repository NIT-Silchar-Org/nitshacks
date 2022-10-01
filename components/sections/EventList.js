import React, { useState } from 'react'
import styles from './Events.module.scss'
import download from '../../public/btn.svg'
import Image from 'next/image'
import Link from 'next/link'

const events = [
  {
    title: "UI/UX TRACK",
    link: "/events/2"
  },
  {
    title: "SOFTWARE TRACK",
    link: "/events/1"
  },
  {
    title: "CONDING TRACK",
    link: "/events/3"
  },
]

const EventList = () => {
  const [activeIndex, setActiveIndex] = useState(1)
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
              { index==activeIndex &&
                <div className={styles.eventContent}>

                  <div className={styles.eventTitle}> {event.title}</div>
                  <div className={styles.eventDetail}>
                  </div>
                  <Link href={event.link}>
                    <a className={styles.eventViewButton}>
                      <Image
                        src={download}
                        priority="true"
                        className="absolute top-0 left-0 h-8"
                      />
                      <div className="absolute w-full text-center top-[40%] left-1/2 z-2 font-babaPro text-sm -translate-x-1/2 -translate-y-1/2">
                        VIEW DETAILS
                      </div>
                    </a>
                  </Link>
                </div>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default EventList
