import React from 'react'
import Link from 'next/link'

const HeaderContent = () => {
    const content = (
        <section className='mt-[-5rem] sm:mt-[-11rem] flex flex-col items-center p-5 gap-3'>
            <h1 style={{fontWeight: '900'}} className='text-center text-white uppercase font-bold text-3xl md:text-6xl'>Transforming Lives</h1>
            <h2 className='text-primary capitalize font-bold text-base md:text-3xl text-center'>To Influence The World For God&apos;s Kingdom</h2>
            <h2 className='uppercase font-bold text-base text-center text-white block md:hidden'>Sunday Services: 11:00 - 12:30</h2>
            <Link href='#'><h2 className='text-sm md:text-base border w-44 p-3 text-center rounded-3xl text-white hover:bg-white hover:text-secondary transition duration-300 ease-in-out'>Join Us</h2></Link>
        </section>
    )

    return content
}

export default HeaderContent