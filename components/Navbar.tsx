import Link from 'next/link'
import React from 'react'
import { ThemeToggleButton } from './ThemeToggleButton'

export default function Navbar() {
  return (
    <div className='fixed top-0 w-full bg-background px-4 shadow-md shadow-foreground/20'>
      <nav className='mx-auto flex max-w-[1440px] items-center justify-between py-6'>
        <Link href='/'>
          <h4 className='text-2xl font-semibold text-primary'>IanDuhamel.tech</h4>
        </Link>

        <ul className='flex gap-4'>
          <li>
            <Link href='/home' className=''>Home
            </Link>
          </li>
          <li>
            <Link href='/blog' className=''>Blog
            </Link>
          </li>
          <li>
            <Link href='/portfolio' className=''>Portfolio
            </Link>
          </li >
          <li>
            <Link href='/blog' className=''>Contact
            </Link>
          </li >
        </ul >

        <ul>
          <li>
            <ThemeToggleButton />
          </li>
        </ul>
      </nav >
    </div>
  )
}
