import { BlogsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { format } from "date-fns";
import { id } from "date-fns/locale";
import { urlForImage } from "@/sanity/lib/utils";

export async function GET() {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  if (!blogs) {
    return new Response("Data not found", { status: 404 });
  }

  const responseData = blogs.map((data: any) => {
    const formattedDate = format(new Date(data.date), "d MMMM yyyy", {
      locale: id,
    });

    return {
      id: data._id,
      title: data.title,
      link: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.slug}`,
      imageUrl: `${urlForImage(data.coverImage)?.height(500).width(700).fit("crop").url() as string}`,
      desc: data.excerpt,
      pubDate: formattedDate,
    };
  });

  return new Response(JSON.stringify(responseData), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
