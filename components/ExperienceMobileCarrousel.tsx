"use client"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import FeaturedBlogsCard from "./FeaturedBlogsCard"
import { useRef } from "react"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { experiences } from "@/constants/experiences"

type Experience = 
  {id: string,
  title:string,
  company: string,
  date: string,
  description: string}

interface Props {
  experience: Experience[]
  }

export default function ExperienceMobileCarrousel() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
     <Carousel
        plugins={[plugin.current]}
        className="relative mt-2 w-full"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {experiences.map((x, index) => (
            <CarouselItem key={x.id} className="md:basis-1/2 lg:basis-1/3">
              <Card className='mx-auto max-w-[340px]  dark:border-none dark:bg-[#242626]'>
                <CardContent className="relative flex aspect-square flex-col items-center p-0">
                  <h3>{x.company}</h3>
                  <h4>{x.title}</h4>
                  <p>{x.description}</p>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bottom-[-64px] left-[unset] right-[48px] top-[unset] z-50" />
        <CarouselNext className="absolute bottom-[-64px] right-0 top-[unset]" />
      </Carousel>

  )
}
