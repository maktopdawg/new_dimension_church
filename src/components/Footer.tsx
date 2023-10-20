import React from 'react'
import Link from 'next/link'
import uniqid from 'uniqid'

let address = <span></span>
const footer_elements = [
    ['About Us', 'Events', 'Contact Us'],
    ['Facebook', 'Instagram', 'Twitter'],
    ['monte la vue hotel', '60 turaco st, norscot,', 'fourways (sandton)'],
    ['+27 (67) 871 3960', 'info@biblecollege.com'],
    ['Privacy Policy', 'Terms of use']
]

const Footer = () => {
    const content = (
        <footer className='sm:p-28 p-15 py-10 flex flex-col bg-primary text-white'>
            <section className='mb-8'>
                <h2 className='text-2xl uppercase text-secondary font-bold md:text-left text-center'>NEW DIMENSION</h2>
            </section>

            <section className='sm:flex-row flex-col gap-7 flex justify-between text-center sm:text-left'>
                <section className='flex flex-col gap-4'>
                    <span>
                        <p className='mb-2 text-center sm:text-left text-lg'>Address:</p>
                        {footer_elements[2].map((item) => (
                            <li key={uniqid()} className='text-sm md:text-base'>{item}</li>
                        ))}
                        
                    </span>
                    
                    <span>
                        <p className='mb-2 text-center sm:text-left text-lg'>Contact:</p>
                        {footer_elements[3].map((item) => (
                            <li key={uniqid()} className='text-sm md:text-base'>{item}</li>
                        ))}
                    </span>
                </section>

                <section className='sm:flex-row flex-col flex sm:gap-20 gap-8 text-center sm:text-left '>
                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Resources</h3>
                        {footer_elements[0].map((item) => (
                            <li key={uniqid()} className='mb-4 text-sm md:text-base'><Link href="#">{item}</Link></li>
                        ))}
                    </ul>

                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Social</h3>
                        {footer_elements[1].map((item) => (
                            <li key={uniqid()} className='mb-4 text-sm md:text-base'><Link href="#">{item}</Link></li>
                        ))}
                    </ul>

                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Church</h3>
                        <li className='mb-4 text-sm md:text-base'><span>2023 HitRefresh. <b/><br/>All rights reserved.</span></li>
                        {footer_elements[4].map((item) => (
                            <li key={uniqid()} className='mb-4 text-sm md:text-base'><Link href={'#'}>{item}</Link></li>
                        ))}
                    </ul>
                </section>
            </section>
        </footer>
    )

    return content
}

export default Footer