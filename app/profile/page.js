"use client";
import React from "react";
import { useUserAuth } from "../_utils/auth-context";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg- text-center bg-slate-200">
      <h1 className="text-4xl font-bold mb-12">ShopHub</h1>
      {user ? (
        <>
          <p className="text-lg mb-6">
            Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
          </p>
          <button
            className="bg-black text-white border-none py-2 px-4 rounded cursor-pointer mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <Link href="/" className="text-lg text-black hover:underline ml-4">
            Continue your Shopping
          </Link>
        </>
      ) : (
        <button
          className="bg-black text-white border-none py-2 px-4 rounded cursor-pointer"
          onClick={handleSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;
