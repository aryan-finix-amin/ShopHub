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
    <div className="min-h-screen bg-gradient-to-br from-orange-100 to-orange-200 text-center flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-5xl font-extrabold mb-12 text-gray-800">ShopHub</h1>
        {user ? (
          <>
            <p className="text-lg mb-6 text-gray-700">
              Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
            </p>
            <button
              className="bg-red-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
            <Link href="/" passHref>
              <button className="text-lg text-blue-600 hover:underline ml-4 mt-6">
                Continue your Shopping
              </button>
            </Link>
          </>
        ) : (
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            onClick={handleSignIn}
          >
            Sign In with GitHub
          </button>
        )}
      </div>
    </div>
  );
};

export default Page;
