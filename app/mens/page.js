// // import React from "react";
// // import Header from "../components/header";
// // import Footer from "../components/footer";
// // import Slider from "react-slick";
// // import "slick-carousel/slick/slick.css";
// // import "slick-carousel/slick/slick-theme.css";

// // export default function Men() {
// //   const settings = {
// //     dots: true,
// //     infinite: true,
// //     speed: 500,
// //     slidesToShow: 1,
// //     slidesToScroll: 1
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <div style={{ margin: "0 auto", padding: "40px", maxWidth: "800px" }}>
// //         <Slider {...settings}>
// //           <div>
// //             <img src="/menimage1.png" alt="Image 1" />
// //             <p>Description for Image 1</p>
// //           </div>
// //           <div>
// //             <img src="/menimage2.png" alt="Image 2" />
// //             <p>Description for Image 2</p>
// //           </div>
// //           <div>
// //             <img src="/shoe1.png" alt="Image 3" />
// //             <p>Description for Image 3</p>
// //           </div>
// //           <div>
// //             <img src="/shoe2.png" alt="Image 4" />
// //             <p>Description for Image 4</p>
// //           </div>
// //           <div>
// //             <img src="/shoe3.png" alt="Image 5" />
// //             <p>Description for Image 5</p>
// //           </div>
// //         </Slider>
// //       </div>
// //       <Footer />
// //     </>
// //   );
// // }

// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import Image from "next/image";
// import Menimage1 from "@/public/menimage1.png";
// import Menimage2 from "@/public/menimage2.png";
// import Shoe1 from "@/public/shoe1.png";
// import Shoe2 from "@/public/shoe2.png";
// import Shoe3 from "@/public/Shoe3.png";

// export default function Men() {
//  return (
//   <>
//   <Header/>
//   <Image
//           src={Menimage1}
//           alt="Menimage"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//   <Image
//           src={Menimage2}
//           alt="Menimage"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//   <Image
//           src={Shoe1}
//           alt="Shoe"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//   <Image
//           src={Shoe2}
//           alt="Shoe"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//   <Image
//           src={Shoe3}
//           alt="Shoe"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//   <Footer/>
//   </>
//  )

// }

"use client";

import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
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
