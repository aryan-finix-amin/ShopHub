import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.jpg";

export default function Header() {
  return (
    <div className="text-2xl bg-amber-300 h-20 w-full m-3 shadow-md">
      <div className="flex items-center ml-5">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
        <h1 className="font-serif">ShopHub</h1>
        <div className="ml-96">
          <Link
            className="ml-72 hover:underline hover:text-blue-700 font-medium font-weight:100"
            href=""
          >
            Home
          </Link>
          <Link
            className="ml-10 hover:underline hover:text-blue-700 font-medium font-weight:100"
            href=""
          >
            Categories
          </Link>
          <Link
            className="ml-10 hover:underline hover:text-blue-700 font-medium font-weight:100"
            href=""
          >
            Trending
          </Link>
          <Link
            className="ml-10 hover:underline hover:text-blue-700 font-medium font-weight:100"
            href=""
          >
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
