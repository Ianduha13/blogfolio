"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavigationMenu() {
  const pathname = usePathname()
  return (
    <ul className='flex gap-4'>
      <li>
        <Link href='/' className={`${pathname === '/' && "text-primary"} text-lg font-medium`}>Home </Link>
      </li>
      <li>
        <Link href='/' className={`${pathname.indexOf("/blog") > -1 && "text-primary"} text-lg font-medium`}>Blog </Link>
      </li>
      <li>
        <Link href='/portfolio' className={`${pathname === '/portfolio' && "text-primary"} text-lg font-medium`}>Portfolio </Link>
      </li >
    </ul >
  )
}
