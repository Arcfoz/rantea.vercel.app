"use server";

import { flattenAttributes } from "./index";

async function fetchData(url: string) {
  const options = { headers: { Authorization: `Bearer ${process.env.STRAPI_API_TOKEN}` }, next: { revalidate: 5 } };
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const flattenedData = flattenAttributes(data);
    return flattenedData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function getPostsData(currentPage?: number) {
  const pagination = {
    page: currentPage || 1,
    pageSize: 6,
  };

  const queryString = `?populate=*&pagination[page]=${pagination.page}&pagination[pageSize]=${pagination.pageSize}`;

  return await fetchData(`${process.env.NEXT_PUBLIC_API_URL}${queryString}`);
}

export async function getAllPostsData() {
  const queryString = `?populate=*`;

  return await fetchData(`${process.env.NEXT_PUBLIC_API_URL}${queryString}`);
}
