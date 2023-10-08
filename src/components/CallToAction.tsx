import React from 'react'
import Link from 'next/link'

const CallToAction = () => {
    const content = (
        <div className='min-h-96 py-20 text-white flex flex-col items-center justify-center bg-secondary'>
            <div className='md:max-w-[45rem] px-5 flex flex-col justify-center items-center gap-7'>
                <h1 className='text-3xl md:text-5xl text-center text-primary uppercase font-bold px-1'>Start Your Journey Of<br />Faith At New Dimension</h1>

                <p className='text-center'>We are teachers of the Word of God with simplicity & practicality demonstrating the power of the kingdom of Heaven here on Earth</p>

                <p className='text-center'>To impact lives of families and individuals, with God's word that begins to change the city of Fourways to a city that loves and serves God's purpose.</p>

                <Link href='#'><h2 className='border w-44 p-3 text-center rounded-3xl text-white hover:bg-white hover:text-secondary transition duration-300 ease-in-out'>Read More</h2></Link>
            </div>
        </div>
    )

    return content
}

export default CallToAction