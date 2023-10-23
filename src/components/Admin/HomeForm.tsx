'use client'
import React from 'react'
import { useState } from 'react'

const HomeForm = () => {
    const [open, setOpen] = useState<boolean>(true)

    const svg = <svg width="12" height="12" viewBox="0 0 6 9" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_47_490)">
        <path d="M-5.62003e-08 7.71429L3.75 4.5L-3.37202e-07 1.28571L0.75 -3.27835e-08L6 4.5L0.75 9L-5.62003e-08 7.71429Z" fill="#737373"/>
        </g>
        <defs>
        <clipPath id="clip0_47_490">
            <rect width="9" height="6" fill="white" transform="translate(0 9) rotate(-90)"/>
        </clipPath>
        </defs>
    </svg>

    const svg_2 = <svg width="12" height="12" viewBox="0 0 9 6" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_47_503)">
        <path d="M7.71429 6L4.5 2.25L1.28571 6L-3.27835e-08 5.25L4.5 -2.80136e-07L9 5.25L7.71429 6Z" fill="white"/>
        </g>
        <defs>
        <clipPath id="clip0_47_503">
            <rect width="9" height="6" fill="white" transform="translate(9 6) rotate(180)"/>
        </clipPath>
        </defs>
    </svg>

    const content = (
        <div style={{background: '#fafafa'}} className='p-10'>
            <section style={{maxWidth: '1300px'}} className='m-auto'>
                <div className='h-22 p-5 flex items-center justify-between border'>
                    <h1 className='font-bold'>Hero Section</h1>
                    <span onClick={() => setOpen(true)} className='cursor-pointer border p-3 rounded-full text-lg'>{svg}</span>
                </div>

                {open &&
                <section className='relative border bg-[#F6F6F6] px-5 font-bold py-5 flex flex-col  gap-9'>
                    <h2 className='text-[#D9442C]'>About Us Section</h2>
                    <span onClick={() => setOpen(false)} className='absolute right-0 mr-6 bg-primary p-1 flex items-center justify-center h-[2rem] w-[2rem] rounded-full cursor-pointer'>{svg_2}</span>

                    <div className='flex gap-5 '>
                        <form className='w-full' action="#">
                            <label className='font-[400] mb-4' htmlFor="title">Title</label><br />
                            <input className='mt-5 w-[95%] text-sm h-12 border rounded font-[300] p-3' placeholder='Enter Title' type="text" id='title' />

                            <br /><br />

                            <label className='font-[400] mb-4' htmlFor="content">Content</label><br />
                            <textarea name="content" id="content" placeholder='Your Message' className='mt-5 p-3 text-sm resize-none w-[95%] h-44 border'></textarea>
                        </form>
                    </div>

                    <button className='py-2 px-5 bg-primary text-white w-36'>Update</button>
                </section>
                }

                <div style={{maxWidth: '1300px'}} className='h-22 p-5 flex items-center justify-between m-auto border'>
                    <h1 className='font-bold'>Promotion Video</h1>
                    <span className='cursor-pointer border p-3 rounded-full text-lg'>{svg}</span>
                </div>

                <div style={{maxWidth: '1300px'}} className='h-22 p-5 flex items-center justify-between m-auto border'>
                    <h1 className='font-bold'>Sunday Service Details</h1>
                    <span className='cursor-pointer border p-3 rounded-full text-lg'>{svg}</span>
                </div>

            </section>
        </div>
    )

    return content
}

export default HomeForm