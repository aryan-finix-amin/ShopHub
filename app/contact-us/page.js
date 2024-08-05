"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    concern: "",
  });
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      concern: "",
    });
    router.push("/");
  };

  return (
    <main className="bg-orange-100 text-black min-h-screen flex items-center justify-center relative">
      <div className="p-6 rounded-lg shadow-lg bg-white w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">CONTACT US</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="firstName">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="lastName">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-200 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-black-700 mb-2" htmlFor="concern">
              Comments
            </label>
            <textarea
              id="concern"
              name="concern"
              value={formData.concern}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:ring focus:ring-orange-200 focus:outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none"
          >
            Submit
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm text-center">
            <p className="mb-4">
              We have received your submission and will respond to you through
              email soon.
            </p>
            <button
              onClick={handleModalClose}
              className="bg-blue-500 text-white py-2 px-4 mt-5 rounded-lg hover:bg-blue-600 focus:outline-none"
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
