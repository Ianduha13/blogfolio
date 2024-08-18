import React from 'react'
import { experiences } from '@/constants/experiences'
import Link from 'next/link'
import { ArrowRightIcon } from 'lucide-react'

export default function Experience() {
  return (
    <section className='w-full max-w-[900px]'>
      <h3 className='mb-4 text-3xl text-primary'>Experience</h3>
      <ol className="relative border-s border-primary">
        {experiences.map(exp => (
          <li key={exp.id} className="mb-6 ms-4">
            <div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-primary bg-primary"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{exp.date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{exp.title} - {exp.company}</h3>
            <p className="mb-2 text-base font-normal text-gray-500 dark:text-gray-400">{exp.description}</p>
            <Link href={exp.site} target='_blank'  className='flex w-fit gap-1 rounded-md border border-primary px-2 py-1 text-primary'>
            Know More <ArrowRightIcon/>
            </Link>
            
          </li>
        ))}
      </ol>
    </section>
  )
}
