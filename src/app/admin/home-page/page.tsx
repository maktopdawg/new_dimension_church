import HomeForm from '@/components/Admin/HomeForm'
import Navbar from '@/components/Admin/Navbar'
import React from 'react'

const page = () => {
    const content = (
        <div>
            <Navbar page={'Home Page'} />
            <HomeForm />
        </div>
    )

    return content
}

export default page