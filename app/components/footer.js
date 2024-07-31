import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "@/public/logo.jpg";
import Instagram from "@/public/instagram.png";
import Facebook from "@/public/facebook.png";
import LinkedIn from "@/public/linkedin.svg";

export default function Footer() {
  return (
    <div className="text-2xl h-20 w-full bg-amber-300 mt-10 shadow-md">
      <div className="flex items-center ml-5">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
        <h1 className="font-serif">ShopHub</h1>
        <Link href="https://www.instagram.com" passHref>
          <Image
            src={Instagram}
            alt="Instagram"
            height={25}
            width={25}
            className="ml-48 rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <Link href="https://www.facebook.com" passHref>
          <Image
            src={Facebook}
            alt="Facebook"
            height={25}
            width={25}
            className="ml-2 rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <Link href="https://www.linkedin.com" passHref>
          <Image
            src={LinkedIn}
            alt="LinkedIn"
            height={25}
            width={25}
            className="ml-2 rounded-lg hover:scale-110 transition-transform duration-300"
          />
        </Link>
        <Link
          className="ml-40 text-base hover:underline hover:text-blue-700"
          href="./terms-condition"
        >
          Terms and Conditions
        </Link>
        <Link
          className="ml-10 text-base hover:underline hover:text-blue-700"
          href="./contact-us"
        >
          Contact Us
        </Link>
        <Link
          className="ml-10 text-base hover:underline hover:text-blue-700"
          href="./about-us"
        >
          About Us
        </Link>
        <p className="text-sm ml-48">
          &copy; 2024 ShopHub. All right reserved.
        </p>
      </div>
    </div>
  );
}
