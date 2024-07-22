import { ArrowRightIcon } from '@radix-ui/react-icons'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { getPosts } from '../ghost/ghost-client'

export default async function page() {
  const blogs = await getPosts()
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-16  pt-24">
      <section className="relative mx-auto w-[90%] max-w-[1100px] ">
        <div className='mb-6 flex items-center justify-between border-b  border-foreground pb-4'>
          <h3 className="text-4xl font-semibold text-primary">Blogs</h3>
        </div>
        <div className='flex flex-col gap-8 sm:gap-4'>
          {blogs.map((blog, index) => (
            <Link href={`/blog/${blog.slug}`} key={blog.id} className='flex flex-col gap-2 sm:flex-row sm:gap-4'>
              <div className='sm:w-1/3'>
                {blog?.feature_image && (
                  <Image height={1024} width={1024} src={blog.feature_image} alt='Blog Image' className='w-full rounded-lg object-contain sm:h-32 sm:object-cover' />
                )}
              </div>
              <div className='sm:w-2/3'>
                <h4 className='text-lg font-medium text-primary sm:text-xl'>{blog.title}</h4>
                <p className='line-clamp-3'>{blog.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>

      </section>

    </main>
  )
}
