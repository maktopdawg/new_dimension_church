import React from 'react'
import Link from 'next/link'

const JoinUs = () => {
    const content = (
        <div className='join-us-bg h-[30rem] flex items-center justify-center'>
            <section className='backdrop-blur-lg rounded-2xl w-[90%] flex flex-col items-center justify-center text-white p-10 uppercase max-w-[40rem]'>
                <h1 className='font-bold uppercase text-4xl text-center mb-8'>Join Us Every Sundays</h1>
                <h2 className='text-center mb-1'>Monte La Vue Hotel</h2>
                <h2 className='text-center mb-1'>60 Turaco St, Norscot, Fourways &#40;Sandton&#41;</h2>
                <h2 className='text-center mb-5'>Time: 11:00 - 12:30</h2>
                <Link href='#'><h2 className='border w-44 p-3 text-center rounded-3xl text-white hover:bg-white hover:text-secondary transition duration-300 ease-in-out capitalize'>Plan A Visit</h2></Link>
            </section>
        </div>
    )

    return content
}

export default JoinUs