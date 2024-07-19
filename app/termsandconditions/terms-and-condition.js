import React from "react";
import Footer from "./components/footer";

export default function TermsAndCondition() {
  return (
    <div className="text-2xl bg-amber-300 h-full w-full p-4 shadow-md">
      <h1>Terms and Conditions</h1>
      <p>
        Welcome to ShopHub! These Terms and Conditions govern your access to and
        use of the ShopHub website and services. By accessing or using ShopHub,
        you agree to comply with and be bound by these Terms.
      </p>
      <ol>
        <li>
          Acceptance of Terms
          <p>
            By accessing or using ShopHub, you agree to be bound by these Terms
            and our Privacy Policy, which is incorporated into these Terms by
            reference. If you do not agree with these Terms, please do not use
            our Service.
          </p>
        </li>
        <li>
          Changes to Terms
          <p>
            We reserve the right to update or modify these Terms at any time. We
            will notify you of any changes by posting the new Terms on our
            website. Your continued use of the Service after any changes
            constitutes your acceptance of the revised Terms.
          </p>
        </li>
        <li>
          User Accounts
          <p>
            To access certain features of the Service, you may be required to
            create an account. You agree to provide accurate, complete, and
            current information during the registration process and to update
            such information to keep it accurate, complete, and current. You are
            responsible for maintaining the confidentiality of your account
            information and for all activities that occur under your account.
          </p>
        </li>
        <li>
          Use of Service
          <p>
            You agree to use the Service only for lawful purposes and in
            accordance with these Terms. You further agree not to use the
            Service in any manner that violates any applicable federal, state,
            local, or international laws or regulations, or to engage in any
            conduct that restricts or inhibits the use or enjoyment of the
            Service by others, or which, as determined by us, may harm ShopHub
            or its users.
          </p>
        </li>
        <li>
          Termination
          <p>
            ShopHub reserves the right to terminate or suspend user accounts and
            access to the Service at its discretion, including if there is a
            violation of these Terms or any illegal activity associated with the
            account.
          </p>
        </li>
      </ol>
      <Footer />
    </div>
  );
}
