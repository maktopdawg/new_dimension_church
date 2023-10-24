"use client"

import HomeForm from '@/components/Admin/HomeForm'
import Navbar from '@/components/Admin/Navbar'
import AppLayout from '@/components/AppLayout'
import React from 'react'

const page = () => {
    const content = (
        <div>
            <Navbar page={'Home Page'} />
            <HomeForm />
        </div>
    )

    return <AppLayout>{content}</AppLayout>
}

export default page