import Image from 'next/image'
import React from 'react'
import Logo from '@/assets/new dimension (logo) 1.svg'

function page() {
    const content = (
        <main className='bg-primary h-screen flex items-center justify-center p-6'>
            <div className='border py-5 px-4 sm:px-8 sm:w-[25rem] bg-white rounded-lg flex flex-col justify-center items-center gap-3'>
                <section className='flex gap-2 items-center mb-3'>
                    <Image
                        src={Logo}
                        width={100}
                        height={100}
                        alt="new-dimension-logo"
                        className='w-[45px] h-[45px]'
                    />

                    <h2 className='uppercase font-[900] flex flex-col'>
                        <span>New Dimension</span>
                        <span className='font-[500] mt-[-5px]'>Church</span>
                    </h2>
                </section>

                <h2 className='uppercase font-[700] mb-4 sm:mb-8'>New Dimension Admin</h2>
                
                <form action="#" className='w-full'>
                    <label htmlFor="email" className='text-sm'>Email</label><br />
                    <input type="text" placeholder='Email' id='email' className='border w-full h-12 mt-2 rounded mb-5 p-3 text-sm' /><br />

                    <label htmlFor="password" className='text-sm'>Password</label><br />
                    <input type="password" placeholder='Password' id='password' className='border w-full h-12 mt-2 rounded p-3 text-sm' />
                </form>
            </div>
        </main>
    )

    return content
}

export default page