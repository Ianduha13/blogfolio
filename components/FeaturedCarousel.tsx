"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Post } from "@/types/Blogs"
import FeaturedBlogsCard from "./FeaturedBlogsCard"

export function FeaturedCarousel({ blogs }: { blogs: Post[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="relative mx-auto w-full max-w-[1100px]">
      <h3 className="text-4xl font-semibold text-primary">Featured Blogs</h3>
      <Carousel
        plugins={[plugin.current]}
        className="relative mt-2"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {blogs.map((blog, index) => (
            <CarouselItem key={blog.id} className="md:basis-1/2 lg:basis-1/3">
              <FeaturedBlogsCard blog={blog} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bottom-[-64px] left-[unset] right-[48px] top-[unset] z-50" />
        <CarouselNext className="absolute bottom-[-64px] right-0 top-[unset]" />
      </Carousel>
    </section>
  )
}