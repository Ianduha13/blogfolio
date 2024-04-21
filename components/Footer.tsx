import React from 'react'
import { LinkedInLogoIcon, GitHubLogoIcon, } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mx-auto mt-12 flex w-full max-w-[1100px] items-center justify-between px-4 py-8'>
      <h3 className='text-xl font-semibold '>IanDuhamel.tech</h3>
      <div className='flex flex-col items-center '>
        <h4 className=' text-lg font-medium'>
          Follow me:
        </h4>
        <ul className='flex gap-2'>
          <li>
            <Link href="">
              <LinkedInLogoIcon className='size-6' />
            </Link>
          </li>
          <li>
            <Link href="">
              <GitHubLogoIcon className='size-6' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
