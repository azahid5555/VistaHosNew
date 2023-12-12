"use client";
import HeadingTwo from "./HeadingTwo";
import Image from "next/image";
import Link from "next/link";
import img from "@/public/assets/imgs/blogDemo1.webp";
import img2 from "@/public/assets/imgs/blogDemo2.webp";
import img3 from "@/public/assets/imgs/blogDemo3.webp";
import img4 from "@/public/assets/imgs/blogDemo4.webp";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import ReviewsSec from "./ReviewsSec";

export default function BlogSec() {
  const swiperRef = useRef();

  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    const swiper = swiperRef.current;

    const handleSlideChange = () => {
      setIsPrevDisabled(swiper.isBeginning);
      setIsNextDisabled(swiper.isEnd);
    };

    swiper.on("slideChange", handleSlideChange);

    return () => {
      swiper.off("slideChange", handleSlideChange);
    };
  }, []);

  const slidePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const slideNext = () => {
    swiperRef.current?.slideNext();
  };
  return (
    <section className=" position-relative vistaBlogSec Blog__section mb-5 pb-5 VistaSec_topBorder_grade bg-dark60">
      <div className=" container-fluid position-relative p-0">
        <div className="vistaCon container-fluid mb-0 pb-0">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 col-lg-3">
              <h5 className="subheading vista_hos_title5 clrSec">
                Latest News
              </h5>
              <HeadingTwo text="News" />
            </div>
            <div className="col-12 col-md-6 col-lg-7">
              <p className=" Vista_para_sm m-0">
                Stay informed about the exciting happenings, upcoming events,
                and noteworthy milestones at Vista Hospitality INN. Our news
                section is your go-to source for the latest updates on
                everything related to our venues, services, and community
                involvement.
              </p>
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end">
              <div className="whatwedo-slider-control d-flex justify-content-flex-end position-relative">
                <button
                  className={`swiper_prev ${isPrevDisabled ? "disable" : ""}`}
                  onClick={slidePrev}
                >
                  <div className="slider-prev me-1">
                    <i className="bi bi-arrow-left text-dark" />
                  </div>
                </button>
                <button
                  className={`swiper_next ${isNextDisabled ? "disable" : ""}`}
                  onClick={slideNext}
                >
                  <div className="slider-next">
                    <i className="bi bi-arrow-right text-dark" />
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="blog__cards-wrapper mt-5 pt-2 mb-3">
          <div className="row justify-content-center gx-0">
            <Swiper
              slidesPerView={3}
              spaceBetween={15}
              navigation={false}
              onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 40,
                },
                900: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className="mySwiper position-relative"
            >
              <SwiperSlide>
                <div className="blog__card">
                  <div className="card">
                    <div className="inner--card">
                      <div className="upper-content-card d-flex flex-column gap-3">
                        <div className="card_image-holder">
                          <Image alt="blogImg 1" src={img2} />
                        </div>
                        <div className="card_heading-holder text-white d-flex flex-column gap-1">
                          <div className="sub--title">
                            <span>Mar 24 2022</span>
                          </div>
                          <div className="main--title">
                            <Link
                              href="#"
                              className="text-decoration-none text-white"
                            >
                              <h4 className="h4 mb-0 pb-0 vista_hos_title4">
                                Behind the Scenes at Vista Hospitality
                              </h4>
                            </Link>
                          </div>
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white text-white dark"
                            >
                              vista hospitality
                            </Link>
                          </div>
                        </div>
                        <div className="secondery-button d-flex align-items-center gap-1">
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white dark"
                            >
                              Read more
                            </Link>
                          </div>
                          <div className="icon--holder text-white">
                            <i className="bi bi-chevron-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__card">
                  <div className="card">
                    <div className="inner--card">
                      <div className="upper-content-card d-flex flex-column gap-3">
                        <div className="card_image-holder">
                          <Image alt="blogImg 1" src={img3} />
                        </div>
                        <div className="card_heading-holder text-white d-flex flex-column gap-1">
                          <div className="sub--title">
                            <span>Mar 24 2022</span>
                          </div>
                          <div className="main--title">
                            <Link
                              href="#"
                              className="text-decoration-none text-white"
                            >
                              <h4 className="h4 mb-0 pb-0 vista_hos_title4">
                                Cultural Festivals at Vista Hospitality
                              </h4>
                            </Link>
                          </div>
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white text-white dark"
                            >
                              I24news french
                            </Link>
                          </div>
                        </div>
                        <div className="secondery-button d-flex align-items-center gap-1">
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white dark"
                            >
                              Read more
                            </Link>
                          </div>
                          <div className="icon--holder text-white">
                            <i className="bi bi-chevron-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__card">
                  <div className="card">
                    <div className="inner--card">
                      <div className="upper-content-card d-flex flex-column gap-3">
                        <div className="card_image-holder">
                          <Image alt="blogImg 1" src={img4} />
                        </div>
                        <div className="card_heading-holder text-white d-flex flex-column gap-1">
                          <div className="sub--title">
                            <span>Mar 24 2022</span>
                          </div>
                          <div className="main--title">
                            <Link
                              href="#"
                              className="text-decoration-none text-white"
                            >
                              <h4 className="h4 mb-0 pb-0 vista_hos_title4">
                                Eco Friendly Initiatives at Vista Hospitality
                              </h4>
                            </Link>
                          </div>
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white text-white dark"
                            >
                              I24news french
                            </Link>
                          </div>
                        </div>
                        <div className="secondery-button d-flex align-items-center gap-1">
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white dark"
                            >
                              Read more
                            </Link>
                          </div>
                          <div className="icon--holder text-white">
                            <i className="bi bi-chevron-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="blog__card">
                  <div className="card">
                    <div className="inner--card">
                      <div className="upper-content-card d-flex flex-column gap-3">
                        <div className="card_image-holder">
                          <Image alt="blogImg 1" src={img} />
                        </div>
                        <div className="card_heading-holder text-white d-flex flex-column gap-1">
                          <div className="sub--title">
                            <span>Mar 24 2022</span>
                          </div>
                          <div className="main--title">
                            <Link
                              href="#"
                              className="text-decoration-none text-white"
                            >
                              <h4 className="h4 mb-0 pb-0 vista_hos_title4">
                                Designing Personalized Events at Vista
                                Hospitality
                              </h4>
                            </Link>
                          </div>
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white text-white dark"
                            >
                              I24news french
                            </Link>
                          </div>
                        </div>
                        <div className="secondery-button d-flex align-items-center gap-1">
                          <div className="read--more">
                            <Link
                              href="#0"
                              className="animated_link text-white dark"
                            >
                              Read more
                            </Link>
                          </div>
                          <div className="icon--holder text-white">
                            <i className="bi bi-chevron-right" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>

        <ReviewsSec />
      </div>
    </section>
  );
}
