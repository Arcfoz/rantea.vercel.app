import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { IoIosGlobe } from "react-icons/io";

export const metadata: Metadata = {
  title: "Mitra",
  description: "PT Perkebunan Nusantara VIII merupakan perkebunan teh terbesar dan terluas di Indonesia",
};

export default function page() {
  return (
    <>
      <section className="py-14 lg:py-24 relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative ">
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-9 ">
            <div className="lg:pr-24 flex items-center">
              <div className="data w-full">
                <h2 className="font-bold text-4xl lg:text-5xl mb-9 max-lg:text-center">PT. Perkebunan Nusantara VIII</h2>
                <p className="text-xl leading-8 text-slate-500 dark:text-gray-400 max-lg:text-center max-w-2xl mx-auto mb-9">
                  PT Perkebunan Nusantara VIII merupakan perkebunan teh terbesar dan terluas di Indonesia. PT Perkebunan Nusantara VIII telah mengekspor teh ke seluruh dunia dan 10 negara tujuan terbesar kami adalah Malaysia, Belanda,
                  Jepang, Amerika, Inggris, Polandia, Uni Emirat Arab, Rusia, Jerman, Pakistan, dan lainnya.
                </p>
                <div className="max-lg:text-center max-w-2xl mx-auto mb-9">
                  <Link href={"https://www.ptpn8.co.id/"} target="_blank">
                    <Button className="gap-2" variant={"outline"}>
                      <IoIosGlobe />
                      <h1>Informasi selengkapnya</h1>
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
            <div>
              <Image alt="" className="hidden lg:block object-cover rounded-xl" src="/ptpn_bg.png" width={1000} height={1000} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
