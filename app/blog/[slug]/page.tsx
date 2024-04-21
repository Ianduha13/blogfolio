import { getPosts, getSinglePost } from '@/app/ghost/ghost-client'
import { ArrowLeftIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { format } from 'date-fns';
import { PostOrPage } from '@tryghost/content-api';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { slug: string }; }): Promise<Metadata> {
  const metaData = await getSinglePost(params.slug) as PostOrPage

  if (!metaData) {
    return {
      title: "404",
      description: "Page not found",
      keywords: ["Next.js", "React", "JavaScript", "Analytics", "Amplitude"],
    }
  }

  return {
    title: metaData.title,
    description: metaData.excerpt,
    keywords: ["Next.js", "React", "JavaScript", "Analytics", "Amplitude"],
    openGraph: {
      title: metaData.title,
      description: metaData.excerpt,
      url: metaData.url,
      type: 'website',
    },
  }
}

export async function generateStaticParams() {
  const posts = await getPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function page({ params }: { params: { slug: string } }) {
  const blog = await getSinglePost(params.slug)

  return (
    <main className="pb-16 pt-8 dark:bg-background lg:pb-24 lg:pt-32">
      <div className="mx-auto flex max-w-screen-xl justify-between px-4 ">
        <article className="prose prose-xl prose-blue mx-auto w-full max-w-3xl  dark:prose-invert sm:prose-base prose-p:text-gray-800 prose-a:no-underline dark:prose-p:text-gray-100">
          <div className="mb-4 flex w-full justify-between">
            <Link className="inline-flex items-center" href={`/`}>
              <ArrowLeftIcon /> Back
            </Link>
            {blog?.primary_tag ? <Link href={`/tags/${blog?.primary_tag.slug}`}>
              # {blog?.primary_tag.name}
            </Link> : ""}
          </div>
          <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 dark:text-white lg:mb-6 lg:text-4xl">
            {blog?.title}
          </h1>
          <header className="mb-4 lg:mb-6">
            <address className="mb-6 flex items-center not-italic">
              <div className="mr-3 inline-flex items-center text-sm text-gray-900 dark:text-white">
                {blog?.primary_author?.profile_image &&
                  <Image width={32} height={32} className="mr-4 size-10 rounded-full" src={blog?.primary_author?.profile_image} alt="author" />
                }
                {
                  blog?.primary_author ? <Link href={`/authors/${blog?.primary_author.slug}`} rel="author" className="text-xl font-bold text-gray-800 dark:text-white">{blog?.primary_author.name}</Link> : " "
                }
                {
                  blog?.published_at ? <time className="mx-1 text-base font-light text-gray-800 dark:text-white" dateTime={blog?.published_at} title={format(new Date(blog?.published_at), 'yyyy-MM-dd')}>
                    {format(new Date(blog?.published_at), 'dd MMMM, yyyy')}
                  </time> : ""
                }
                <div className="mx-1 size-1 rounded-full bg-black text-base dark:bg-white"></div>
                <p className="text-base font-light text-gray-500 dark:text-gray-400"> {blog?.reading_time}  Min Read</p>
              </div>
            </address>
          </header>
          <figure>
            {blog?.feature_image &&
              < Image className="mx-auto" width={1000} height={250} src={blog.feature_image} alt="blog img" />
            }
            {blog?.feature_image_caption &&
              <figcaption className="text-center"
                dangerouslySetInnerHTML={{
                  __html: blog?.feature_image_caption
                }}></figcaption>
            }
          </figure>
          {blog?.html &&
            < div dangerouslySetInnerHTML={{ __html: blog?.html }}></div>
          }
        </article>
      </div >
    </main >
  )
}
