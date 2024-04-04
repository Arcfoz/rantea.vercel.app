import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { MdOutlineFileDownload } from "react-icons/md";

export default function Banner() {
  return (
    <div className="m-auto w-full max-w-screen-2xl gap-1 px-3 lg:px-12 2xl:px-24 ">
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className=" lg:px-20 rounded-2xl bg-[#F8FBFB] dark:bg-[#235059] flex items-center justify-between flex-col lg:flex-row">
            <div className="block text-center mb-5 lg:text-left lg:mb-0 lg:mt-0 mt-10">
              <h2 className="text-4xl font-semibold mb-5 lg:mb-2">Kenali Jenis Teh Hitam Ortodoks</h2>
              <p>yang diproduksi di PTPN VIII #LoveEveryMomentwithRantea ☕</p>
              <Button className="min-[375px]:inline-flex gap-2 mt-2" variant={"outline"}>
                <MdOutlineFileDownload />
                Unduh aplikasi
              </Button>
            </div>
            <div className="w-80 h-full">
              <Image className="object-cover" src={"/banner.png"} alt="" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
