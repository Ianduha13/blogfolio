"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import FeaturedBlogsCard from "./FeaturedBlogsCard"
import { PostsOrPages } from "@tryghost/content-api"

export function FeaturedCarousel({ blogs }: { blogs: PostsOrPages }) {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )

  return (
    <section className="relative mx-auto w-full max-w-[1100px]">
      <h3 className="mb-6 border-b border-foreground pb-4 text-4xl font-semibold text-primary">Featured Blogs</h3>
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