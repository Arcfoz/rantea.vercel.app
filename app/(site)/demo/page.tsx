import { SingleImageDropzoneUsage } from "@/components/ui/SingleImageDropzoneUsage";
import React from "react";

export default function page() {
  return (
    <div>
      <section>
        <div className="m-auto max-w-screen-2xl pt-12 lg:px-12 lg:pb-0 lg:text-start 2xl:px-24 2xl:pt-24 lg:w-full">
          <h1 className="text-4xl font-semibold pb-5" style={{ textAlign: "center" }}>
            Demo klasifikasi
          </h1>
          <div className="flex justify-center">
            <SingleImageDropzoneUsage />
          </div>
        </div>
      </section>
    </div>
  );
}
