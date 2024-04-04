import Post from "@/components/Post";

import { getPostsData } from "../data/loader";
import PaginationButton from "./PaginationButton";
import { notFound } from "next/navigation";
import { Metadata } from "next";

interface SearchParams {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export const metadata: Metadata = {
  title: "Artikel",
  description: "Artikel mengenai daun teh, temukan artikel menarik dan bermanfaat mengenai daun teh.",
  twitter: { card: "summary_large_image" },
};

export default async function page({ searchParams }: Readonly<SearchParams>) {
  const currentPage = Number(searchParams?.page) || 1;
  const cardData = await getPostsData(currentPage);
  if (cardData.data == "") {
    notFound();
  }
  return (
    <section className="m-auto max-w-screen-2xl lg:px-12 lg:pb-0 lg:text-start 2xl:px-24 2xl:pt-24 pt-12 lg:w-full">
      <div style={{ textAlign: "center" }} className="mx-10">
        <h1 className="text-3xl font-bold mb-2">Artikel mengenai daun teh</h1>
        <h2 className=" text-xl text-slate-500 dark:text-gray-400">Temukan artikel menarik dan bermanfaat mengenai daun teh.</h2>
      </div>
      <Post datas={cardData} />
      <PaginationButton pageCount={cardData.meta.pagination.pageCount} />
    </section>
  );
}
