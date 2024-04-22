import React from "react";
import Herosection from "@/components/Herosection";
import Bento from "@/components/Bento";
import { Metadata } from "next";

export const metadata: Metadata = {
  description: "Uji Mutu Daun Teh Melalui Gengaman Anda, deteksi kualitas uji mutu bubuk teh hitam ortodoks, di manapun dan kapan pun!",
  twitter: { card: "summary_large_image" },
};

export default async function page() {
  return (
    <>
      <Herosection />
      <Bento />
    </>
  );
}
