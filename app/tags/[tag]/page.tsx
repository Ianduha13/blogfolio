import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React from 'react'
import { getBlogsByTag, getPosts } from '../../ghost/ghost-client'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    tag: post.primary_tag?.slug,
  }));
}

export default async function page({ params }: { params: { tag: string } }) {
  const blogs = await getBlogsByTag(params.tag)
  return (
    <main className="flex grow flex-col items-center justify-between gap-24 px-2 pt-28">
      <section className="relative mx-auto w-full max-w-[1100px]">
        <div className='mb-6 flex items-center justify-between border-b  border-foreground pb-4'>
          <h3 className="text-4xl font-semibold capitalize text-primary">{params.tag} Blogs</h3>
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
