"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FaUser,
  FaEnvelope,
  FaAddressCard,
  FaCity,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";
import withAuth from "../authentication/page";

function YourCartPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    router.push("/payment");
  };

  const formFields = [
    { label: "Name", name: "name", type: "text", icon: <FaUser /> },
    { label: "Email", name: "email", type: "email", icon: <FaEnvelope /> },
    {
      label: "Address",
      name: "address",
      type: "text",
      icon: <FaAddressCard />,
    },
    { label: "City", name: "city", type: "text", icon: <FaCity /> },
    { label: "State", name: "state", type: "text", icon: <FaMapMarkerAlt /> },
    { label: "Zip Code", name: "zip", type: "text" },
    { label: "Phone Number", name: "phone", type: "text", icon: <FaPhone /> },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-200">
      <Header />
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg mt-10 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Shipping Details
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {formFields.map(({ label, name, type, icon }) => (
            <div key={name} className="relative">
              <label className="block text-gray-700 font-medium mb-1">
                {label}
              </label>
              <div className="relative flex items-center">
                {icon && (
                  <span className="absolute left-3 text-gray-400">{icon}</span>
                )}
                <input
                  type={type}
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required
                  className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded focus:ring focus:ring-orange-200 focus:outline-none"
                />
              </div>
            </div>
          ))}
          <div className="text-right">
            <button
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default withAuth(YourCartPage);
