'use client'
import Image from 'next/image'
import React from 'react'
import Img from '@/assets/ND-85.jpg'
import { useState } from 'react'
import 'animate.css';

const EventCard = () => {
    const [show, setShow] = useState<boolean>(false)
    const card_elements = ['Delete', 'Update']

    const content = (
        <div className='min-h-[4rem] sm:min-h-[8rem] bg-white' onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)}>
            <section className={`flex ${show ? 'items-center md:pb-5' : 'items-center'} justify-between md:justify-start gap-8`}>
                <section className={`${show && 'md:mt-[-44px]'} w-28 sm:w-44 h-full`}>
                    <Image
                        src={Img}
                        width={1000}
                        height={1000}
                        alt="woman-singing"
                        className='w-full h-[100%]'
                    />
                </section>
                
                <section className={`text-sm flex-1 flex justify-between pt-2`}>
                    <section className={`flex flex-col ${show && 'md:gap-3'} gap-1`}>
                        <p className={`bg-primary max-w-[6rem] py-1 text-xs  text-white text-center`}>10:00 - 11:00</p>
                        <p className='text-tertiary uppercase text-xs md:text-sm'>November 2, 2023</p>
                        <p className='uppercase font-bold text-xs md:text-sm'>Sunday Service</p>
                        {show && <p className={`max-w-[50%] hidden md:block text-base animate__animated animate__zoomIn`}>We are teachers of the Word of God with simplicity & practicality demonstrating the power of the Kingdom of Heaven here on Earth</p>}
                    </section>

                    {show &&
                    <section className='animate__animated animate__zoomIn md:flex gap-4 mr-8 hidden '>
                        {card_elements.map((item) => (
                            <li key={item} className={`cursor-pointer p-[1.2rem] text-center flex items-center justify-center font-bold min-w-[8rem] h-[2rem] bg-primary ${card_elements.indexOf(item) === 0 ? 'bg-white border border-primary text-primary' : 'text-white'}`}>{item}</li>
                        ))}
                    </section>}
                </section>   
            </section>
        </div>
    )

    return content
}

export default EventCard