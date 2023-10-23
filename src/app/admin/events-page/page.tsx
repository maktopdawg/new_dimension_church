import Events from '@/components/Admin/Events'
import Navbar from '@/components/Admin/Navbar'
import React from 'react'

const page = () => {
    const content = (
        <div>
            <Navbar page={'Events'} />
            <Events />
        </div>
    )

    return content
}

export default page