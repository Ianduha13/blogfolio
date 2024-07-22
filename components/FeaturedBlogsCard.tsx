import React from 'react'
import { Card, CardContent } from './ui/card'
import Link from 'next/link'
import Image from 'next/image'
import { PostOrPage } from '@tryghost/content-api'
import { format } from 'date-fns'

export default function FeaturedBlogsCard({ blog }: { blog: PostOrPage }) {

  return (
    <Link href={`/blog/${blog.slug}`}>
      <Card className='mx-auto max-w-[340px]  dark:border-none dark:bg-[#242626]'>
        <CardContent className="relative flex aspect-square flex-col items-center p-0">
          <span className='absolute left-0 top-0 z-10 rounded-tl-lg bg-background px-2 py-[2px] text-sm text-primary dark:bg-[#242626]'> {blog?.reading_time}  Min Read</span>
          {blog.feature_image && (
            <Image
              src={blog.feature_image}
              alt='Blog Image'
              width={1080}
              height={1080}
              className='top-0 h-1/3 w-full rounded-t-lg object-cover'
            />)}
          <div className='flex flex-col gap-2 px-2 pt-2'>
            <div className='flex items-center justify-between'>
              {blog.tags !== undefined &&
                < span className='text-sm'>{blog.tags[0].name}</span>
              }
              {
                blog?.published_at ? <time className="mx-1 text-sm font-light text-gray-800 dark:text-white" dateTime={blog?.published_at} title={format(new Date(blog?.published_at), 'yyyy-MM-dd')}>
                  {format(new Date(blog?.published_at), 'dd MMMM, yyyy')}
                </time> : ""
              }
            </div>
            <h4 className="mb-2 text-xl font-medium text-primary">{blog.title}</h4>
            <p className='line-clamp-3 text-sm'>{blog.excerpt}</p>
          </div>
        </CardContent>
      </Card>
    </Link >
  )
}
