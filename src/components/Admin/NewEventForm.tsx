import React from 'react'

const NewEventForm = () => {
    const content = (
        <div style={{background: '#fafafa'}} >
            <div style={{maxWidth: '1300px'}} className='m-auto py-11 p-6'>
                <h1 className='sm:text-left text-center font-[700] uppercase text-lg sm:text-2xl text-secondary mb-5'>Create New Event</h1>

                <div className='bg-white py-10 px-5'>
                    <form action="#">
                        <label htmlFor="title">Event Title</label><br />
                        <input type="text" id='title' placeholder='Enter Title' className='mt-3 mb-4 p-3 rounded border w-full h-[3rem]' />

                        <div className='flex items-center gap-3 w-full'>
                            <section className='w-full'>
                                <label htmlFor="date">Date</label><br/>
                                <input type="text" id='date' placeholder='Enter Date' className='mt-3 mb-3 p-3 rounded border w-full h-[3rem]' />
                            </section>

                            <section className='w-full'>
                                <label htmlFor="time">Time</label><br />
                                <input type="text" id='time' placeholder='Enter Time' className='mt-3 mb-3 p-3 rounded border w-full h-[3rem]' />
                            </section>
                        </div>

                        <label htmlFor="details">About Event</label><br />
                        <textarea name="details" id="details" className='mt-3 mb-12 p-3 rounded resize-none h-48 border w-full' placeholder='Event details'></textarea>

                        <div className='flex sm:flex-row flex-col items-center justify-center gap-3'>
                            <button className='border border-primary p-2 w-full sm:w-[9rem] text-primary font-bold text-sm'>Cancel</button>
                            <button className='bg-primary p-2 w-full sm:w-[9rem] text-white font-bold text-sm'>Create Event</button>
                        </div>
                    </form>
                </div>
            </div>
            
        </div>
    )

    return content
}

export default NewEventForm