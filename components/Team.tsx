import Image from "next/image";
import React from "react";

export default function Team() {
  return (
    <section className="py-8 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
          <div className="flex flex-wrap justify-center gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            <div className="group flex flex-col items-center ">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/01.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-72">Dr. Gelar Budiman, S.T., M.T.</h4>
              <span className="text-gray-500 text-center block transition-all duration-500">Dosen Pembimbing 1</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/02.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-72">Prof. Dr. Indrarini Dyah Irawati, S. T., M. T.</h4>
              <span className="text-gray-500 text-center block transition-all duration-500">Dosen Pembimbing 2</span>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-xl mx-auto md:max-w-3xl lg:max-w-full">
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/1.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-52">Endika Satrio Wibowo</h4>
              <span className="text-gray-500 text-center block transition-all duration-500">Team Lead</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/2.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-52">Ikram Tauffiqul Hakim</h4>
              <span className="text-gray-500 text-center block transition-all duration-500 max-w-52">Web & Machine Learning Engineer</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/3.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-52"> Muhammad Reyhan Fajar Nasution</h4>
              <span className="text-gray-500 text-center block transition-all duration-500 max-w-52">Android Developer</span>
            </div>
            <div className="group flex flex-col items-center">
              <div className="relative mb-6">
                <Image alt="" width={500} height={500} className="w-28 h-full lg:w-40 lg:h-full mx-auto transition-all duration-500 object-cover border border-solid border-transparent" src="/pic/4.png" />
              </div>
              <h4 className="text-lg lg:text-xl font-semibold mb-2 capitalize text-center transition-all duration-500 max-w-52">Muhammad Fikri Pratama</h4>
              <span className="text-gray-500 text-center block transition-all duration-500">Cloud Engineer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
