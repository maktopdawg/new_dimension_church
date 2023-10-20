import React from 'react'

const Media = () => {
    const content = (
        <div className='p-5 sm:p-10'>
            <section className='flex items-center justify-center sm:max-w-[80%] m-auto h-[20rem] sm:h-[33rem] w-full rounded-xl '>
                <iframe className='rounded-2xl' width="100%" height="100%" src="https://www.youtube.com/embed/vuvF9WdP05o?si=gopl51d2BjhYKzXe" title="YouTube video player" allowFullScreen={true}></iframe>
            </section>
        </div>
    )

    return content
}

export default Media