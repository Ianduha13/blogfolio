
import Link from 'next/link'
import React from 'react'

export default function GetInTouch() {
  return (
    <section className='my-8 mb-12 flex flex-col items-center gap-4'>
      <h3 className='text-2xl text-primary'>Get in Touch</h3>
      <p className='max-w-[600px] text-center' >If you have some project in mind or just want to chat, feel free to reach out to me. I&apos;m always open to new opportunities and collaborations.  </p>
      <div className='flex gap-4'>
        <Link

          href={"https://calendly.com/ian-duhamel/30min"}
          target='_blank'
          className='cursor-pointer rounded-full border border-primary px-4 py-2 text-primary'>
          Schedule a Call
        </Link>
        <a className='cursor-pointer rounded-full border border-white px-4 py-2 text-white' href={'/Ian Duhamel CV.pdf'} download>Download CV</a>
      </div>
    </section>
  )
}
