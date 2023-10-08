import React from 'react'
import Image from 'next/image'
import PlayButton from '@/assets/Play Button.svg'

const Media = () => {
    const content = (
        <div className='p-10'>
            <section className='flex items-center justify-center singing-member h-[30rem] sm:h-[45rem] w-full rounded-xl '>
                <Image
                    src={PlayButton}
                    alt='play_button'
                    className='cursor-pointer'
                />
            </section>
        </div>
    )

    return content
}

export default Media