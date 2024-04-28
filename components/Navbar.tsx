import Link from 'next/link'
import React from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'
import NavigationMenu from './NavigationMenu'

export default function Navbar() {
  return (
    <div className='fixed top-0 z-10 w-full bg-[#121212] shadow-md shadow-foreground/20 dark:shadow-black/30'>
      <nav className='mx-auto flex max-w-[1100px] items-center justify-between py-6'>
        <Link href='/'>
          <h4 className='text-2xl font-semibold text-primary'>IanDuhamel.tech</h4>
        </Link>
        {/* <div className='absolute left-1/2 -translate-x-1/2'> */}
        <div>
          <NavigationMenu />
        </div>
        {/* <ul>
          <li>
            <ThemeToggleButton />
          </li>
        </ul> */}
      </nav >
    </div>
  )
}
