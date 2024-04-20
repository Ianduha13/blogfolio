import { FeaturedCarousel } from "@/components/FeaturedCarousel";
import { getBlogs } from "./ghost/studyCasesBlogs";

export default async function Home() {
  const blogs = await getBlogs();
  console.log(blogs)
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <FeaturedCarousel />
    </main>
  );
}
