import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from 'react-icons/ai'


interface NavbarProps {
    page: string
}

const Navbar = ({ page }:NavbarProps) => {
    const svg = <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_46_336)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M0 5C0 4.81059 0.079009 4.62895 0.219646 4.49502C0.360282 4.36108 0.551026 4.28584 0.749916 4.28584H9.43845L6.21831 1.22068C6.07749 1.08658 5.99838 0.904705 5.99838 0.715059C5.99838 0.525414 6.07749 0.343536 6.21831 0.209436C6.35912 0.0753365 6.5501 0 6.74925 0C6.94839 0 7.13937 0.0753365 7.28019 0.209436L11.7797 4.49438C11.8495 4.56072 11.9049 4.63952 11.9427 4.72629C11.9805 4.81305 12 4.90606 12 5C12 5.09394 11.9805 5.18695 11.9427 5.27371C11.9049 5.36048 11.8495 5.43928 11.7797 5.50562L7.28019 9.79056C7.13937 9.92466 6.94839 10 6.74925 10C6.5501 10 6.35912 9.92466 6.21831 9.79056C6.07749 9.65646 5.99838 9.47459 5.99838 9.28494C5.99838 9.0953 6.07749 8.91342 6.21831 8.77932L9.43845 5.71416H0.749916C0.551026 5.71416 0.360282 5.63892 0.219646 5.50499C0.079009 5.37106 0 5.18941 0 5Z" fill="white"/>
    </g>
    <defs>
      <clipPath id="clip0_46_336">
        <rect width="12" height="10" fill="white"/>
      </clipPath>
    </defs>
  </svg>

    const nav_elements = [['Home Page', '/admin/home-page'], ['About Page', '/admin/about-page'], ['Events', '/admin/events-page'], ['Visitors', '/admin/visitors-page']]

    const content = (
        <nav className='h-24 flex items-center justify-around'>
            <h1 className='font-bold'>New Dimensions</h1>

            <ul className='hidden md:flex items-center gap-[29px]'>
                {nav_elements.map((item) => (
                    <li key={item[0]} className={`${page === item[0] ? 'text-orange-600' : ''} text-tertiary font-[600]`}><Link href={item[1]}>{item[0]}</Link></li>
                ))}
            </ul>
            
            <section>
                <h1 className='hidden bg-primary md:flex items-center gap-4 py-2 md:text-base text-sm md:py-3 px-3 md:px-7 text-white'>Logout {svg}</h1>
                <Link href='#'><span className='block md:hidden'><AiOutlineMenu size={27} /></span></Link>
            </section>
            
        </nav>
    )

    return content
}

export default Navbar