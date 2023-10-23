import Navbar from '@/components/Admin/Navbar'
import NewEventForm from '@/components/Admin/NewEventForm'
import React from 'react'

const page = () => {
    const content = (
        <div>
            <Navbar page='add event' />
            <NewEventForm />
        </div>
    )

    return content
}

export default page