import React from 'react'
import Link from 'next/link'

let address = <span>2023 HitRefresh. <b/><br/>All rights reserved.</span>
const footer_elements = [
    ['About Us', 'Events', 'Contact Us'],
    ['Facebook', 'Instagram', 'Twitter'],
    [address, 'Privacy Policy', 'Terms of use']
]

const Footer = () => {
    const content = (
        <footer className='sm:p-28 p-20 flex flex-col bg-primary text-white'>
            <section className='mb-10'>
                <h2 className='text-2xl uppercase text-secondary font-bold md:text-left text-center'>NEW DIMENSION</h2>
            </section>

            <section className='sm:flex-row flex-col gap-7 flex justify-between text-center sm:text-left'>
                <section className='flex flex-col gap-4'>
                    
                    <span>
                        <p className='mb-2 text-center sm:text-left text-lg'>Address:</p>
                        monte la vue hotel<br/>
                        60 turaco st, norscot,<br/>
                        fourways &#40;sandton&#41;
                    </span>
                    
                    <span>
                        <p className='mb-2 text-center sm:text-left text-lg'>Contact:</p>
                        +27 &#40;67&#41; 871 3960<br/>
                        info@biblecollege.com
                    </span>
                </section>

                <section className='sm:flex-row flex-col flex sm:gap-20 gap-8 text-center sm:text-left '>
                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Resources</h3>
                        {footer_elements[0].map((item) => (
                            <Link href="#"><li key={Date.now()} className='mb-4'>{item}</li></Link>
                        ))}
                    </ul>

                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Social</h3>
                        {footer_elements[1].map((item) => (
                            <Link href="#"><li key={Date.now()} className='mb-4'>{item}</li></Link>
                        ))}
                    </ul>

                    <ul>
                        <h3 className='mb-5 font-bold uppercase text-xl'>Church</h3>
                        {footer_elements[2].map((item) => (
                            <Link href="#"><li key={Date.now()} className='mb-4'>{item}</li></Link>
                        ))}
                    </ul>
                </section>
            </section>
        </footer>
    )

    return content
}

export default Footer