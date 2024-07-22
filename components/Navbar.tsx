import Link from 'next/link'
import React from 'react'
import ThemeToggleButton from './ThemeToggleButton'
import NavigationMenu from './NavigationMenu'

export default function Navbar() {
  return (
    <div className='fixed top-0 z-10 w-full bg-background shadow-md shadow-foreground/10 dark:bg-[#121212] dark:shadow-black/30'>
      <nav className='mx-auto flex max-w-[1100px] items-center justify-between px-4 py-6 lg:px-0'>
        <Link href='/'>
          <h4 className='text-2xl font-semibold text-primary'>IanDuhamel.tech</h4>
        </Link>
        <div className='absolute left-1/2 -translate-x-1/2'>
          <div className='hidden sm:flex'>
            <NavigationMenu />
          </div>
        </div>
        <ul>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav >
    </div>
  )
}
