import Image from 'next/image'
import React from 'react'

export default function PortfolioHero() {
  return (
    <section className='flex items-center justify-between'>
      <figure className='h-[500px] overflow-hidden rounded-full bg-primary'>
        <Image
          src='/ianFace.png'
          alt='hero portfolio image'
          width={275}
          height={395}
          className='h-full w-full object-contain'
        />
      </figure>
      <span className='flex h-full w-3/5 flex-col gap-4'>
        <h2 className='text-4xl font-semibold'>Ian Duhamel Hayes</h2>
        <p>Code enthusiast with a knack for explaining complex ideas in simple ways. I love sharing my tech journey and learning from others.</p>
        <button className='w-fit rounded-full border border-primary px-4 py-2 text-primary'>Contact Me</button>
      </span>
    </section>
  )
}
