// import React from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.jpg";

// export default function Header() {
//   return (
//     <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
//       <div className="flex items-center ml-5">
//         <Image
//           src={Logo}
//           alt="Logo"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//         <h1 className="font-serif">ShopHub</h1>
//         <div className="ml-96">
//           <Link
//             className="ml-72 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href="./"
//           >
//             Home
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Categories
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Trending
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Orders
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.jpg";

// export default function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const toggleDropdown = () => {
//     setDropdownVisible(!dropdownVisible);
//   };

//   const handleMouseEnter = () => {
//     setDropdownVisible(true);
//   };

//   // const handleMouseLeave = () => {
//   //   setDropdownVisible(false);
//   // };

//   return (
//     <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
//       <div className="flex items-center ml-5">
//         <Image
//           src={Logo}
//           alt="Logo"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//         <h1 className="font-serif">ShopHub</h1>
//         <div className="ml-96 flex">
//           <Link
//             className="ml-72 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href="./"
//           >
//             Home
//           </Link>
//           <div
//             className="relative ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             onMouseEnter={handleMouseEnter}
//             // onMouseLeave={handleMouseLeave}
//           >
//             <button onClick={toggleDropdown} className="focus:outline-none">
//               Categories
//             </button>
//             {dropdownVisible && (
//               <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
//                 <Link
//                   href="/mens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Mens
//                 </Link>
//                 <Link
//                   href="/kids"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Kids
//                 </Link>
//                 <Link
//                   href="/womens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Womens
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Trending
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Orders
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.jpg";

// export default function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);

//   const handleMouseEnter = () => {
//     setDropdownVisible(true);
//   };

//   const handleMouseLeave = () => {
//     setDropdownVisible(false);
//   };

//   return (
//     <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
//       <div className="flex items-center ml-5">
//         <Image
//           src={Logo}
//           alt="Logo"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//         <h1 className="font-serif">ShopHub</h1>
//         <div className="ml-96 flex">
//           <Link
//             className="ml-72 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href="./"
//           >
//             Home
//           </Link>
//           <div
//             className="relative ml-10 font-medium"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="hover:underline hover:text-amber-600 focus:outline-none">
//               Categories
//             </button>
//             {dropdownVisible && (
//               <div className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg">
//                 <Link
//                   href="/mens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Mens
//                 </Link>
//                 <Link
//                   href="/kids"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Kids
//                 </Link>
//                 <Link
//                   href="/womens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Womens
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Trending
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium font-weight:100"
//             href=""
//           >
//             Orders
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import Logo from "@/public/logo.jpg";

// export default function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   let timeoutId;

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutId);
//     setDropdownVisible(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutId = setTimeout(() => {
//       setDropdownVisible(false);
//     }, 300); // Adjust delay as needed
//   };

//   return (
//     <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
//       <div className="flex items-center ml-5">
//         <Image
//           src={Logo}
//           alt="Logo"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//         <h1 className="font-serif">ShopHub</h1>
//         <div className="ml-96 flex">
//           <Link
//             className="ml-72 hover:underline hover:text-amber-600 font-medium"
//             href="./"
//           >
//             Home
//           </Link>
//           <div
//             className="relative ml-10 font-medium"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="hover:underline hover:text-amber-600 focus:outline-none">
//               Categories
//             </button>
//             {dropdownVisible && (
//               <div
//                 className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link
//                   href="/mens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Mens
//                 </Link>
//                 <Link
//                   href="/kids"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Kids
//                 </Link>
//                 <Link
//                   href="/womens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Womens
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium"
//             href=""
//           >
//             Trending
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium"
//             href=""
//           >
//             Orders
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React, { useState } from "react";
// import Link from "next/link";
// import Image from "next/image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
// import Logo from "@/public/logo.jpg";

// export default function Header() {
//   const [dropdownVisible, setDropdownVisible] = useState(false);
//   let timeoutId;

//   const handleMouseEnter = () => {
//     clearTimeout(timeoutId);
//     setDropdownVisible(true);
//   };

//   const handleMouseLeave = () => {
//     timeoutId = setTimeout(() => {
//       setDropdownVisible(false);
//     }, 300); // Adjust delay as needed
//   };

//   return (
//     <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
//       <div className="flex items-center ml-5">
//         <Image
//           src={Logo}
//           alt="Logo"
//           height={40}
//           width={40}
//           className="m-5 rounded-lg"
//         />
//         <h1 className="font-serif">ShopHub</h1>
//         <div className="ml-96 flex">
//           <Link
//             className="ml-72 hover:underline hover:text-amber-600 font-medium"
//             href="./"
//           >
//             Home
//           </Link>
//           <div
//             className="relative ml-10 font-medium"
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//           >
//             <button className="hover:underline hover:text-amber-600 focus:outline-none flex items-center">
//               Categories
//               <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
//             </button>
//             {dropdownVisible && (
//               <div
//                 className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg"
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <Link
//                   href="/mens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Mens
//                 </Link>
//                 <Link
//                   href="/kids"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Kids
//                 </Link>
//                 <Link
//                   href="/womens"
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   Womens
//                 </Link>
//               </div>
//             )}
//           </div>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium"
//             href=""
//           >
//             Trending
//           </Link>
//           <Link
//             className="ml-10 hover:underline hover:text-amber-600 font-medium"
//             href=""
//           >
//             Orders
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import Logo from "@/public/logo.jpg";

export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  let timeoutId;

  const handleMouseEnter = () => {
    clearTimeout(timeoutId);
    setDropdownVisible(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setDropdownVisible(false);
    }, 300); // Adjust delay as needed
  };

  return (
    <div className="text-2xl h-20 top-0 w-full bg-amber-300 mb-3 shadow-md">
      <div className="flex items-center ml-5">
        <Image
          src={Logo}
          alt="Logo"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
        <h1 className="font-serif">ShopHub</h1>
        <div className="ml-96 flex">
          <Link
            className="ml-72 hover:underline hover:text-amber-600 font-medium"
            href="./"
          >
            Home
          </Link>
          <div
            className="relative ml-10 font-medium"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:underline hover:text-amber-600 focus:outline-none flex items-center">
              Categories
              <FontAwesomeIcon icon={faCaretDown} className="ml-2" />
            </button>
            {dropdownVisible && (
              <div
                className="absolute left-0 mt-2 w-48 bg-white border rounded-lg shadow-lg z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  href="/mens"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Mens
                </Link>
                <Link
                  href="/kids"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Kids
                </Link>
                <Link
                  href="/womens"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Womens
                </Link>
              </div>
            )}
          </div>
          <Link
            className="ml-10 hover:underline hover:text-amber-600 font-medium"
            href=""
          >
            Trending
          </Link>
          <Link
            className="ml-10 hover:underline hover:text-amber-600 font-medium"
            href=""
          >
            Orders
          </Link>
        </div>
      </div>
    </div>
  );
}
