// import image1 from "@/public/assets/imgs/homeAbout.webp";

// import "swiper/css";
// import "swiper/css/effect-fade";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { EffectFade, Autoplay, Pagination } from "swiper/modules";

// import Image from "next/image";
// import FuzzyOverla from "../general/FuzzyOverlay";
// import HeadingTwo from "../general/HeadingTwo";
// export default function AboutStickySecTwo(props) {
//   return (
//     <section className="wedding__FAQ-section">
//       <div className="container-fluid vistaCon position-relative z-2 pt-0">
//         <div className="project project-a Event__faq-wrapper py-5 row">
//           <div className="col-lg-6 col-12 p-lg-4 p-md-0">
//             <div className="image--wrapper position-sticky top-0">
//               <div className="checking position-relative">
//                 <Image
//                   alt="img"
//                   src={image1}
//                   className=" img-fluid object-fit-cover rounded"
//                 />
//                 {/* !add the continuously rotating circle */}
//                 <div className="sun position-absolute d-flex justify-content-center align-items-center">
//                   <div className="icon--wrapper position-absolute">
//                     <div className="small--circle rounded-circle px-2 text-center bg-white d-flex align-items-center justify-content-center">
//                       <i className="bi bi-play-fill fs-3"></i>
//                     </div>
//                   </div>
//                   {/* !here new attemp is started  */}
//                   <svg
//                     id="rotatingText"
//                     viewBox="0 0 200 200"
//                     width={200}
//                     height={200}
//                   >
//                     <defs>
//                       <path
//                         id="circle"
//                         d="M 100, 100
//                   m -75, 0
//                   a 75, 75 0 1, 0 150, 0
//                   a 75, 75 0 1, 0 -150, 0
//               "
//                       />
//                     </defs>
//                     <text width={500}>
//                       <textPath
//                         alignmentBaseline="top"
//                         xlinkHref="#circle"
//                         className="text text-uppercase"
//                         fill="white"
//                       >
//                         best vista hospitality services
//                       </textPath>
//                     </text>
//                   </svg>
//                   {/* !here new attemp is ended  */}
//                 </div>
//                 {/* !end of the continuously rotating circle */}
//               </div>
//             </div>
//           </div>
//           <div className=" col-6">
//             {props.StickyContent.map((list, i) => (
//               <div className="faq__left-wrapper mt-3 pt-3" key={i}>
//                 <div className="faq__inner-content p-5">
//                   <div className="faq-headline text-center faeture__content-wrapper">
//                     <HeadingTwo text={list.headText1} text2={list.headText2} />
//                     <p className=" wedding_story-desc text-center Vista_para_sm text-paragraph text-white">
//                       {list.para}
//                     </p>
//                   </div>
//                 </div>
//                 {i !== props.StickyContent.length - 1 && (
//                   <div className="skew_line-wrapper text-center faeture_content-wrapper">
//                     <div className="just-skewing" />
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { EffectFade, Autoplay, Pagination } from "swiper/modules";

import Image from "next/image";
import FuzzyOverla from "../general/FuzzyOverlay";
import HeadingTwo from "../general/HeadingTwo";

export default function AboutStickySecTwo(props) {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <section className="wedding__FAQ-section">
      <div className="container-fluid vistaCon position-relative z-2 pt-0">
        <div className="project project-a Event__faq-wrapper py-5 row">
          <div className=" col-6">
            {props.StickyContent.map((list, i) => (
              <div className="faq__left-wrapper mt-3 pt-3" key={i}>
                <div className="faq__inner-content p-5">
                  <div className="faq-headline text-center faeture__content-wrapper">
                    <HeadingTwo text={list.headText1} text2={list.headText2} />
                    <p className=" wedding_story-desc text-center Vista_para_sm text-paragraph text-white">
                      {list.para}
                    </p>
                  </div>
                </div>
                {i !== props.StickyContent.length - 1 && (
                  <div className="skew__line-wrapper text-center faeture__content-wrapper">
                    <div className="just-skewing" />
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="column right-column col-12 col-md-6">
            <div className="description swiper-container ">
              <div className="sun position-absolute d-flex justify-content-center align-items-center">
                <div className="icon--wrapper position-absolute">
                  <div className="small--circle rounded-circle px-2 text-center bg-white d-flex align-items-center justify-content-center">
                    <i className="bi bi-play-fill fs-3"></i>
                  </div>
                </div>
                <svg
                  id="rotatingText"
                  viewBox="0 0 200 200"
                  width={200}
                  height={200}
                >
                  <defs>
                    <path
                      id="circle"
                      d="M 100, 100
                  m -75, 0
                  a 75, 75 0 1, 0 150, 0
                  a 75, 75 0 1, 0 -150, 0
              "
                    />
                  </defs>
                  <text width={500}>
                    <textPath
                      alignmentBaseline="top"
                      xlinkHref="#circle"
                      className="text text-uppercase"
                      fill="white"
                    >
                      best vista hospitality services
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="overflow-hidden position-relative">
                <FuzzyOverla />
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  effect={"fade"}
                  autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={false}
                  modules={[EffectFade, Autoplay, Pagination]}
                  onAutoplayTimeLeft={onAutoplayTimeLeft}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <Image
                      alt="Our Story"
                      src={props.img1}
                      className=" img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Our Story"
                      src={props.img2}
                      className=" img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Our Story"
                      src={props.img3}
                      className=" img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Our Story"
                      src={props.img4}
                      className=" img-fluid"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      alt="Our Story"
                      src={props.img5}
                      className=" img-fluid"
                    />
                  </SwiperSlide>
                  <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                      <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                  </div>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
