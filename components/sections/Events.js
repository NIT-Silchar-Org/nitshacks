import React from 'react'
import EventList from './EventList'

const Events = ({ showMenu }) => {
  return (
    <div className="w-screen h-screen bg-transparent">
      <div
        className={`${
          showMenu ? 'opacity-0 duration-500' : ''
        } text-white text-2xl md:text-[2.6rem] font-babaPro text-center py-8`}
      >
        Events
      </div>
      <div className={`${showMenu ? 'opacity-0 duration-500' : ''}`}>
        <EventList />
      </div>
    </div>
  )
}

export default Events
