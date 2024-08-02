"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FaCreditCard, FaCalendarAlt, FaLock, FaUser } from "react-icons/fa";
import Header from "../components/header";
import Footer from "../components/footer";

export default function PaymentPage() {
  const [formData, setFormData] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    cardholderName: "",
  });
  const [errors, setErrors] = useState({});

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    const cardNumberRegex = /^\d{16}$/;
    const expirationDateRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    const cvvRegex = /^\d{3,4}$/;

    if (!cardNumberRegex.test(formData.cardNumber)) {
      errors.cardNumber = "Card number must be 16 digits.";
    }
    if (!expirationDateRegex.test(formData.expirationDate)) {
      errors.expirationDate = "Expiration date must be in MM/YY format.";
    }
    if (!cvvRegex.test(formData.cvv)) {
      errors.cvv = "CVV must be 3 or 4 digits.";
    }
    if (formData.cardholderName.trim() === "") {
      errors.cardholderName = "Cardholder name is required.";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Payment data submitted:", formData);
      router.push("/order-confirmation");
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-r from-orange-100 to-orange-200">
      <Header />
      <div className="bg-white p-8 md:p-16 rounded-lg shadow-lg mt-10 mx-auto max-w-2xl">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Payment Information
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Card Number
            </label>
            <div className="relative flex items-center">
              <FaCreditCard className="absolute left-3 text-gray-400" />
              <input
                type="text"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                required
                maxLength="16"
                className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded focus:ring focus:ring-orange-200 focus:outline-none"
              />
            </div>
            {errors.cardNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Expiration Date
            </label>
            <div className="relative flex items-center">
              <FaCalendarAlt className="absolute left-3 text-gray-400" />
              <input
                type="text"
                name="expirationDate"
                value={formData.expirationDate}
                onChange={handleChange}
                required
                placeholder="MM/YY"
                maxLength="5"
                className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded focus:ring focus:ring-orange-200 focus:outline-none"
              />
            </div>
            {errors.expirationDate && (
              <p className="text-red-500 text-sm mt-1">
                {errors.expirationDate}
              </p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">CVV</label>
            <div className="relative flex items-center">
              <FaLock className="absolute left-3 text-gray-400" />
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                required
                maxLength="4"
                className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded focus:ring focus:ring-orange-200 focus:outline-none"
              />
            </div>
            {errors.cvv && (
              <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
            )}
          </div>
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1">
              Cardholder Name
            </label>
            <div className="relative flex items-center">
              <FaUser className="absolute left-3 text-gray-400" />
              <input
                type="text"
                name="cardholderName"
                value={formData.cardholderName}
                onChange={handleChange}
                required
                className="w-full mt-1 p-3 pl-10 border border-gray-300 rounded focus:ring focus:ring-orange-200 focus:outline-none"
              />
            </div>
            {errors.cardholderName && (
              <p className="text-red-500 text-sm mt-1">
                {errors.cardholderName}
              </p>
            )}
          </div>
          <div className="text-right">
            <button 
              onClick={handleSubmit}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-lg shadow-lg hover:from-orange-600 hover:to-orange-700 transition duration-300"
            >
              Submit Payment
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </main>
  );
}