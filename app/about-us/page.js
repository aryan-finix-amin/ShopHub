import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-orange-100">
      <Header />
      <div className="text-xl ml-3">
        <h1 className="text-4xl font-bold text-black text-center mt-5">
          About Us
        </h1>
        <h2 className="text-4xl font-bold text-black text-center mt-3">
          Welcome to ShopHub!
        </h2>
        <p className="mt-3">
          At ShopHub, we believe that shopping should be a delightful and
          seamless experience. Our mission is to create a one-stop platform
          where you can find everything you need, from daily essentials to
          unique finds, all in one place. ShopHub was founded with the vision of
          simplifying the online shopping experience. We noticed that people
          often have to visit multiple websites to find the products they need,
          leading to a fragmented and time-consuming process. We set out to
          change that by creating a hub where all your shopping needs are met
          with ease and efficiency.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">
          What We Offer
        </h2>
        <p className="mt-2">
          ShopHub offers a wide range of products, including fashion,
          electronics, home goods, and groceries, with a carefully curated
          catalog to provide access to the best products on the market. Your
          security is our priority; we use the latest encryption technologies to
          protect your personal and payment information, ensuring a safe and
          secure shopping experience. Additionally, our robust logistics network
          guarantees fast and reliable delivery, ensuring your orders arrive
          promptly and in perfect condition.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">Our Team</h2>
        <p className="mt-2">
          Our team is made up of passionate individuals who are dedicated to
          making your shopping experience as smooth and enjoyable as possible.
          From our customer service representatives to our tech developers,
          every member of the ShopHub family plays a vital role in our success.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">Join Us</h2>
        <p className="mt-2">
          We are always looking to improve and grow. If you have any suggestions
          or feedback, we'd love to hear from you. Join us on our journey to
          revolutionize the way you shop and experience the convenience and joy
          of ShopHub.
        </p>
        <h2 className="text-4xl font-bold text-black text-center mt-7">
          Thank you for choosing ShopHub!
        </h2>
      </div>
      <Footer />
    </main>
  );
}
