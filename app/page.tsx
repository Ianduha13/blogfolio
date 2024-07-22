import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import { getPosts, getNavigation, getFeaturedBlogs } from "./ghost/ghost-client";
import { Metadata } from "next";
import BlogsList from "@/components/BlogsList";

export async function generateMetadata(): Promise<Metadata> {
  const Metadata = await getNavigation()
  return {
    title: Metadata.title,
    description: Metadata.description,
    keywords: ['Next.js', 'React', 'JavaScript'],
  }
}
export default async function Home() {
  const featuredBlogs = await getFeaturedBlogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-24 px-4 pt-32 sm:px-8 sm:pt-28">
      <Hero />
      {featuredBlogs?.length !== undefined &&
        <FeaturedCarousel blogs={featuredBlogs} />
      }
      <BlogsList />
    </main>
  );
}
