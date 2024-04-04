import Image from "next/image";
import Link from "next/link";
import { IoIosCalendar, IoIosTimer } from "react-icons/io";

function PostDetails({ date, min_read }: any) {
  return (
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
  );
}

function PostImageCard({ slug, title, date, image, desc, min_read }: any) {
  return (
    <div className="flex flex-col justify-center gap-6 overflow-hidden md:flex-row items-center">
      <Link href={`/blog/${slug}`}>
        <div className="flex h-[280px] w-full max-w-[500px] items-center justify-center overflow-hidden rounded-3xl bg-slate-100 md:h-[310px] md:flex-1 center">
          <Image src={image} width={1000} height={1000} alt="" className="object-cover w-full h-full"></Image>
        </div>
      </Link>
      <div className="flex flex-col items-start gap-3 md:flex-1 md:justify-between">
        <div className="flex flex-col gap-3 md:gap-4 ">
          <PostDetails date={date} min_read={min_read} />
          <div className="flex flex-col gap-2 md:gap-4">
            <Link href={`/blog/${slug}`}>
              <h3 className="text-2xl font-semibold md:text-3xl hover:text-primary">{title}</h3>
            </Link>
            <h4 className=" text-slate-400 text-lg font-normal leading-7">{desc}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default async function Post({ datas }: any) {
  return (
    <section className="m-auto flex w-full max-w-screen-xl flex-col gap-6 px-6 py-12 md:gap-16 md:px-16 2xl:px-32 2xl:py-16">
      {datas.data.map((data: any) => (
        <div key={data.id}>
          <PostImageCard slug={data.slug} title={data.Title} date={data.date} image={data?.image?.formats?.large?.url || data?.image?.formats?.medium?.url || data?.image?.formats?.small?.url} desc={data.desc} min_read={data.min_read} />
        </div>
      ))}
    </section>
  );
}
