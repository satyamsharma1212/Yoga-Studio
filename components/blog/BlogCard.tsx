import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/data/blogs";

type Props = {
  blog: Blog;
};

export default function BlogCard({ blog }: Props) {
  return (
    <article className="overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-lg">
      <Image
        src={blog.image}
        alt={blog.title}
        width={600}
        height={400}
        className="h-60 w-full object-cover"
      />

      <div className="p-6">
        <span className="text-sm text-green-600">
          {blog.category}
        </span>

        <h2 className="mt-2 text-2xl font-bold">
          {blog.title}
        </h2>

        <p className="mt-4 text-gray-600">
          {blog.description}
        </p>

        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{blog.author}</span>
          <span>{blog.date}</span>
        </div>

        <Link
          href={`/blog/${blog.slug}`}
          className="mt-6 inline-block rounded-full bg-green-700 px-6 py-3 text-white hover:bg-green-800"
        >
          Read More →
        </Link>
      </div>
    </article>
  );
}   