import { type BlocksContent } from "@strapi/blocks-react-renderer";
import BlockRendererClient from "@/components/BlockRendererClient";
import { IoIosCalendar, IoIosTimer } from "react-icons/io";
import { Metadata } from "next";
import Image from "next/image";

export async function generateStaticParams({ params }: any) {
  const blog = await getStrapiData(params.blog);
  return blog.data.map(({ attributes }: any) => attributes.slug);
}

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const blog = await getStrapiData(params.blog);
  const title = blog.data[0].attributes.Title;
  const desc = blog.data[0].attributes.desc;
  const image = blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.large?.url || blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.medium?.url || blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.small?.url;

  return {
    title: title,
    description: desc,
    openGraph: {
      images: [{ url: image }],
    },
  };
}

async function getStrapiData(slug: string) {
  const options = { headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }, next: { revalidate: 5 } };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?filters[slug][$eq]=${slug}&populate=*`, options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export default async function page({ params }: any) {
  const blog = await getStrapiData(params.blog);
  const date = blog.data[0].attributes.date;
  const title = blog.data[0].attributes.Title;
  const image = blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.large?.url || blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.medium?.url || blog?.data[0]?.attributes?.image?.data?.attributes?.formats?.small?.url;
  const desc = blog.data[0].attributes.desc;
  const content: BlocksContent = blog.data[0].attributes.content;
  const min_read = blog.data[0].attributes.min_read;

  return (
    <main className="mx-auto min-h-screen max-w-6xl px-8 lg:px-16 2xl:pt-24 py-10">
      <div className="flow-root">
        <div className="flex flex-1 flex-col justify-between gap-y-2 md:flex-row md:items-center">
          <p className="inline-flex items-center justify-start gap-2">
            <span className="text-xs leading-none text-slate-400 flex gap-1">
              <IoIosCalendar />
              {date}
            </span>
            <span className="size-1 rounded-full bg-primary" />
            <span className="text-xs leading-none text-slate-400 flex gap-1">
              <IoIosTimer />
              {min_read} menit
            </span>
          </p>
        </div>
        <h1 className="text-4xl font-bold lg:text-6xl lg:leading-tight mb-5 ">{title}</h1>
        <div className="text-left">
          <Image className="rounded-xl border-zinc-800 mx-auto" width={1000} height={1000} src={image} alt="" />
        </div>
        <h2 className="mt-4 ">{desc}</h2>

        <BlockRendererClient content={content} />
      </div>
    </main>
  );
}
