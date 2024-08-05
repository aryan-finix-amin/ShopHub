import React from "react";
import Link from "next/link";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-orange-100">
      <Header />
      <h1 className="font-bold text-6xl absolute top-36 left-10 mt-28 ml-36">
        Upto 50% off on <br />
        all Men&apos;s Wear
        <p className="font-normal text-sm ml-2 mt-1">
          For a limited time, enjoy 50% off on all products across our store.
          <br />
          Don&apos;t miss out on our exclusive discount!
        </p>
      </h1>
      <img
        src="/discount.png"
        height={550}
        width={550}
        className="absolute top-16 right-40"
      ></img>
      <div className="flex flex-row mt-64 mr-auto ml-40">
        <div className="relative group">
          <Link href="/mens">
            <img
              src="/Mens.jpg"
              height={200}
              width={200}
              className="mt-80 rounded-lg hover-effect"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-80">
              <p className="text-white text-lg">Men&apos;s Wear</p>
            </div>
          </Link>
        </div>
        <div className="ml-60 mt-80">
          <div className="relative group">
            <Link href="/kids">
              <img
                src="/Kids.webp"
                height={340}
                width={340}
                className="rounded-lg hover-effect"
              ></img>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">Kid&apos;s Wear</p>
              </div>
            </Link>
          </div>
        </div>
        <div className="absolute inset-y-auto right-40">
          <div className="relative group">
            <Link href="/womens">
              <img
                src="/Womens.jpg"
                height={200}
                width={200}
                className="mt-80 rounded-lg hover-effect"
              ></img>
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg">Women&apos;s Wear</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
