import React from 'react'
import { LinkedInLogoIcon, GitHubLogoIcon, } from '@radix-ui/react-icons'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mx-auto mt-12 flex w-full max-w-[1100px] items-center justify-between py-8'>
      <Link className='text-xl font-semibold ' href="/">IanDuhamel.tech</Link>
      <div className='flex flex-col items-center '>
        <h4 className=' text-lg font-medium'>
          Social media:
        </h4>
        <ul className='flex gap-2'>
          <li>
            <Link href="https://www.linkedin.com/in/ian-duhamel/" target='_blank'>
              <LinkedInLogoIcon className='size-6' />
            </Link>
          </li>
          <li>
            <Link href='https://github.com/Ianduha13' target='_blank'>
              <GitHubLogoIcon className='size-6' />
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  )
}
