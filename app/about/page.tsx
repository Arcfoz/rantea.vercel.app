import Team from "@/components/Team";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Tentang",
  description: "Rantea adalah proyek desain capstone yang dilakukan oleh mahasiswa S1 Teknik Telekomunikasi dari Universitas Telkom",
  twitter: { card: "summary_large_image" },
};

export default function page() {
  return (
    <section>
      <div className="m-auto max-w-screen-2xl pt-12 lg:px-12 lg:pb-0 lg:text-start 2xl:px-24 2xl:pt-24 lg:w-full">
        <h1 className="text-4xl font-semibold pb-5" style={{ textAlign: "center" }}>
          Team Rantea
        </h1>
        <h2 className="text-lg text-center mx-10 md:mx-40 md:text-xl text-slate-500 dark:text-gray-400">
          Rantea adalah proyek desain capstone yang dilakukan oleh mahasiswa S1 Teknik Telekomunikasi dari Universitas Telkom, yang bertujuan untuk mengembangkan teknologi yang memfasilitasi akses informasi bagi masyarakat dan penguji mutu
          terkait kualitas bubuk teh yang diproduksi di PTPN VIII.
        </h2>

        <Team />
      </div>
    </section>
  );
}
