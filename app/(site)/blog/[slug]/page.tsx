import { IoIosCalendar, IoIosTimer } from "react-icons/io";
import { Metadata, ResolvingMetadata } from "next";
import Image from "next/image";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { notFound } from "next/navigation";

import { groq, type PortableTextBlock } from "next-sanity";
import { sanityFetch } from "@/sanity/lib/fetch";

import PortableText from "./portable-text";

type Props = {
  params: { slug: string };
};

import { resolveOpenGraphImage, urlForImage } from "@/sanity/lib/utils";

import type { PostQueryResult, PostSlugsResult } from "@/sanity.types";

import * as demo from "@/sanity/lib/demo";

import { postQuery } from "@/sanity/lib/queries";

const postSlugs = groq`*[_type == "post"]{slug}`;

export async function generateStaticParams() {
  const params = await sanityFetch<PostSlugsResult>({
    query: postSlugs,
    perspective: "published",
    stega: false,
  });
  return params.map(({ slug }) => ({ slug: slug?.current }));
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors: post?.author?.name ? [{ name: post?.author?.name }] : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function page({ params }: Props) {
  const post = await sanityFetch<PostQueryResult>({
    query: postQuery,
    params,
  });

  if (!post?._id) {
    return notFound();
  }

  const formattedDate = format(new Date(post.date), "d MMMM yyyy", { locale: id });

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-6 lg:px-16 2xl:pt-24 py-10">
      <div className="flow-root">
        <div className="flex flex-1 flex-col justify-between items-center">
          <div className="inline-flex items-center justify-start gap-2">
            <span className="text-xs leading-none text-slate-700 dark:text-slate-400 flex gap-1">
              <div className="flex items-center gap-2">
                <Image className="rounded-full aspect-square" src={urlForImage(post.author?.picture)?.fit("crop").url() as string} height={18} width={18} alt="author" />
                {post.author?.name}
              </div>
            </span>
            <span className="size-1 rounded-full bg-primary" />
            <span className="text-xs leading-none text-slate-700 dark:text-slate-400 flex gap-1">
              <IoIosCalendar />
              {formattedDate}
            </span>
          </div>
        </div>
        <h1 className="text-4xl font-bold lg:text-6xl lg:leading-tight text-center mt-5">{post.title || demo.title} </h1>
        <h2 className="mb-5 mt-3 text-slate-400 text-center tracking-wide mx-5 text-sm md:mx-20 md:text-base">{post.excerpt}</h2>
        <div className="text-left">
          <Image className="rounded-xl border-zinc-800 mx-auto" width={1000} height={1000} src={urlForImage(post.coverImage)?.url() as string} alt="" />
        </div>
        <div className="mt-8 max-w-2xl mx-auto tracking-wide">
          {/* <BlockRendererClient content={post.content} /> */}
          {post.content?.length && <PortableText value={post.content as PortableTextBlock[]} />}
        </div>
      </div>
    </main>
  );
}
