import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
    <main className='mx-auto flex h-[60vh] max-w-[1100px] justify-between'>
      <section className='flex h-full w-[55%] flex-col justify-center gap-6'>
        <span className='w-fit rounded-full border border-foreground px-4 py-2'>Development</span>
        <h1 className='text-4xl font-semibold'>Welcome to my personal Code Documentation Library</h1>
        <p className='text-lg text-primary'>Peer into the engine room of innovation as I share insights from my meticulously organized code documentation collection.</p>
        <Link href='/' className=' flex items-center gap-2 text-xl font-semibold'>
          <ArrowRightIcon className='h-6 w-6' />Learn More
        </Link>
      </section>
      <Image
        src={'/heroImg.png'}
        alt='Hero Image'
        width={684}
        height={684}
        className='h-full w-[45%] object-contain'
      />
    </main>
  )
}
