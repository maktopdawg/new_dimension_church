import React from 'react'
import EventCard from './EventCard'

const Events = () => {
    return (
        <div className='py-8 p-5 md:px-14 border'>
            <h2 className='text-center text-lg md:text-3xl text-secondary mb-2 font-[500]'>Events</h2>
            <h3 className='uppercase text-center text-lg md:text-4xl font-bold md:font-[700]'>Upcoming Events</h3>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:p-5'>
                <EventCard />
                <EventCard />
                <EventCard />
            </div>
        </div>
    )
}

export default Events