import React from "react";
import Header from "./components/header";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-orange-100">
      <Header />
      <h1 className="font-bold text-5xl absolute top-36 left-10 mt-20 ml-96">
        Upto 50% off on all Men's Wear
        <p className="font-normal text-sm ml-2 mt-1">
          For a limited time, enjoy 50% off on all products across our store.
          <br />
          Don’t miss out on our exclusive discount!
        </p>
        <img
          src="/discount.png"
          height={500}
          width={500}
          className="absolute top-0 right-40"
        ></img>
      </h1>
      <div className="absolute top-96 left-auto">
        <img
          src="/shirt1.webp"
          alt="Logo"
          height={200}
          width={200}
          className="rounded-lg"
        ></img>
      </div>
      <Footer />
    </main>
  );
}
