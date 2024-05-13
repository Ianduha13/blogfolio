import Experience from '@/components/Experience'
import GetInTouch from '@/components/GetInTouch'
import PortfolioHero from '@/components/PortfolioHero'
import React from 'react'

export default function page() {
  return (
    <main className="mx-auto flex  max-w-[1100px] flex-col items-center justify-between px-2 pt-24">
      <PortfolioHero />
      <Experience />
      <GetInTouch />
    </main>
  )
}
