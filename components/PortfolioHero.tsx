import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PortfolioHero() {
  return (
    <section className='flex items-center justify-center gap-8 md:h-[300px] md:gap-20'>
      <figure className='hidden h-32 overflow-hidden rounded-full bg-primary sm:flex md:h-[200px]'>
        <Image
          src='/ianFace.png'
          alt='hero portfolio image'
          width={275}
          height={395}
          className='h-32 w-full object-contain md:h-[200px]'
        />
      </figure>
      <div className='flex flex-col gap-4 sm:w-4/5 md:w-3/5'>
        <h2 className='text-4xl font-semibold'>Ian Duhamel Hayes</h2>
        <p>  Enthusiastic developer with over 2 years of experience in various tech roles.
          Passionate about simplifying complex ideas and sharing my tech journey.
          I enjoy building innovative tools and solutions, and I&apos;m always eager to learn from others.
        </p>
        <Link className='w-fit rounded-full border border-primary px-4 py-2 text-primary'
          href={"https://calendly.com/ian-duhamel/30min"}
          target='_blank'
        >
          Contact Me
        </Link>
      </div>
    </section>
  )
}
