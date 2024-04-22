import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { IoIosCalendar, IoIosTimer } from "react-icons/io";

import { urlForImage } from "@/sanity/lib/utils";
import Avatar from "./avatar";

function PostDetails({ date, author, authorName, authorPic }: any) {
  const formattedDate = format(new Date(date), "d MMMM yyyy", { locale: id });
  return (
    <div className="inline-flex items-center justify-start gap-2">
      <span className="text-xs leading-none text-slate-700 dark:text-slate-400 flex gap-1">
        {author && (
          <div className="flex items-center gap-2">
            <Image className="rounded-full aspect-square" src={urlForImage(authorPic)?.fit("crop").url() as string} height={18} width={18} alt="author" />
            {authorName}
          </div>
        )}
      </span>
      <span className="size-1 rounded-full bg-primary" />
      <span className="text-xs leading-none text-slate-700 dark:text-slate-400 flex gap-1">
        <IoIosCalendar />
        {formattedDate}
      </span>
    </div>
  );
}

async function PostImageCard({ slug, title, date, image, desc, author, authorName, authorPic }: any) {
  return (
    <div className="flex flex-col justify-center gap-6 overflow-hidden md:flex-row items-center">
      <div className="flex items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[266px] md:w-[400px] border-spacing-2 border">
        <Link href={`/blog/${slug}`}>
          <Image src={urlForImage(image)?.fit("crop").url() as string} width={500} height={500} alt="" className="object-cover w-full h-full" style={{ objectFit: "cover" }} />
        </Link>
      </div>
      <div className="flex flex-col items-start gap-3 md:flex-1 md:justify-between">
        <div className="flex flex-col gap-3 md:gap-4 ">
          <PostDetails date={date} author={author} authorName={authorName} authorPic={authorPic} />
          <div className="flex flex-col gap-2 md:gap-4">
            <Link href={`/blog/${slug}`}>
              <h3 className="text-2xl font-semibold md:text-3xl hover:text-primary">{title}</h3>
            </Link>
            <h4 className=" text-slate-700 dark:text-slate-400 text-lg font-normal line-clamp-3">{desc}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Post({ datas }: any) {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-col gap-6 px-6 py-12 md:gap-16 md:px-16 2xl:px-32 2xl:py-16">
      {datas.map((data: any) => (
        <div key={data._id}>
          <PostImageCard slug={data.slug} title={data.title} date={data.date} image={data.coverImage} desc={data.excerpt} min_read={data.min_read} author={data.author} authorName={data.author.name} authorPic={data.author.picture} />
        </div>
      ))}
    </section>
  );
}
