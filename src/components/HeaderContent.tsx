import React from 'react'
import Link from 'next/link'

const HeaderContent = () => {
    const content = (
        <section className='mt-[-5rem] sm:mt-[-11rem] flex flex-col items-center p-5 gap-4'>
            <h1 className='text-center text-white uppercase font-bold text-4xl md:text-7xl'>Transforming Lives</h1>
            <h2 className='text-primary capitalize font-bold text-lg md:text-3xl text-center'>To Influence The World For God&apos;s Kingdom</h2>
            <h2 className='uppercase font-bold text-lg text-center text-white block md:hidden'>Sunday Services: 11:00 - 12:30</h2>
            <Link href='#'><h2 className='border w-44 p-3 text-center rounded-3xl text-white hover:bg-white hover:text-secondary transition duration-300 ease-in-out'>Join Us</h2></Link>
        </section>
    )

    return content
}

export default HeaderContent