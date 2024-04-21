import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { PostOrPage } from '@tryghost/content-api'

export default function FeaturedBlogsCard({ blog }: { blog: PostOrPage }) {

  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className='dark:border-none dark:bg-[#242626]'>
        <CardContent className="relative flex aspect-square flex-col items-center  p-0">
          <span className='absolute left-0 top-0 z-10 rounded-tl-lg bg-background px-2 py-[2px] text-sm text-primary dark:bg-[#242626]'> {blog?.reading_time}  Min Read</span>
          {blog.feature_image && (
            <Image
              src={blog.feature_image}
              alt='Blog Image'
              width={1080}
              height={1080}
              className='top-0 h-1/3 w-full rounded-t-lg object-cover'
            />)}
          <div className='flex flex-col gap-4 px-2 pt-4'>
            <h4 className="text-xl font-medium text-primary">{blog.title}</h4>
            <p className='line-clamp-2 text-sm'>{blog.excerpt}</p>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
