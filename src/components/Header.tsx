import React from 'react'
import Navbar from './Navbar'
import TimeSlot from './TimeSlot'
import HeaderContent from './HeaderContent'

function Header() {
    const content = (
        <div className='relative flex flex-col justify-between praying-members min-h-screen w-screen'>
            <Navbar />
            <HeaderContent />
            <TimeSlot />
        </div>
    )

    return content
}

export default Header