import Link from 'next/link'
import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import NavigationMenu from './NavigationMenu'
import MobileNavigationSheet from './MobileNavigationSheet'

export default function Navbar() {
  return (
    <div className='fixed top-0 z-[49] w-full bg-background shadow-md shadow-foreground/10 dark:bg-[#121212] dark:shadow-black/30'>
      <nav className='mx-auto flex w-[90%] max-w-[1100px] items-center justify-between  py-6 '>
        <Link href='/'>
          <h4 className='text-2xl font-semibold text-primary'>IanDuhamel.com</h4>
        </Link>
        <div className='absolute left-1/2 hidden -translate-x-1/2 md:flex'>
          <div className=''>
            <NavigationMenu />
          </div>
        </div>
        <ul className='flex items-center gap-2'>
          <li className='hidden md:flex'>
            <ThemeToggleButton />
          </li>
          <li className='md:hidden'>
            <MobileNavigationSheet/>
          </li>
        </ul>
      </nav >
    </div>
  )
}
