import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-between bg-orange-100">
      <Header />
      <h1 className="font-bold text-6xl absolute top-36 left-10 mt-40 ml-36">
        Upto 50% off on <br />
        all Men's Wear
        <p className="font-normal text-sm ml-2 mt-1">
          For a limited time, enjoy 50% off on all products across our store.
          <br />
          Don’t miss out on our exclusive discount!
        </p>
      </h1>
      <img
        src="/discount.png"
        height={550}
        width={550}
        className="absolute top-28 right-40"
      ></img>
      <div className="flex flex-row mt-96 mr-auto ml-40">
        <div className="relative group">
          <img
            src="/Mens.jpg"
            height={200}
            width={200}
            className="mt-80 rounded-lg hover-effect"
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-80">
            <p className="text-white text-lg">Men's Wear</p>
          </div>
        </div>
        <div className="ml-44 mt-80">
          <div className="relative group">
            <img
              src="/kids.avif"
              height={435}
              width={435}
              className="rounded-lg hover-effect"
            ></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg">Kid's Wear</p>
            </div>
          </div>
        </div>
        <div className="absolute inset-y-auto right-40">
          <div className="relative group">
            <img
              src="/Womens.jpg"
              height={200}
              width={200}
              className="ml-96 mt-80 rounded-lg hover-effect"
            ></img>
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-96">
              <p className="text-white text-lg">Women's Wear</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
