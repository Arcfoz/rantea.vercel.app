import { BlogsQueryResult } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/fetch";
import { blogsQuery } from "@/sanity/lib/queries";
import { urlForImage } from "@/sanity/lib/utils";

export async function GET() {
  const blogs = await sanityFetch<BlogsQueryResult>({ query: blogsQuery });

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
      <rss version="2.0">
          <channel>
              <title>Artikel Rantea</title>
              <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog</link>
              <description>Uji Mutu Daun Teh Melalui Gengaman Anda!</description>
              <language>id</language>
              ${blogs
                .map(
                  (data: any) => `
              <item>
                  <title>${data.title}</title>
                  <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.slug}</link>
                  <enclosure url="${urlForImage(data.coverImage)?.height(500).width(700).fit("crop").url() as string}" type="image/jpeg" />
                  <description>${data.excerpt}</description>
                  <pubDate>${data.date}</pubDate>
              </item>
              `
                )
                .join("")}
          </channel>
      </rss>`;

  return new Response(feed, {
    status: 200,
    headers: { "Content-Type": "application/rss+xml" },
  });
}
