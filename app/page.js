import React from "react";
import Image from "next/image";
import Logo from "../public/logo.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-orange-100">
      <div className="text-2xl font-bold bg-amber-300 h-20 w-full m-3 shadow-md">
        <div className="flex items-center ml-5">
          <Image
            src={Logo}
            alt="Logo"
            height={40}
            width={40}
            className="m-5 rounded-lg"
          />
          <h1 className="">ShopHub</h1>
        </div>
      </div>
    </main>
  );
}
