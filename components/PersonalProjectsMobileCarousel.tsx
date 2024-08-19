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
import ProjectCard from "./ProjectCard"

type ProjectCardProps = {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  badges: string[];
};

interface Props {
  projects: ProjectCardProps[]
}

export default function PersonalProjectsMobileCarousel({projects}: Props) {
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
        {projects.map((project, index) => (
          <CarouselItem key={project.title} className="h-full md:basis-1/2 lg:basis-1/3">
            <ProjectCard
              href={project.href}
              imageSrc={project.imageSrc}
              imageAlt={project.imageAlt}
              title={project.title}
              description={project.description}
              badges={project.badges}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="bottom-[-64px] left-[unset] right-[48px] top-[unset] z-50" />
      <CarouselNext className="absolute bottom-[-64px] right-0 top-[unset]" />
    </Carousel>

  )
}