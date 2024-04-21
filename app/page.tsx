import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { getBlogs } from "./ghost/studyCasesBlogs";
import Hero from "@/components/Hero";

export default async function Home() {
  const blogs = await getBlogs();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-2 pt-24">
      <Hero />
      {blogs?.length !== undefined &&
        <FeaturedCarousel blogs={blogs} />
      }
    </main>
  );
}
