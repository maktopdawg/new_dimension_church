import Link from 'next/link'
import React from 'react'
import EventCard from './EventCard'

const Events = () => {
    const content = (
        <main style={{background: '#fafafa'}} className='p-10'>
            <div style={{maxWidth: '1300px'}} className='m-auto'>
                <div className='flex items-center justify-between mb-5'>
                    <h2 className='uppercase font-bold'>Events<br /><span className='text-xs font-[400]'>20 Active Events</span></h2>

                    <Link href={'/admin/events-page/new-event'}><h2 className='bg-primary text-sm sm:text-base text-white px-1 sm:px-3 py-1 sm:py-2 w-28 sm:w-36 flex items-center justify-center'>Add Event</h2></Link>
                </div>

                <section className='flex flex-col gap-2.5'>
                    <EventCard />
                    <EventCard />
                    <EventCard />
                    <EventCard />
                </section>
            </div>
        </main>
    )

    return content
}

export default Events