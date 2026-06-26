import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";

import { blogs } from "@/data/blogs";
import JsonLd from "@/components/seo/JsonLd";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) return {};

  return {
    title: blog.title,
    description: blog.description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
  };
}

export async function generateStaticParams() {
  return blogs.map((blog) => ({
    slug: blog.slug,
  }));
}

export default async function BlogPage({
  params,
}: Props) {
  const { slug } = await params;

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",

    headline: blog.title,

    description: blog.description,

    image: blog.image,

    author: {
      "@type": "Organization",
      name: blog.author,
    },

    publisher: {
      "@type": "Organization",
      name: "Yoga Studio Agra",
    },

    datePublished: blog.date,
  };

  return (
    <main className="pt-24">

      <JsonLd data={schema} />

      <article className="max-w-4xl mx-auto px-6">

        <p className="text-green-700 font-semibold">
          {blog.category}
        </p>

        <h1 className="mt-4 text-5xl font-bold">
          {blog.title}
        </h1>

        <p className="mt-6 text-gray-600">
          {blog.description}
        </p>

        <div className="mt-10">
          <Image
            src={blog.image}
            alt={blog.title}
            width={1200}
            height={700}
            priority
            className="rounded-3xl"
          />
        </div>

        <div className="mt-12 space-y-8">
          {blog.content.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg leading-9 text-gray-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

      </article>

    </main>
  );
}