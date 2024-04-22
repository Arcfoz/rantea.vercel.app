import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import { MdOutlineFileDownload } from "react-icons/md";

export default function page() {
  return (
    <section className="ezy__cta7 light py-14 md:py-24 text-gray-950 dark:text-white">
      <div className="container px-4">
        <div className="bg-[#e9f3f3] dark:bg-[#184851] rounded-3xl overflow-hidden md:py-6">
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-8 lg:col-start-3 lg:px-12">
              <div className="py-12 px-6 sm:px-12 text-center">
                <h2 className="text-2xl md:text-[40px] leading-none font-bold mb-6">Rantea Mobile Application (Android)</h2>
                <div>
                  <Link href="https://drive.usercontent.google.com/download?id=18oK3jlTtGFzxFmJTGlVjPM4mThWwSXD0&export=download">
                    <Button className="text-primary-foreground border px-14 py-3 rounded bg-primary hover:bg-opacity-90 transition gap-2">
                      <MdOutlineFileDownload />
                      Unduh aplikasi
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
