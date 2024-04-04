import { url } from "inspector";

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

export default async function sitemap() {
  const datas = await getStrapiData();

  const projectEntries = datas.data.map((data: any) => ({
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog/${data.attributes.slug}`,
    lastModified: `${data.attributes.updatedAt}`,
  }));

  return [
    {
      url: `${process.env.NEXT_PUBLIC_BASE_URL}/blog`,
    },
    ...projectEntries,
  ];
}
