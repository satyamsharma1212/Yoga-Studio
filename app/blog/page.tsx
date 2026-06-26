import type { Metadata } from "next";
import BlogCard from "@/components/blog/BlogCard";
import { blogs } from "@/data/blogs";

export const metadata: Metadata = {
  title: "Yoga Blog | Yoga Studio Agra",
  description:
    "Read expert articles on yoga, meditation, fitness, wellness, and healthy living from Yoga Studio Agra.",
};

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      <section className="max-w-7xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-center">
          Yoga Blog
        </h1>

        <p className="mt-6 text-center text-lg text-gray-600">
          Learn yoga, meditation, fitness, and healthy lifestyle
          from our certified yoga experts.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.slug}
              blog={blog}
            />
          ))}
        </div>
      </section>
    </main>
  );
}