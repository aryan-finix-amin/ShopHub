// import React from "react";
// import Header from "../components/header";
// import Footer from "../components/footer";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// export default function Men() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1
//   };

//   return (
//     <>
//       <Header />
//       <div style={{ margin: "0 auto", padding: "40px", maxWidth: "800px" }}>
//         <Slider {...settings}>
//           <div>
//             <img src="/menimage1.png" alt="Image 1" />
//             <p>Description for Image 1</p>
//           </div>
//           <div>
//             <img src="/menimage2.png" alt="Image 2" />
//             <p>Description for Image 2</p>
//           </div>
//           <div>
//             <img src="/shoe1.png" alt="Image 3" />
//             <p>Description for Image 3</p>
//           </div>
//           <div>
//             <img src="/shoe2.png" alt="Image 4" />
//             <p>Description for Image 4</p>
//           </div>
//           <div>
//             <img src="/shoe3.png" alt="Image 5" />
//             <p>Description for Image 5</p>
//           </div>
//         </Slider>
//       </div>
//       <Footer />
//     </>
//   );
// }


import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import Image from "next/image";
import Menimage1 from "@/public/menimage1.png";
import Menimage2 from "@/public/menimage2.png";
import Shoe1 from "@/public/shoe1.png";
import Shoe2 from "@/public/shoe2.png";
import Shoe3 from "@/public/Shoe3.png";


export default function Men() {
 return (
  <>
  <Header/>
  <Image
          src={Menimage1}
          alt="Menimage"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
  <Image
          src={Menimage2}
          alt="Menimage"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
  <Image
          src={Shoe1}
          alt="Shoe"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
  <Image
          src={Shoe2}
          alt="Shoe"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
  <Image
          src={Shoe3}
          alt="Shoe"
          height={40}
          width={40}
          className="m-5 rounded-lg"
        />
  <Footer/>
  </>
 )

} 