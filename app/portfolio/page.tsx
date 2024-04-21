import Experience from '@/components/Experience'
import PortfolioHero from '@/components/PortfolioHero'
import React from 'react'

export default function page() {
  return (
    <main className="mx-auto flex min-h-screen max-w-[1100px] flex-col items-center justify-between px-2 pt-24">
      <PortfolioHero />
      <Experience />
    </main>
  )
}
