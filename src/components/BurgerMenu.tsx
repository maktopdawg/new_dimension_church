'use client'
import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import Link from 'next/link'

interface BurgerMenuProps {
    open: boolean
    setOpen: any
}

const BurgerMenu = ({ open, setOpen }: BurgerMenuProps) => {
    const menu_elements = ['About Us', "I'm New", 'Events', 'Contact Us']

    const content = (
        <>
            {open && 
                <section className='z-10 fixed flex items-center justify-center w-full h-screen bg-white'>
                    <section className='absolute top-0 right-0 text-black flex justify-end p-6'>
                        <span className='cursor-pointer' onClick={() => setOpen(!open)}><RxCross1 size={25} /></span>
                    </section>

                    <ul className='flex flex-col items-center gap-7'>
                        {menu_elements.map((item) => (
                            <li className='text-sm md:text-base' key={item}><Link href='#'>{item}</Link></li>
                        ))}
                    </ul>
                </section>
            }
        </>
    )

    return content
}

export default BurgerMenu