import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { getPosts } from '../ghost/ghost-client'

export default async function page() {
  const blogs = await getPosts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24 px-2 pt-28">
      <section className="relative mx-auto w-full max-w-[1100px]">
        <div className='mb-6 flex items-center justify-between border-b  border-foreground pb-4'>
          <h3 className="text-4xl font-semibold text-primary">Blogs</h3>
        </div>
        <div className='flex flex-col gap-4'>
          {blogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className='flex gap-4'>
              <div className='w-1/3'>
                {blog?.feature_image && (
                  <img src={blog.feature_image} alt='Blog Image' className='h-48 w-full rounded-lg object-cover' />
                )}
              </div>
              <div className='w-2/3'>
                <h4 className='text-xl font-medium text-primary'>{blog.title}</h4>
                <p className='line-clamp-3'>{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

      </section>

    </main>
  )
}
