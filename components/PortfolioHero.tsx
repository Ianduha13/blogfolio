import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function PortfolioHero() {
  return (
    <section className='flex h-[30vh] items-center justify-center gap-20'>
      <figure className='h-[200px] overflow-hidden rounded-full bg-primary'>
        <Image
          src='/ianFace.png'
          alt='hero portfolio image'
          width={275}
          height={395}
          className='h-[200px] w-full object-contain'
        />
      </figure>
      <span className='flex w-3/5 flex-col gap-4'>
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
      </span>
    </section>
  )
}
