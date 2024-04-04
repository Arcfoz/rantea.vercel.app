import React from "react";

export default function NotFound() {
  return (
    <div className="grid h-full place-content-center px-4 mt-8">
      <div className="text-center">
        <h1 className="text-9xl font-black text-gray-200">404</h1>
        <p className="text-2xl font-bold tracking-tight sm:text-4xl">Uh-oh!</p>
        <p className="mt-4 text-gray-500">Halaman tidak tersedia</p>
      </div>
    </div>
  );
}
