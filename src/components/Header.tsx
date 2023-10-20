'use client'
import React from 'react'
import Navbar from './Navbar'
import TimeSlot from './TimeSlot'
import HeaderContent from './HeaderContent'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'

function Header() {
    const [open, setOpen] = useState<boolean>(false)

    const content = (
        <div style={{backgroundImage: `url('/88.png')`}} className="relative flex flex-col justify-between bg-no-repeat bg-cover bg-center bg-fixed min-h-screen w-screen">
            <Navbar open={open} setOpen={setOpen} />
            <HeaderContent />
            <TimeSlot />
            <BurgerMenu open={open} setOpen={setOpen} />
        </div>
    )

    return content
}

export default Header