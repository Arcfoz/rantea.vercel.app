"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { CiCamera } from "react-icons/ci";
import { VscHistory } from "react-icons/vsc";
import dayjs from "dayjs";

export default function Bento() {
  const [today, setToday] = useState(dayjs().format("MMMM D YYYY"));
  const [yesterday, setYesterday] = useState(dayjs().subtract(1, "day").format("MMMM D YYYY"));

  useEffect(() => {
    const interval = setInterval(() => {
      const newDate = dayjs();
      setToday(newDate.format("MMMM D, YYYY"));
      setYesterday(newDate.subtract(1, "day").format("MMMM D, YYYY"));
    }, 60000);

    return () => clearInterval(interval);
  }, []);
  return (
    <section>
      <div id="fitur" className="2xl:pt-24 pt-12">
        <div className="mx-auto px-6 max-w-screen-2xl text-gray-500 2xl:px-24 lg:px-12">
          <div className="relative">
            <div className="relative z-10 grid gap-3 grid-cols-6 ">
              <div className="col-span-full lg:col-span-2 overflow-hidden flex relative p-5 rounded-2xl bg-[#e9f3f3] dark:bg-[#184851] border duration-200 border-transparent hover:border-primary">
                <div className="size-fit m-auto relative">
                  <div className="relative h-24 w-full flex items-center">
                    <svg className="absolute inset-0 size-full text-[#69D19F]" fill="none" viewBox="0 0 254 104" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="w-fit block mx-auto text-5xl font-semibold text-gray-950 dark:text-white">11</span>
                  </div>
                  <h2 className=" mt-6 text-center font-semibold text-gray-950 dark:text-white text-3xl">Class Dataset Bubuk Teh</h2>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-5 rounded-2xl bg-[#e9f3f3] dark:bg-[#184851] border duration-200 border-transparent hover:border-primary">
                <div>
                  <div className="w-fit relative mt-6 sm:mt-auto mx-auto rounded-xl py-6 p-6 border bg-[#f8fbfb] dark:bg-[#e9f3f3]/5 dark:border-white/10">
                    <div className="w-44 h-36 relative">
                      <div className="w-44 h-36 left-0 top-0 absolute bg-white rounded shadow" />
                      <div className="w-40 h-32 left-[15.22px] top-[12.01px] absolute">
                        <div className="w-36 h-4 left-[0.80px] top-[108.14px] absolute">
                          <div className="w-36 h-4 left-0 top-0 absolute bg-cyan-950 rounded" />
                          <div className="w-36 left-[0.14px] top-[3.54px] absolute text-center text-white text-[5px] font-medium leading-3">Submit</div>
                        </div>
                        <div className="w-36 h-7 left-[0.80px] top-[68.09px] absolute">
                          <div className="w-36 h-4 left-0 top-[10.41px] absolute rounded border border-neutral-200" />
                          <div className="w-7 h-1 left-0 top-0 absolute bg-neutral-200 rounded-2xl" />
                        </div>
                        <div className="w-40 h-7 left-0 top-[28.84px] absolute">
                          <div className="w-16 h-7 left-0 top-0 absolute">
                            <div className="w-10 h-1 left-0 top-0 absolute bg-neutral-200 rounded-2xl" />
                            <div className="w-16 h-4 left-0 top-[11.21px] absolute rounded border border-neutral-200" />
                          </div>
                          <div className="w-16 h-7 left-[84.91px] top-0 absolute">
                            <div className="w-16 h-4 left-0 top-[11.21px] absolute rounded border border-neutral-200" />
                            <div className="w-5 h-1 left-0 top-0 absolute bg-neutral-200 rounded-2xl" />
                          </div>
                        </div>
                        <div className="left-0 top-0 absolute text-neutral-800 text-xs font-bold leading-tight">Formulir Uji Mutu</div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-center relative z-10 space-y-2">
                    <h2 className="text-lg font-medium text-gray-950 transition group-hover:text-secondary-950 dark:text-white">Digitalisasi Pencatatan Uji Mutu</h2>
                    <p className="dark:text-gray-300 text-gray-700">Pencatatan uji mutu secara digital untuk bubuk teh hitam ortodoks, memudahkan penguji untuk merekap hasil uji mutu dengan efisien</p>
                  </div>
                </div>
              </div>
              <div className="col-span-full sm:col-span-3 lg:col-span-2 overflow-hidden relative p-5 rounded-2xl bg-[#e9f3f3] dark:bg-[#184851] border duration-200 border-transparent hover:border-primary h-full">
                <div className="pt-10 justify-center items-center">
                  <div>
                    <svg viewBox="0 0 320 100" fill="none" className="h-auto w-full" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                      <defs>
                        <linearGradient id="b">
                          <stop
                            offset="0"
                            style={{
                              stopColor: "#2c9160",
                              stopOpacity: "1",
                            }}
                          />
                          <stop
                            offset="1"
                            style={{
                              stopColor: "#2c9160",
                              stopOpacity: "0",
                            }}
                          />
                        </linearGradient>
                        <linearGradient id="a">
                          <stop
                            offset="0"
                            style={{
                              stopColor: "#69d19f",
                              stopOpacity: "1",
                            }}
                          />
                          <stop
                            offset="1"
                            style={{
                              stopColor: "#69d19f",
                              stopOpacity: "0",
                            }}
                          />
                        </linearGradient>
                        <linearGradient gradientTransform="translate(-33.694 -211.846)" gradientUnits="userSpaceOnUse" id="c" x1="353.895" x2="354.889" xlinkHref="#a" y1="214.895" y2="305.875" />
                        <linearGradient gradientUnits="userSpaceOnUse" id="d" x1="321.194" x2="321.194" xlinkHref="#b" y1="25.934" y2="94.051" />
                      </defs>
                      <path
                        className="s58"
                        d="M.2 68.894c14.2 0 31.9-20.3 53.8-20.3s28.4 22.9 52.5 22.9 30.6-70.5 54-70.5c23.3 0 29.1 35.9 53.2 35.9s29.2-23.3 54-23.3 28.694 35.9 53.494 35.9l-.993 44.535H.2z"
                        style={{
                          fill: "url(#c)",
                          opacity: "1",
                        }}
                      />
                      <path
                        className="s57"
                        d="M321.194 49.487c-24.646 0-29.119 9.739-53.764 9.739-24.646 0-29.715-33.292-53.665-33.292s-29.714 31.9-52.87 31.9c-23.254 0-29.714-17.39-53.664-17.39-23.95 0-30.41 36.968-52.174 36.968S14.112 37.562 0 37.562l.2 56.467h320.994z"
                        style={{
                          fill: "url(#d)",
                          fillOpacity: "1",
                          stroke: "none",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeOpacity: "1",
                          strokeWidth: "1.98758",
                        }}
                      />
                      <path
                        className="s57"
                        d="M.994 68.873c14.112 0 31.243-20.28 53.007-20.28s26.315 19.604 50.048 22.82C129.06 74.8 137.246.993 160.501.993c23.155 0 29.25 35.9 53.2 35.9 23.95 0 29.354-23.3 54-23.3s27.854 35.9 52.5 35.9"
                        style={{
                          fill: "none",
                          stroke: "#69d19f",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeOpacity: "1",
                          strokeWidth: "1.98758",
                        }}
                      />
                      <path
                        className="s57"
                        d="M1.012 37.627c14.112 0 32.28 39.785 54.045 39.785 21.764 0 28.223-36.969 52.174-36.969 23.95 0 30.41 17.392 53.664 17.392 23.156 0 28.92-31.901 52.87-31.901 23.95 0 29.019 33.292 53.665 33.292 24.645 0 27.527-9.74 52.173-9.74"
                        style={{
                          fill: "none",
                          stroke: "#2c9160",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeOpacity: "1",
                          strokeWidth: "1.98758",
                        }}
                      />
                      <path
                        className="s57"
                        d="M.994 68.873c14.112 0 31.243-20.28 53.007-20.28s26.315 19.604 50.048 22.82C129.06 74.8 137.246.993 160.501.993c23.155 0 29.25 35.9 53.2 35.9 23.95 0 29.354-23.3 54-23.3s27.854 35.9 52.5 35.9"
                        style={{
                          fill: "none",
                          stroke: "#69d19f",
                          strokeLinecap: "round",
                          strokeLinejoin: "round",
                          strokeOpacity: "1",
                          strokeWidth: "1.98758",
                        }}
                      />
                    </svg>
                  </div>
                  <div className="mt-7 text-center relative z-10 space-y-2">
                    <h2 className="text-lg font-medium text-gray-950 transition group-hover:text-secondary-950 dark:text-white">Dashboard Laporan Uji Mutu</h2>
                    <p className="dark:text-gray-300 text-gray-700">Dashboard laporan yang memberikan visualisasi data tentang hasil uji mutu, memungkinkan penguji untuk melihat ringkasan dan tren kualitas teh secara cepat</p>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-5 rounded-2xl bg-[#e9f3f3] dark:bg-[#184851] border duration-200 border-transparent hover:border-primary">
                <div className="grid sm:grid-cols-2 h-full ">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6 ">
                    <div className="relative aspect-square rounded-full size-12 flex border  bg-[#f8fbfb] dark:bg-[#e9f3f3]/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-[#e9f3f3]/5 before:rounded-full ">
                      <CiCamera className="size-6 m-auto text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-950 transition group-hover:text-secondary-950 dark:text-white">Klasifikasi Gambar Bubuk Teh</h2>
                      <p className="dark:text-gray-300 text-gray-700">
                        menggunakan teknologi pengolahan citra untuk mengklasifikasikan bubuk teh hitam ortodoks berdasarkan kualitasnya, memungkinkan pengguna untuk mengevaluasi kualitas dengan objektif
                      </p>
                    </div>
                  </div>
                  <div className="w-52 h-60 relative mx-auto sm:my-auto mt-5">
                    <div className="w-40 h-56 left-0 top-0 absolute rounded">
                      <Image className="object-cover rounded-xl" src={"/dust4.png"} fill alt=""></Image>
                    </div>
                    <div className="w-24 h-14 left-[105.69px] top-[191.37px] absolute">
                      <div className="w-24 h-14 left-0 top-0 absolute bg-white rounded" />
                      <div className="w-16 h-10 left-[17.82px] top-[7.82px] absolute">
                        <div className="left-[3.46px] top-0 absolute text-center text-neutral-400 text-[10px] font-normal leading-3">Hasil deteksi:</div>
                        <div className="left-0 top-[11.57px] absolute text-center text-neutral-600 text-lg font-extrabold capitalize">DUST 4</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-full lg:col-span-3 overflow-hidden relative p-5 rounded-2xl bg-[#e9f3f3] dark:bg-[#184851] border duration-200 border-transparent hover:border-primary">
                <div className="h-full grid sm:grid-cols-2">
                  <div className="flex flex-col justify-between relative z-10 space-y-12 lg:space-y-6">
                    <div className="relative aspect-square rounded-full size-12 flex border  bg-[#f8fbfb] dark:bg-[#e9f3f3]/5 dark:border-white/10 before:absolute before:-inset-2 before:border dark:before:border-white/5 dark:before:bg-[#e9f3f3]/5 before:rounded-full">
                      <VscHistory className="size-6 m-auto text-primary" />
                    </div>
                    <div className="space-y-2">
                      <h2 className="text-lg font-medium text-gray-950 transition group-hover:text-secondary-950 dark:text-white">Riwayat Uji Mutu</h2>
                      <p className="dark:text-gray-300 text-gray-700">memungkinkan pengguna untuk melacak perubahan kualitas dari waktu ke waktu, melakukan perbandingan antara batch, dan mengidentifikasi tren kualitas secara efektif</p>
                    </div>
                  </div>
                  <div className="relative mt-6 sm:mt-auto h-fit -mb-10 -mr-10 sm:ml-6 py-6 p-6 border rounded-tl-xl bg-[#f8fbfb] dark:bg-[#e9f3f3]/5 dark:border-white/10">
                    <div className="w-full h-72 flex-col justify-center items-center gap-2.5 inline-flex">
                      <div className="w-full justify-start items-center gap-2.5 inline-flex">
                        <div className="w-60 text-neutral-400 text-xs font-semibold leading-none tracking-tight text-primary">Today, {today}</div>
                        <div className="w-full h-px justify-center items-center flex">
                          <div className="w-full h-px border border-neutral-400 md:mr-3 mr-10"></div>
                        </div>
                      </div>
                      <div className="w-full justify-start items-center gap-3 inline-flex">
                        <div className="w-20 h-20 justify-center items-center flex">
                          <div className="grow shrink basis-0 self-stretch rounded justify-center items-center inline-flex">
                            <div className="w-20 h-20 relative">
                              <div className="w-20 h-20 left-0 top-0 absolute bg-zinc-300">
                                <Image className="object-cover" src={"/bopf3.png"} fill alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="self-stretch text-neutral-400 text-xs font-bold  leading-tight">BOPF 3</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Scoring mutu : 80</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Broken Grade</div>
                        </div>
                        <div className="w-3.5 h-3.5 bg-zinc-300 rounded-full md:mr-3 mr-10" />
                      </div>
                      <div className="w-full justify-start items-center gap-2.5 inline-flex">
                        <div className="w-60 text-neutral-400 text-xs font-semibold leading-none tracking-tight text-primary">Yesterday, {yesterday}</div>
                        <div className="w-full h-px justify-center items-center flex">
                          <div className="w-full h-px border border-neutral-400 md:mr-3 mr-10"></div>
                        </div>
                      </div>
                      <div className="w-full justify-start items-center gap-3.5 inline-flex">
                        <div className="w-20 h-20 justify-center items-center flex">
                          <div className="grow shrink basis-0 self-stretch rounded justify-center items-center inline-flex">
                            <div className="w-20 h-20 relative">
                              <div className="w-20 h-20 left-0 top-0 absolute bg-zinc-300">
                                <Image className="object-cover" src={"/bopf4.png"} fill alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="self-stretch text-neutral-400 text-xs font-bold  leading-tight">BOPF 4</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Scoring mutu : 72</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Broken Grade</div>
                        </div>
                        <div className="w-3.5 h-3.5 bg-zinc-300 rounded-full md:mr-3 mr-10" />
                      </div>
                      <div className="w-full justify-start items-center gap-3.5 inline-flex">
                        <div className="w-20 h-20 justify-center items-center flex">
                          <div className="grow shrink basis-0 self-stretch rounded justify-center items-center inline-flex">
                            <div className="w-20 h-20 relative">
                              <div className="w-20 h-20 left-0 top-0 absolute bg-zinc-300">
                                <Image className="object-cover" src={"/bp4.png"} fill alt="" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="grow shrink basis-0 flex-col justify-start items-start gap-2 inline-flex">
                          <div className="self-stretch text-neutral-400 text-xs font-bold  leading-tight">BP 4</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Scoring mutu : 60</div>
                          <div className="self-stretch text-neutral-400 text-xs font-medium  leading-none tracking-tight">Broken Grade</div>
                        </div>
                        <div className="w-3.5 h-3.5 bg-zinc-300 rounded-full md:mr-3 mr-10" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
