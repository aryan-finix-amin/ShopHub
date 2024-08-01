import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  return (
    <main className="bg-orange-100 min-h-screen shadow-md">
      <Header />
      <div className="text-xl ml-3">
        <h1 className="font-bold text-4xl text-black text-center mt-5">
          TERMS AND CONDITIONS
        </h1>
        <p className="mt-5">
          Welcome to ShopHub! These Terms and Conditions govern your access to
          and use of the ShopHub website and services. By accessing or using
          ShopHub, you agree to comply with and be bound by these Terms.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">
          Acceptance of Terms
        </h2>
        <p className="mt-2">
          By accessing or using ShopHub, you agree to be bound by these Terms
          and our Privacy Policy, which is incorporated into these Terms by
          reference. If you do not agree with these Terms, please do not use our
          Service.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">
          User Accounts
        </h2>
        <p className="mt-2">
          To access certain features of the Service, you may be required to
          create an account. You agree to provide accurate, complete, and
          current information during the registration process and to update such
          information to keep it accurate, complete, and current. You are
          responsible for maintaining the confidentiality of your account
          information and for all activities that occur under your account.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">
          Changes to Terms
        </h2>
        <p className="mt-2">
          We reserve the right to update or modify these Terms at any time. We
          will notify you of any changes by posting the new Terms on our
          website. Your continued use of the Service after any changes
          constitutes your acceptance of the revised Terms.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">Termination</h2>
        <p className="mt-2">
          ShopHub reserves the right to terminate or suspend user accounts and
          access to the Service at its discretion, including if there is a
          violation of these Terms or any illegal activity associated with the
          account.
        </p>
        <h2 className="font-semibold mt-5 text-black underline">
          Use of Service
        </h2>
        <p className="mt-2">
          You agree to use the Service only for lawful purposes and in
          accordance with these Terms. You further agree not to use the Service
          in any manner that violates any applicable federal, state, local, or
          international laws or regulations, or to engage in any conduct that
          restricts or inhibits the use or enjoyment of the Service by others,
          or which, as determined by us, may harm ShopHub or its users.
        </p>
      </div>
      <Footer />
    </main>
  );
}
