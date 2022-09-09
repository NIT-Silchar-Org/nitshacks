import React from 'react'
import EventList from './EventList'

const Events = () => {
  return (
    <div className="w-screen h-screen bg-indigo-900" id="events">
      <div className="text-white text-2xl md:text-[2.6rem] font-babaPro text-center py-8">
        Events
      </div>
      <EventList />
    </div>
  )
}

export default Events
