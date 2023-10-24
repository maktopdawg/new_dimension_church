import React from 'react'
import Image from 'next/image'
import CoverImg from '@/assets/ND-85.jpg'

const EventCard = () => {
    return (
        <div className='relative border w-full min-h-[14rem] md:min-h-[20rem]'>
            <Image 
                src={CoverImg}
                width={1000}
                height={1000}
                alt='event-img-cover'
                className='h-full'
            />

            <section className='absolute bottom-0 z-10 text-sm uppercase pt-[15px] md:pl-[30px] pl-[20px] pr-[30px] pb-[10px] bg-[#ffffffcc] w-full min-h-[6rem]'>
                <p className='border bg-primary mb-1 flex items-center justify-center p-[0.75px] py-[2px] opacity-1000 text-white w-[7rem] font-bold'>10:00 - 11:00</p>
                <p className='mb-1 text-tertiary font-[500]'>November 22, 2023</p>
                <p className='mb-1 font-[700]'>Sunday Service</p>
            </section>
        </div>
    )
}

export default EventCard