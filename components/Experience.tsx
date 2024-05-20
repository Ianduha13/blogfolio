"use client"
import React, { useState } from 'react'

const experience = [
  {
    id: 'hashi',
    title: 'Full Stack Javascript Developer',
    company: 'Hashi',
    date: 'Mar 2023 - Currently',
    description: "At Hashi, a startup specializing in B2B online education, I contributed developing a React Native npm library compatible with both Expo and RN bundlers, and maintaining our primary project, a Next.js white-label platform web app with Supabase for database management. This platform is designed to be easily replicated for each client, providing a reliable learning solution tailored to meet specific client needs.",
  },
  {
    id: 'devink',
    title: 'CTO',
    company: 'Devink',
    date: 'Aug 2023 - Currently',
    description: 'As the CTO of Devink, a developer-centric startup, I guide our technological vision, managing diverse client-driven solutions and our own SaaS products. My role includes overseeing project management, tech strategy, and mentoring our team.'
  },
  {
    id: 'bookster',
    title: 'Freelancer',
    company: 'Bookster',
    date: 'Sept 2023 - Nov 2023',
    description: 'Working as a freelancer at Bookster, I led the integration of Amplitude in React Native for an app targeting book enthusiasts on both Play Store and App Store. This role involved enhancing user engagement through technical skills and behavioral insights.'
  },
  {
    id: 'jethi',
    title: 'Frontend React Developer',
    company: 'Jethi Tech Software',
    date: 'Oct 2022 - Mar 2023',
    description: 'During my internship at Jethi Tech, an international digital marketing firm, I collaborated with startups on digital growth strategies. My responsibilities included using various UI libraries to improve responsive and modern designs.'
  }
]

export default function Experience() {
  const [selectedExperience, setSelectedExperience] = useState('hashi')
  const activeExperience = experience.find(exp => exp.id === selectedExperience)
  return (
    <section className='w-full max-w-[900px]'>
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
