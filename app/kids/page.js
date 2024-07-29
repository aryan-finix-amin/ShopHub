"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const initialItems = [
    {
      src: "/kids1.png",
      title: "Printed Tank Top",
      price: "$6.99",
      description:
        "Tank top in soft cotton jersey with a printed design. Round, ribbed neck and a straight-cut hem.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids2.png",
      title: "Superstretch Slim Fit Jeans",
      price: "$14.99",
      description:
        "Slim-fit jeans in washed, superstretch denim for added freedom of movement. Adjustable, elasticized waistband, mock fly with button, front pockets, and back pockets.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids3.png",
      title: "Motif-detail T-shirt and Short",
      price: "$39.99",
      description:
        "Loose-fit, knee-length cargo shorts in washed denim with a generous but not oversized silhouette. Elasticized, drawstring waistband, mock fly, side pockets, and leg pockets with flap.Loose-fit T-shirt in soft cotton jersey with a motif at front. Ribbed neck and dropped shoulders.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids4.png",
      title: "3-Pack Cotton Joggers",
      price: "$39.99",
      description:
        "Joggers in cotton twill. Elasticized, drawstring waistband, mock fly, and diagonal side pockets. Straight legs with pleats at knees and elasticized hems.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids5.png",
      title: "Printed T-Shirt",
      price: "$14.99",
      description:
        "Loose-fit T-shirt in soft cotton jersey with a printed motif. Ribbed neck and dropped shoulders.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids6.png",
      title: "Rugby Shirt",
      price: "$12.99",
      description:
        "Rugby shirt in lightweight sweatshirt fabric. Collar, button placket, dropped shoulders, and long sleeves. Ribbing at cuffs and hem.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids7.png",
      title: "Twill Joggers",
      price: "$12.99",
      description:
        "Joggers in cotton twill. Elasticized, drawstring waistband, mock fly, and diagonal side pockets. Straight legs with pleats at knees and elasticized hems.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids8.png",
      title: "2-pack Polo Shirts",
      price: "$19.99",
      description:
        "Polo shirts in cotton piqué with an embroidered detail on chest. Ribbed collar, button placket, and short sleeves with ribbed cuffs.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids9.png",
      title: "Printed Jersey Shorts",
      price: "$17.99",
      description:
        "Disney x Keith Haring. Loose-fit T-shirt in soft cotton jersey with a printed pattern. Ribbed crew neck and dropped shoulders.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/kids10.png",
      title: "Printed T-Shirt",
      price: "$14.99",
      description:
        "Loose-fit T-shirt in soft cotton jersey with a printed motif. Ribbed neck and dropped shoulders.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  const openModal = (item) => {
    setSelectedItem(item);
    setSelectedSize(item.sizes[0]);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItem(null);
    setSelectedSize("");
  };

  const updateQuantity = (index, delta) => {
    const updatedItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: Math.max(1, item.quantity + delta) };
      }
      return item;
    });
    setItems(updatedItems);
  };

  const openSizeChart = () => {
    setSizeChartOpen(true);
  };

  const closeSizeChart = () => {
    setSizeChartOpen(false);
  };

  const addToCart = () => {
    // Add to cart functionality can be implemented here
    alert("Item added to cart!");
    closeModal();
  };

  return (
    <main className="min-h-screen bg-orange-100">
      <Header />
      <div className="content-container p-10">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="box-container p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                onClick={() => openModal(item)}
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg mx-auto"
                  style={{ maxWidth: "100%", height: "auto" }}
                />
                <div className="text-container text-center mt-4">
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-gray-600">{item.price}</p>
                  <div
                    className="quantity-control flex items-center justify-center mt-2"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <button
                      className="px-2 py-1 border border-gray-300"
                      onClick={() => updateQuantity(index, -1)}
                    >
                      -
                    </button>
                    <span className="px-4">{item.quantity}</span>
                    <button
                      className="px-2 py-1 border border-gray-300"
                      onClick={() => updateQuantity(index, 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {modalOpen && selectedItem && (
        <div className="modal-background fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="modal bg-white p-8 rounded-lg shadow-lg">
            <div className="modal-content">
              <span
                className="close cursor-pointer text-gray-600"
                onClick={closeModal}
              >
                &times;
              </span>
              <img
                src={selectedItem.src}
                alt="Selected"
                className="modal-image mx-auto my-4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p className="modal-title text-xl font-semibold">
                {selectedItem.title}
              </p>
              <p className="modal-price text-gray-600">{selectedItem.price}</p>
              <p className="modal-description my-4">
                {selectedItem.description}
              </p>
              <div className="quantity-control-modal flex items-center justify-center mt-4">
                <button
                  className="px-2 py-1 border border-gray-300"
                  onClick={() =>
                    updateQuantity(items.indexOf(selectedItem), -1)
                  }
                >
                  -
                </button>
                <span className="px-4">{selectedItem.quantity}</span>
                <button
                  className="px-2 py-1 border border-gray-300"
                  onClick={() => updateQuantity(items.indexOf(selectedItem), 1)}
                >
                  +
                </button>
              </div>
              <div className="size-selector mt-4 text-center">
                <label>Select Size:</label>
                <div className="size-boxes flex justify-center mt-2">
                  {selectedItem.sizes.map((size, idx) => (
                    <div
                      key={idx}
                      className={`size-box cursor-pointer border rounded px-4 py-2 mx-1 ${
                        size === selectedSize ? "selected" : ""
                      }`}
                      onClick={() => setSelectedSize(size)}
                    >
                      {size}
                    </div>
                  ))}
                </div>
                <button
                  onClick={openSizeChart}
                  className="size-chart-button mt-4 text-blue-500 underline"
                >
                  View Size Chart
                </button>
              </div>
              <button
                onClick={addToCart}
                className="add-to-cart-button bg-blue-500 text-white px-4 py-2 rounded mt-4"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      )}
      {sizeChartOpen && (
        <div className="modal-background fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
          <div className="modal bg-white p-8 rounded-lg shadow-lg">
            <div className="modal-content size-chart-modal">
              <span
                className="close cursor-pointer text-gray-600"
                onClick={closeSizeChart}
              >
                &times;
              </span>
              <h2 className="text-xl font-semibold mb-4">Size Chart</h2>
              <table className="size-chart w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2">Size</th>
                    <th className="border-b py-2">Chest (inches)</th>
                    <th className="border-b py-2">Waist (inches)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border-b py-2">XS</td>
                    <td className="border-b py-2">30-32</td>
                    <td className="border-b py-2">24-26</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">S</td>
                    <td className="border-b py-2">34-36</td>
                    <td className="border-b py-2">28-30</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">M</td>
                    <td className="border-b py-2">38-40</td>
                    <td className="border-b py-2">32-34</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">L</td>
                    <td className="border-b py-2">42-44</td>
                    <td className="border-b py-2">36-38</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">XL</td>
                    <td className="border-b py-2">46-48</td>
                    <td className="border-b py-2">40-42</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
