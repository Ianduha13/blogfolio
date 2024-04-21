import { getGhostBlogsBySlug } from '@/app/ghost/blogBySlug'
import React from 'react'

export default async function page({ params }: { params: { blogSlug: string } }) {
  const [blog] = await getGhostBlogsBySlug(params.blogSlug)

  console.log(blog)
  return (
    <div className='px-2 pt-24'>{blog.title}</div>
  )
}
