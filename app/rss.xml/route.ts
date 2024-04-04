async function getStrapiData() {
  const options = { headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }, next: { revalidate: 5 } };
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}?populate=*`, options);
    const response = await res.json();
    return response;
  } catch (err) {
    console.error(err);
  }
}

export async function GET() {
  const datas = await getStrapiData();

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0">
        <channel>
            <title>Artikel Rantea</title>
            <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog</link>
            <description>Uji Mutu Daun Teh Melalui Gengaman Anda!</description>
            <language>id</language>
            ${datas.data
              .map(
                (data: any) => `
            <item>
                <title>${data.attributes.Title}</title>
                <link>${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.attributes.slug}</link>
                <enclosure url="${data.attributes.image.data.attributes.formats.thumbnail.url}" type="image/jpeg" />
                <description>${data.attributes.desc}</description>
                <pubDate>${data.attributes.date}</pubDate>
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
