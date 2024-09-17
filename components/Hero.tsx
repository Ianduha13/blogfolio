import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import Meteors from './magicui/meteors'

export default function Hero() {
  return (
    <main className='relative mx-auto flex h-[40vh] min-h-[300px] w-full max-w-[1100px] items-center'>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 overflow-hidden rounded-lg border bg-background px-4 py-4 md:shadow-xl">
        <Meteors number={40} />
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black  to-gray-500/80 bg-clip-text text-center text-2xl font-semibold leading-none text-transparent dark:from-white dark:to-slate-300/90 sm:text-4xl">
          Welcome to my personal Code Documentation Library
        </span>

        <p className='max-w-[800px] text-center text-primary sm:text-lg'>
          Dive into my personal collection of coding insights, where I break down complex ideas and share best practices for modern development.
        </p>
        <Link href='/portfolio' className=' flex items-center gap-2 text-xl font-semibold'>
          <ArrowRightIcon className='h-6 w-6' />More About Me
        </Link>
      </div>
    </main>
  )
}