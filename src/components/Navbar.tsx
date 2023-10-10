'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '@/assets/new dimension (logo) 1.svg'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

interface NavbarProps {
    open: boolean
    setOpen: any
}

const Navbar = ({ open, setOpen }: NavbarProps) => {
    const menu_elements = ['About Us', "I'm New", 'Events', 'Contact Us']
    const content = (
        <nav className='relative p-4 md:p-10'>
            <div className='mx-0 md:mx-8 '>
                <section className='flex items-center justify-between'>
                    <section className='flex items-center gap-2'>
                        <Image
                            src={Logo}
                            width={47}
                            alt="new_dimension_logo"
                            />
                            <h3 className='text-sm hidden md:block uppercase'><span className='text-white font-bold text-lg'>New Dimension</span><br/><span className='text-white'>Church</span></h3>

                            <Link href="#"><h2 className='text-sm sm:hidden text-white p-3 w-32 md:w-48 text-center justify-center rounded-[3rem] items-center bg-primary flex'>Plan A Visit</h2></Link>
                    </section>

                    <section className='flex gap-9 items-center'>
                        <ul className='hidden md:flex gap-5'>
                            {menu_elements.map((item) => (
                                <Link key={item} href="#"><li className='text-base text-white'>{item}</li></Link>
                            ))}
                        </ul>

                        <Link href="#"><h2 className='text-sm sm:flex text-white p-3 w-36 md:w-48 text-center justify-center rounded-[3rem] items-center bg-primary hidden'>Plan A Visit</h2></Link>

                        <span onClick={() => setOpen(!open)} className='block sm:hidden cursor-pointer'><AiOutlineMenu size={30} /></span>
                    </section>
                </section>
            </div>
        </nav>
    )

    return content
}

export default Navbar