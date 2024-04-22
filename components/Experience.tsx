"use client"
import React, { useState } from 'react'

const experience = [
  {
    id: 'hashi',
    title: 'Software Engineer',
    company: 'Hashi',
    date: '2021 - Present',
    description: 'I am currently working as a software engineer at Hashi. I am responsible for building and maintaining the front-end of the company\'s web applications. I am also responsible for working with the back-end team to ensure that the front-end and back-end are in sync. I am also responsible for working with the design team to ensure that the front-end is visually appealing and user-friendly. I am also responsible for working with the QA team to ensure that the front-end is bug-free and performs well.'
  },
  {
    id: 'devink',
    title: 'Software Engineer',
    company: 'Devink',
    date: '2019 - 2021',
    description: 'I worked as a software engineer at Devink. I was responsible for building and maintaining the front-end of the company\'s web applications. I was also responsible for working with the back-end team to ensure that the front-end and back-end were in sync. I was also responsible for working with the design team to ensure that the front-end was visually appealing and user-friendly. I was also responsible for working with the QA team to ensure that the front-end was bug-free and performed well.'
  },
  {
    id: 'bookster',
    title: 'Software Engineer',
    company: 'Bookster',
    date: '2017 - 2019',
    description: 'I worked as a software engineer at Bookster. I was responsible for building and maintaining the front-end of the company\'s web applications. I was also responsible for working with the back-end team to ensure that the front-end and back-end were in sync. I was also responsible for working with the design team to ensure that the front-end was visually appealing and user-friendly. I was also responsible for working with the QA team to ensure that the front-end was bug-free and performed well.'
  },
  {
    id: 'jethi',
    title: 'Software Engineer',
    company: 'Jethi Tech',
    date: '2015 - 2017',
    description: 'I worked as a software engineer at Jethi Tech. I was responsible for building and maintaining the front-end of the company\'s web applications. I was also responsible for working with the back-end team to ensure that the front-end and back-end were in sync. I was also responsible for working with the design team to ensure that the front-end was visually appealing and user-friendly. I was also responsible for working with the QA team to ensure that the front-end was bug-free and performed well.'
  }
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('hashi')
  const activeExperience = experience.find(exp => exp.id === selectedExperience)
  return (
    <section className='w-full'>
      <h3 className='mb-4 text-3xl text-primary'>Experience</h3>
      <div className='flex items-center'>
        <ul className=''>
          <li className={`border-l-4 ${selectedExperience === 'hashi' ? "border-primary" : "border-primary/20"} w-[120px] py-3 pl-4 text-xl`}>
            <button onClick={() => setSelectedExperience('hashi')}>
              Hashi
            </button>
          </li>
          <li className={`border-l-4 ${selectedExperience === 'devink' ? "border-primary" : "border-primary/20"} w-[120px] py-3 pl-4 text-xl`}>
            <button onClick={() => setSelectedExperience('devink')}>
              Devink
            </button>
          </li>
          <li className={`border-l-4 ${selectedExperience === 'bookster' ? "border-primary" : "border-primary/20"} w-[120px] py-3 pl-4 text-xl`}>
            <button onClick={() => setSelectedExperience('bookster')}>
              Bookster
            </button>
          </li>
          <li className={`border-l-4 ${selectedExperience === 'jethi' ? "border-primary" : "border-primary/20"} w-[120px] py-3 pl-4 text-xl`}>
            <button onClick={() => setSelectedExperience('jethi')}>
              Jethi Tech
            </button>
          </li>
        </ul>
        <div className='ml-8'>
          {activeExperience !== undefined &&
            <>
              < h4 className='text-xl font-semibold'>{activeExperience.title}</h4>
              <p className='text-gray-500'>{activeExperience.company}</p>
              <p className='text-gray-500'>{activeExperience.date}</p>
              <p className='text-gray-500'>{activeExperience.description}</p>
            </>
          }
        </div>
      </div>
    </section >
  )
}
