import Post from "@/components/Post";

import PaginationButton from "./PaginationButton";
import { Metadata } from "next";

interface SearchParams {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

import { SettingsQueryResult, type BlogsQueryResult } from "@/sanity.types";

import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery, settingsQuery } from "@/sanity/lib/queries";

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel mengenai daun teh, temukan artikel menarik dan bermanfaat mengenai daun teh.",
  twitter: { card: "summary_large_image" },
};

export default async function page() {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const blogHead = await sanityFetch<SettingsQueryResult>({ query: settingsQuery });

  const totalCount = blogs.length;


  return (
    <section className="m-auto max-w-screen-2xl lg:px-12 lg:pb-0 lg:text-start 2xl:px-24 2xl:pt-24 pt-12 lg:w-full">
      <div key={blogHead?._id} style={{ textAlign: "center" }} className="mx-10">
        <h1 className="text-3xl font-bold mb-2">{blogHead?.title}</h1>
        <h2 className=" text-xl text-slate-500 dark:text-gray-400">{blogHead?.description}</h2>
      </div>
      <Post datas={blogs} />
      {/* <PaginationButton blogs={blogs} /> */}
    </section>
  );
}
