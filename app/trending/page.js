"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const router = useRouter();
  const images = [
    "/trending2.png",
    "/trending1.png",
    "/trending3.png",
    "/trending4.png",
    "/trending5.png",
  ];

  const initialItems = [
    {
      src: "/shoe1.png",
      title: "Sporty Sneakers",
      price: "$59.99",
      description: "Comfortable and stylish sneakers for everyday wear.",
      quantity: 1,
      sizes: ["6", "7", "8", "9", "10"],
    },
    {
      src: "/shoe2.png",
      title: "Classic Running Shoes",
      price: "$49.99",
      description: "Durable running shoes with excellent grip.",
      quantity: 1,
      sizes: ["6", "7", "8", "9", "10"],
    },
    {
      src: "/shirt1.png",
      title: "Casual T-Shirt",
      price: "$19.99",
      description: "Soft cotton t-shirt with a relaxed fit.",
      quantity: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      src: "/shirt2.png",
      title: "Formal Shirt",
      price: "$39.99",
      description: "Elegant shirt perfect for formal occasions.",
      quantity: 1,
      sizes: ["S", "M", "L", "XL"],
    },
    {
      src: "/bag1.png",
      title: "Leather Backpack",
      price: "$89.99",
      description: "Stylish and spacious leather backpack.",
      quantity: 1,
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeChartOpen, setSizeChartOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = (index) => {
    setSelectedItemIndex(index);
    setSelectedSize(items[index].sizes ? items[index].sizes[0] : "");
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedItemIndex(null);
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
    const selectedItem = { ...items[selectedItemIndex], size: selectedSize };
    setCartItems([...cartItems, selectedItem]);
    alert("Item added to cart!");
    closeModal();
  };

  const proceedToCheckout = () => {
    router.push("/your-cart");
  };

  return (
    <main className="min-h-screen bg-orange-100 flex flex-col items-center">
      <Header />
      <div className="image-container mt-7">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            className={`image ${
              index === currentImage ? "active" : ""
            } rounded-lg`}
            alt={`Trending ${index + 1}`}
          />
        ))}
      </div>
      <div className="dots-container">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentImage ? "active" : ""}`}
          ></span>
        ))}
      </div>
      <div className="bottom-images-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mt-10">
        {items.map((item, index) => (
          <div
            key={index}
            className="box-container p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            onClick={() => openModal(index)}
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
      <div className="your-cart mt-10 p-4 bg-white rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-4">YOUR CART</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty. Browse our categories and add items to your cart.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center my-2"
              >
                <div className="flex items-center">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-16 h-16 rounded-lg mr-4"
                  />
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-gray-600">{item.price}</p>
                    {item.size && <p className="text-gray-600">Size: {item.size}</p>}
                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                  </div>
                </div>
                <button
                  onClick={proceedToCheckout}
                  className="px-2 py-1 bg-green-500 text-white rounded"
                >
                  Proceed to Checkout
                </button>
                <button
                  className="px-2 py-1 bg-red-500 text-white rounded"
                  onClick={() => setCartItems(cartItems.filter((_, i) => i !== index))}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
      {modalOpen && selectedItemIndex !== null && (
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
                src={items[selectedItemIndex].src}
                alt="Selected"
                className="modal-image mx-auto my-4"
                style={{ maxWidth: "100%", height: "auto" }}
              />
              <p className="modal-title text-xl font-semibold">
                {items[selectedItemIndex].title}
              </p>
              <p className="modal-price text-gray-600">
                {items[selectedItemIndex].price}
              </p>
              <p className="modal-description my-4">
                {items[selectedItemIndex].description}
              </p>
              <div className="quantity-control-modal flex items-center justify-center mt-4">
                <button
                  className="px-2 py-1 border border-gray-300"
                  onClick={() => updateQuantity(selectedItemIndex, -1)}
                >
                  -
                </button>
                <span className="px-4">{items[selectedItemIndex].quantity}</span>
                <button
                  className="px-2 py-1 border border-gray-300"
                  onClick={() => updateQuantity(selectedItemIndex, 1)}
                >
                  +
                </button>
              </div>
              {items[selectedItemIndex].sizes && (
                <div className="size-selector mt-4 text-center">
                  <label>Select Size:</label>
                  <div className="size-boxes flex justify-center mt-2">
                    {items[selectedItemIndex].sizes.map((size, idx) => (
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
              )}
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
                    <td className="border-b py-2">6</td>
                    <td className="border-b py-2">34-36</td>
                    <td className="border-b py-2">28-30</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">7</td>
                    <td className="border-b py-2">36-38</td>
                    <td className="border-b py-2">30-32</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">8</td>
                    <td className="border-b py-2">38-40</td>
                    <td className="border-b py-2">32-34</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">9</td>
                    <td className="border-b py-2">40-42</td>
                    <td className="border-b py-2">34-36</td>
                  </tr>
                  <tr>
                    <td className="border-b py-2">10</td>
                    <td className="border-b py-2">42-44</td>
                    <td className="border-b py-2">36-38</td>
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
