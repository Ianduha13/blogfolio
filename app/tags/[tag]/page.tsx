import Link from 'next/link'
import React from 'react'
import { getBlogsByTag, getPosts } from '../../ghost/ghost-client'
import Image from 'next/image'

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    tag: post.primary_tag?.slug,
  }));
}

export default async function page({ params }: { params: { tag: string } }) {
  const blogs = await getBlogsByTag(params.tag)
  return (
    <main className="flex grow flex-col items-center justify-between gap-2 pt-28">
      <section className="relative mx-auto w-[90%] max-w-[1100px]">
        <div className='mb-6 flex items-center justify-between border-b  border-foreground pb-4'>
          <h3 className="text-4xl font-semibold capitalize text-primary">{params.tag} Blogs</h3>
        </div>
        <div className='flex flex-col gap-4'>
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
