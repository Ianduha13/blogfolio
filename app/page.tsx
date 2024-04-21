import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import Hero from "@/components/Hero";
import { getPosts, getNavigation } from "./ghost/ghost-client";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const Metadata = await getNavigation()
  return {
    title: Metadata.title,
    description: Metadata.description,
    keywords: ['Next.js', 'React', 'JavaScript'],
  }
}
export default async function Home() {
  const blogs = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 pt-24">
      <Hero />
      {blogs?.length !== undefined &&
        <FeaturedCarousel blogs={blogs} />
      }
    </main>
  );
}
