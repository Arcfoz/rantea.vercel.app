"use client";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./dark-toogle";
import { Drawer, DrawerContent, DrawerTrigger } from "./ui/drawer";
import Link from "next/link";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { MdOutlineFileDownload } from "react-icons/md";
import { FiBookOpen, FiInfo, FiPocket } from "react-icons/fi";
import { GoPackage } from "react-icons/go";
import { TbMenuDeep } from "react-icons/tb";
import { usePathname } from "next/navigation";

function RanteaLogo() {
  return (
    <svg viewBox="0 0 250 90" xmlns="http://www.w3.org/2000/svg" className="fill-current text-[#092C2E] dark:text-white lg:w-[120px] w-[80px] sm:w-[100px]">
      <path d="M47.2476 61.0305L49.972 70.0642C48.9205 70.8768 47.5582 71.522 45.8853 72C44.2602 72.478 42.5873 72.717 40.8666 72.717C37.7598 72.717 35.0354 72.0956 32.6933 70.8529C30.3512 69.5623 28.4154 67.6983 26.8859 65.2606L20.7918 55.51C20.0748 54.3628 19.3579 53.5742 18.6409 53.144C17.9718 52.666 17.1831 52.4031 16.275 52.3553V72H4.80362V21.096H21.5087C28.5349 21.096 33.7926 22.506 37.2818 25.326C40.8188 28.1461 42.5873 32.0415 42.5873 37.0124C42.5873 40.9318 41.3685 44.1342 38.9308 46.6197C36.541 49.1051 33.4581 50.7302 29.6821 51.495C31.2594 52.2597 32.6455 53.5264 33.8404 55.2949L36.2781 59.0231C37.8076 61.3173 39.8151 62.4645 42.3005 62.4645C43.2087 62.4645 44.069 62.3689 44.8816 62.1777C45.6941 61.9387 46.4828 61.5563 47.2476 61.0305ZM20.8635 30.6315H16.275V43.25H20.7918C24.3766 43.25 26.9576 42.7481 28.5349 41.7444C30.1122 40.6928 30.9009 39.0677 30.9009 36.869C30.9009 34.6704 30.0167 33.0931 28.2482 32.1371C26.4797 31.1334 24.0181 30.6315 20.8635 30.6315ZM86.7783 35.6502V72H75.7371L76.0956 66.5511C73.4667 70.6617 69.5713 72.717 64.4092 72.717C61.159 72.717 58.3867 71.9761 56.0925 70.4944C53.7982 69.0127 52.0536 66.9574 50.8587 64.3285C49.6637 61.6997 49.0663 58.6885 49.0663 55.2949C49.0663 51.2321 49.9027 47.6712 51.5756 44.6122C53.2485 41.5532 55.495 39.1872 58.315 37.5143C61.1351 35.7936 64.2897 34.9333 67.7789 34.9333C70.0731 34.9333 72.1045 35.4112 73.873 36.3672C75.6415 37.2753 77.0037 38.4942 77.9597 40.0237L78.8917 35.6502H86.7783ZM68.8543 44.4688C66.2255 44.4688 64.1463 45.4486 62.6168 47.4083C61.1351 49.368 60.3942 51.8774 60.3942 54.9364C60.3942 57.5652 60.9678 59.5966 62.1149 61.0305C63.3098 62.4645 64.911 63.1814 66.9185 63.1814C69.3562 63.1814 71.4354 62.1777 73.1561 60.1702C74.9246 58.1627 75.8088 55.5339 75.8088 52.2836C75.8088 49.846 75.1874 47.9341 73.9447 46.548C72.702 45.1619 71.0052 44.4688 68.8543 44.4688ZM95.2501 72V35.5068H106.148L105.646 43.3217C107.128 40.645 109.016 38.5897 111.31 37.1558C113.652 35.6741 116.257 34.9333 119.125 34.9333C123.474 34.9333 126.725 36.415 128.875 39.3784C131.026 42.294 132.078 46.5002 132.03 51.9969L131.887 72H120.917L121.061 52.7855C121.108 50.3001 120.726 48.4121 119.914 47.1215C119.149 45.7832 117.906 45.1141 116.185 45.1141C114.751 45.1141 113.437 45.5442 112.242 46.4046C111.047 47.2171 109.996 48.6272 109.087 50.6346C108.227 52.6421 107.534 55.3905 107.008 58.8797C106.482 62.3689 106.196 66.7423 106.148 72H95.2501ZM156.338 72.717C151.845 72.717 148.285 71.4742 145.656 68.9888C143.027 66.4555 141.736 63.1336 141.784 59.0231L142.071 44.6122H136.048V35.5068H142.214L142.286 28.0505H153.184L153.112 35.5068H164.512V44.6122H152.969L152.754 57.8042C152.754 59.5249 153.208 60.8632 154.116 61.8192C155.024 62.7751 156.386 63.2531 158.202 63.2531C159.254 63.2531 160.258 63.1336 161.214 62.8946C162.217 62.6078 163.245 62.0821 164.297 61.3173L167.451 69.7057C165.014 71.7132 161.309 72.717 156.338 72.717ZM187.882 72.717C183.819 72.717 180.306 71.9761 177.343 70.4944C174.38 68.9649 172.085 66.8379 170.46 64.1135C168.835 61.3412 168.023 58.0671 168.023 54.2911C168.023 50.4674 168.835 47.0976 170.46 44.182C172.133 41.2664 174.356 38.996 177.128 37.3709C179.948 35.7458 183.126 34.9333 186.663 34.9333C190.678 34.9333 193.953 35.8414 196.486 37.6577C199.019 39.474 200.764 42.055 201.72 45.4008C202.723 48.6989 202.938 52.5465 202.365 56.9439H179.207C179.494 58.7602 180.45 60.2897 182.075 61.5324C183.7 62.7273 185.923 63.3248 188.743 63.3248C190.033 63.3248 191.395 63.0619 192.829 62.5362C194.263 61.9626 195.482 61.1261 196.486 60.0268L202.58 66.4794C201.003 68.3913 199.043 69.9208 196.701 71.068C194.407 72.1673 191.467 72.717 187.882 72.717ZM186.879 42.8915C184.967 42.8915 183.342 43.4651 182.003 44.6122C180.713 45.7593 179.852 47.3605 179.422 49.4158H193.116C193.164 47.1693 192.614 45.5203 191.467 44.4688C190.368 43.4173 188.838 42.8915 186.879 42.8915ZM244.943 35.6502V72H233.902L234.26 66.5511C231.632 70.6617 227.736 72.717 222.574 72.717C219.324 72.717 216.552 71.9761 214.257 70.4944C211.963 69.0127 210.218 66.9574 209.024 64.3285C207.829 61.6997 207.231 58.6885 207.231 55.2949C207.231 51.2321 208.068 47.6712 209.741 44.6122C211.413 41.5532 213.66 39.1872 216.48 37.5143C219.3 35.7936 222.455 34.9333 225.944 34.9333C228.238 34.9333 230.269 35.4112 232.038 36.3672C233.806 37.2753 235.169 38.4942 236.125 40.0237L237.057 35.6502H244.943ZM227.019 44.4688C224.39 44.4688 222.311 45.4486 220.782 47.4083C219.3 49.368 218.559 51.8774 218.559 54.9364C218.559 57.5652 219.133 59.5966 220.28 61.0305C221.475 62.4645 223.076 63.1814 225.083 63.1814C227.521 63.1814 229.6 62.1777 231.321 60.1702C233.089 58.1627 233.974 55.5339 233.974 52.2836C233.974 49.846 233.352 47.9341 232.11 46.548C230.867 45.1619 229.17 44.4688 227.019 44.4688Z" />
      <path d="M174.375 32.2712C197.548 33.481 199.744 19.2058 199.016 15.5702C177.217 14.2886 176.243 25.4438 174.375 32.2712Z" fill="#69D19F" />
    </svg>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  return (
    <section className="sticky top-0 z-50 w-full  border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/95">
      <div className="m-auto flex size-full max-w-screen-2xl justify-between items-center px-6 py-3 lg:px-12 2xl:px-24">
        <div className="left-0 gap-16 2xl:flex-1 lg:-ml-0 flex">
          <Link href={"/"}>
            <RanteaLogo />
          </Link>
          <div className="hidden gap-6 my-auto lg:flex ">
            <Link href={"/partner"} className={`${pathname.includes("/partner") ? "underline" : ""}`}>
              Mitra Kami
            </Link>
            <Link href={"/about"} className={`${pathname.includes("/about") ? "underline" : ""}`}>
              Tentang Kami
            </Link>
            <Link href={"/blog"} className={`${pathname.includes("/blog") ? "underline" : ""}`}>
              Artikel
            </Link>
          </div>
        </div>
        <div className="hidden lg:flex justify-end gap-2 2xl:flex-1">
          <ModeToggle />
          <Link href={"/demo"}>
            <Button className="min-[375px]:inline-flex gap-2" variant="outline">
              Demo klasifikasi
            </Button>
          </Link>
          <Link href={"/application"} className={`${pathname.includes("/application") ? "hidden" : ""}`}>
            <Button className="min-[375px]:inline-flex gap-2">
              <MdOutlineFileDownload />
              Unduh aplikasi
            </Button>
          </Link>
        </div>
        <div className="lg:hidden">
          <Drawer direction="right" open={open} onOpenChange={setOpen}>
            <DrawerTrigger>
              <TbMenuDeep className="sm:w-8 h-auto w-6" />
            </DrawerTrigger>
            <DrawerContent>
              <div className="mt-16 mx-8 flex flex-col gap-3">
                <Link href={"/partner"} onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-4">
                    <FiPocket size={16} />
                    <h3 className={`font-medium text-lg ${pathname.includes("/partner") ? "underline" : ""}`}>Mitra Kami</h3>
                  </div>
                </Link>
                <Separator />
                <Link href={"/about"} onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-4">
                    <FiInfo size={16} />
                    <h3 className={`font-medium text-lg ${pathname.includes("/about") ? "underline" : ""}`}>Tentang Kami</h3>
                  </div>
                </Link>
                <Separator />
                <Link href={"/demo"} onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-4">
                    <GoPackage size={16} />
                    <h3 className={`font-medium text-lg ${pathname.includes("/demo") ? "underline" : ""}`}>Demo klasifikasi</h3>
                  </div>
                </Link>
                <Separator />
                <Link href={"/blog"} onClick={() => setOpen(false)}>
                  <div className="flex items-center gap-4">
                    <FiBookOpen size={16} />
                    <h3 className={`font-medium text-lg ${pathname.includes("/blog") ? "underline" : ""}`}>Artikel</h3>
                  </div>
                </Link>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8 gap-4">
                <ModeToggle />
                <Link href={"/application"} onClick={() => setOpen(false)}>
                  <Button className="min-[375px]:inline-flex w-40 gap-2">
                    <MdOutlineFileDownload />
                    Unduh aplikasi
                  </Button>
                </Link>
              </div>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </section>
  );
}
