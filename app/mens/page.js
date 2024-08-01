"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const router = useRouter();
  const initialItems = [
    {
      src: "/men1.png",
      title: "Loose Fit Hoodie",
      price: "$29.99",
      description:
        "Loose-fit sweatshirt hoodie in medium weight cotton-blend fabric with a generous, but not oversized silhouette. Jersey-lined, drawstring hood, dropped shoulders, long sleeves, and a kangaroo pocket. Wide ribbing at cuffs and hem. Soft, brushed inside.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men2.png",
      title: "Slim Fit Cotton Chinos  ",
      price: "$34.99",
      description:
        "Slim-fit chinos in stretch cotton twill with a fitted silhouette. Zip fly with button, diagonal side pockets, and welt back pockets with button.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men3.png",
      title: "Regular Fit Sweatshorts",
      price: "$19.99",
      description:
        "Regular-fit, comfortable sweatshorts in lightweight fabric with soft, brushed inside and a classic silhouette. Drawstring and covered elastic at waistband, diagonal welt side pockets, and an open back pocket.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men4.png",
      title: "DryMove™ Printed Sports Shirt",
      price: "$34.99",
      description:
        "Oversized sports shirt in DryMove™ functional mesh to wick away moisture from skin and keep you comfortably dry while moving. V-neck, a printed motif, and short sleeves.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men5.png",
      title: "DryMove™ Sports Sweatshirt",
      price: "$34.99",
      description:
        "Regular-fit sports sweatshirt in DryMove™ functional fabric to wick away moisture from skin and keep you comfortably dry while moving. Round neck, long sleeves, and ribbing at cuffs and hem. Soft, brushed inside.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men6.png",
      title: "Overshirt",
      price: "$54.99",
      description:
        "Overshirt in soft, woven fabric. Collar, buttons at front, and chest pockets with flap and button. Yoke at back and long sleeves with button at cuffs.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men7.png",
      title: "Loose Fit Printed T-shirt",
      price: "$29.99",
      description:
        "Loose-fit T-shirt in medium weight cotton jersey with a printed design and generous but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men8.png",
      title: "Loose Fit T-shirt",
      price: "$9.99",
      description:
        "Loose-fit T-shirt in lightweight cotton jersey with a generous, but not oversized silhouette. Ribbed crew neck, dropped shoulders, and a straight-cut hem.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men9.png",
      title: "Wide Jeans",
      price: "$74.99",
      description:
        "5-pocket jeans in rigid cotton denim. Loose fit from seat to hem and wide legs with extra room. Regular waist, zip fly, and a narrow, removable tie belt. Dropped gusset. This is denim that lasts.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
    {
      src: "/men10.png",
      title: "Loose Fit Printed Hoodie",
      price: "$42.99",
      description:
        "Loose-fit sweatshirt hoodie in medium-weight, cotton-blend fabric with a printed motif and generous, but not oversized silhouette. Double-layered drawstring hood, a kangaroo pocket, dropped shoulders, and long sleeves. Wide ribbing at cuffs and hem. Soft, brushed inside.",
      quantity: 1,
      sizes: ["XS", "S", "M", "L", "XL"],
    },
  ];

  const [items, setItems] = useState(initialItems);
  const [cartItems, setCartItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeChartOpen, setSizeChartOpen] = useState(false);

  const openModal = (index) => {
    setSelectedItemIndex(index);
    setSelectedSize(items[index].sizes[0]);
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

  const calculateTotalAmount = () => {
    return cartItems
      .reduce((total, item) => {
        const price = parseFloat(item.price.replace("$", ""));
        return total + price * item.quantity;
      }, 0)
      .toFixed(2);
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
        </div>

        <div className="your-cart mt-10 p-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">YOUR CART</h2>
          {cartItems.length === 0 ? (
            <p>
              Your cart is empty. Browse our categories and add items to your
              cart.
            </p>
          ) : (
            <div>
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
                        <p className="text-gray-600">Size: {item.size}</p>
                        <p className="text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                    <button
                      className="px-2 py-1 bg-red-500 text-white rounded"
                      onClick={() =>
                        setCartItems(cartItems.filter((_, i) => i !== index))
                      }
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
              <div className="total-amount text-right font-bold text-lg mt-4">
                Total Amount: ${calculateTotalAmount()}
              </div>
              <div className="text-right mt-4">
                <button
                  onClick={proceedToCheckout}
                  className="px-4 py-2 bg-green-500 text-white rounded mt-4"
                >
                  Proceed to Checkout
                </button>
              </div>
            </div>
          )}
        </div>
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
                <span className="px-4">
                  {items[selectedItemIndex].quantity}
                </span>
                <button
                  className="px-2 py-1 border border-gray-300"
                  onClick={() => updateQuantity(selectedItemIndex, 1)}
                >
                  +
                </button>
              </div>
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
