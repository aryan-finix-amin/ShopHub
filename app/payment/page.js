"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
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
      router.push("/");
    }
  };

  return (
    <main className="min-h-screen bg-orange-100">
      <Header />
      <div className="bg-white p-10 rounded-lg shadow-md mt-10 mx-10">
        <h2 className="text-2xl font-semibold mb-4">Payment Information</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700">Card Number</label>
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              required
              maxLength="16"
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.cardNumber && (
              <p className="text-red-500 text-sm">{errors.cardNumber}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">Expiration Date</label>
            <input
              type="text"
              name="expirationDate"
              value={formData.expirationDate}
              onChange={handleChange}
              required
              placeholder="MM/YY"
              maxLength="5"
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.expirationDate && (
              <p className="text-red-500 text-sm">{errors.expirationDate}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-700">CVV</label>
            <input
              type="text"
              name="cvv"
              value={formData.cvv}
              onChange={handleChange}
              required
              maxLength="4"
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
          </div>
          <div>
            <label className="block text-gray-700">Cardholder Name</label>
            <input
              type="text"
              name="cardholderName"
              value={formData.cardholderName}
              onChange={handleChange}
              required
              className="w-full mt-1 p-2 border rounded"
            />
            {errors.cardholderName && (
              <p className="text-red-500 text-sm">{errors.cardholderName}</p>
            )}
          </div>
          <div className="text-right">
            <button
              type="submit"
              className="px-4 py-2 bg-green-500 text-white mt-5 rounded"
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
