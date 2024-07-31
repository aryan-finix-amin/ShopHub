// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";

// export default function page() {
//   return (
//     <main className="min-h-screen bg-orange-100">
//       <Header />
//       <div className="flex justify-center items-center flex-grow">
//         <img
//           src="/trending2.png"
//           height={1000}
//           width={1200}
//           className="mt-7 rounded-lg"
//         />
//       </div>
//       <div className="flex justify-center items-center flex-grow">
//         <img
//           src="/trending1.png"
//           height={1000}
//           width={1200}
//           className="mt-7 rounded-lg"
//         />
//       </div>
//       <div className="flex justify-center items-center flex-grow">
//         <img
//           src="/trending3.png"
//           height={1000}
//           width={1200}
//           className="mt-7 rounded-lg"
//         />
//       </div>
//       <div className="flex justify-center items-center flex-grow">
//         <img
//           src="/trending4.png"
//           height={1000}
//           width={1200}
//           className="mt-7 rounded-lg"
//         />
//         <div className="flex justify-center items-center flex-grow">
//           <img
//             src="/trending5.png"
//             height={1000}
//             width={1200}
//             className="mt-7 rounded-lg"
//           />
//         </div>
//       </div>
//       <Footer />
//     </main>
//   );
// }

"use client";

// import React, { useState, useEffect } from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";

// export default function Page() {
//   const [currentImage, setCurrentImage] = useState(0);

//   const images = [
//     "/trending2.png",
//     "/trending1.png",
//     "/trending3.png",
//     "/trending4.png",
//     "/trending5.png",
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prevImage) => (prevImage + 1) % images.length);
//     }, 1000); // Change image every 3 seconds

//     return () => clearInterval(interval);
//   }, [images.length]);

//   return (
//     <main className="min-h-screen bg-orange-100 flex flex-col items-center">
//       <Header />
//       <div className="flex justify-center items-center">
//         <img
//           src={images[currentImage]}
//           height={1000}
//           width={1200}
//           className="rounded-lg mt-5"
//         />
//       </div>
//       <Footer />
//     </main>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
import Header from "../components/header";
import Footer from "../components/footer";

export default function Page() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    "/trending2.png",
    "/trending1.png",
    "/trending3.png",
    "/trending4.png",
    "/trending5.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

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
      <Footer />
    </main>
  );
}
