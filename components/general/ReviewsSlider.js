"use client";
import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger"; // Import ScrollTrigger
import Swiper from "swiper";
import Modal from "../Modal/Modal";
// import Modal from "@/components/Modal/Modal";

gsap.registerPlugin(ScrollTrigger);

export default function ReviewsSlider() {
  const swiperRef = useRef();

  const [openModal, setOpenModal] = useState(false);

  const [userReview, setuserReview] = useState([]);

  useEffect(() => {
    // ScrollTrigger config
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize",
    });

    // Marquee effect
    const marquee = document.querySelectorAll(".marquee");

    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll(".marquee-carousel");

      carousel.forEach((e) => {
        const items = e.querySelector(".marquee-items");
        const item = e.querySelectorAll(".marquee-item");

        e.classList.add("swiper-container");
        items.classList.add("swiper-wrapper");
        item.forEach((e) => e.classList.add("swiper-slide"));

        const slider = new Swiper(e, {
          slidesPerView: "auto",
          loop: true,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 0.3,
        });
      });

      // Scroll triggered movement
      const tl = gsap.timeline({
        ease: "power3.inOut",
      });

      tl.set(carousel, { willChange: "transform" });

      tl.fromTo(
        carousel[0],
        {
          x: -300,
        },
        {
          x: 0,
          ease: "power3.inOut",
        },
        0
      );

      tl.set(carousel, { willChange: "auto" });

      ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        refreshPriority: -14,
      });
    });
  }, []);

  useEffect(() => {
    // ScrollTrigger config
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load, resize",
    });

    // Marquee effect
    const marquee = document.querySelectorAll(".marqueeTwo");

    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll(".marquee-carousel-2");

      carousel.forEach((e) => {
        const items = e.querySelector(".marquee-itemsTwo");
        const item = e.querySelectorAll(".marquee-itemTwo");

        e.classList.add("swiper-container");
        items.classList.add("swiper-wrapper");
        item.forEach((e) => e.classList.add("swiper-slide"));

        const slider = new Swiper(e, {
          slidesPerView: "auto",
          loop: true,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 0.3,
        });
      });

      // Scroll triggered movement
      const tlTwo = gsap.timeline({
        ease: "power3.inOut",
      });

      tlTwo.set(carousel, { willChange: "transform" });

      tlTwo.fromTo(
        carousel[0],
        {
          x: 300,
        },
        {
          x: 0,
          ease: "power3.inOut",
        },
        0
      );

      tlTwo.set(carousel, { willChange: "auto" });

      ScrollTrigger.create({
        trigger: e,
        animation: tlTwo,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
        refreshPriority: -14,
      });
    });
  }, []);

  //   useEffect(() => {
  //     const getuserReview = async () => {
  //       try {
  //         const InterPropertyReq = await fetch(
  //           `${process.env.NEXT_PUBLIC_STRAPI_URL}/reviews?populate*`
  //         );
  //         const InternationalPropData = await InterPropertyReq.json();

  //         setuserReview(InternationalPropData);

  //         console.log(userReview, "Rev");

  //         setModalStates(InternationalPropData.data.map(() => false));
  //       } catch (error) {
  //         console.error("Error fetching user reviews:", error);
  //       }
  //     };

  //     getuserReview();
  //   }, []);

  // Create an array of boolean states to track modal status
  const [modalStates, setModalStates] = useState([]);
  // Function to toggle a specific modal state
  const toggleModal = (index) => {
    const newModalStates = [...modalStates];
    newModalStates[index] = !newModalStates[index];
    setModalStates(newModalStates);
  };

  const [modalIndex, setModalIndex] = useState(null);

  const openModalAtIndex = (index) => {
    setModalIndex(index);
  };

  const closeModal = () => {
    setModalIndex(null);
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<i key={i} className="bi bi-star-fill"></i>);
    }
    return stars;
  };

  //   const visibleReviews = userReview.data
  //     ? userReview.data.filter((review) => review.attributes.Show_Hide === true)
  //     : [];
  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <section className="marquee">
          <div className="marquee-carousel marquee-carousel-1">
            <div className="marquee-items">
              {/* {visibleReviews &&
                visibleReviews.map((e, key) => (
                  <div className="marquee-item" key={key}>
                    <div className="review_info">
                      <div className="name">
                        <h2>{e.attributes.Name}</h2>
                      </div>
                      <p className="review">{e.attributes.Review}</p>
                    </div>
                    <div className="review_btm">
                      <div className="rating_con">
                        {renderStars(e.attributes.Starts)}
                      </div>
                      <div className="btn_con">
                        <button onClick={() => openModalAtIndex(key)}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))} */}
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ali Zahid</h2>
                  </div>
                  <p className="review">
                    We recently hosted our dream wedding at Vista Marquess, and
                    it was nothing short of magical! The venue itself is
                    breathtaking, with its elegant architecture and stunning
                    views. The event planning team at Vista Hospitality went
                    above and beyond to bring our vision to life. The attention
                    to detail, personalized service, and the culinary experience
                    exceeded our expectations. Our guests are still raving about
                    the memorable celebration. Vista Hospitality truly knows how
                    to make dreams come true!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Hassan Sajjad</h2>
                  </div>
                  <p className="review">
                    As a corporate event planner, I am always on the lookout for
                    venues that offer a perfect blend of professionalism and
                    aesthetics. Vista Hospitality delivered on all fronts! The
                    teams responsiveness and flexibility during the planning
                    process were commendable. Our conference at Vista Ava Lawn
                    was a resounding success, thanks to the top-notch facilities
                    and seamless coordination. I highly recommend Vista
                    Hospitality for any corporate event; they truly understand
                    the needs of the business world.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Naeem</h2>
                  </div>
                  <p className="review">
                    We chose Vista Luxury Sweets to create a custom cake for our
                    daughters birthday, and it was an absolute showstopper! The
                    attention to detail in the design and the delectable flavors
                    exceeded our expectations. The team at Vista Hospitality was
                    a pleasure to work with, ensuring that every aspect of the
                    order was tailored to our preferences. The cake not only
                    looked incredible but tasted divine. Vista Luxury Sweets is
                    now our go-to for all special occasions!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Murtaza</h2>
                  </div>
                  <p className="review">
                    What stood out to me about Vista Hospitality was their
                    commitment to sustainability. As someone who values
                    eco-friendly practices, it was refreshing to see their
                    dedication to minimizing their environmental impact. The
                    venues green initiatives, from energy-efficient lighting to
                    waste reduction programs, make it a conscientious choice for
                    events. Beyond that, the staffs warm hospitality and the
                    beautiful surroundings make Vista Hospitality a top choice
                    for anyone looking for an event venue with a conscience.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ali Zahid</h2>
                  </div>
                  <p className="review">
                    We recently hosted our dream wedding at Vista Marquess, and
                    it was nothing short of magical! The venue itself is
                    breathtaking, with its elegant architecture and stunning
                    views. The event planning team at Vista Hospitality went
                    above and beyond to bring our vision to life. The attention
                    to detail, personalized service, and the culinary experience
                    exceeded our expectations. Our guests are still raving about
                    the memorable celebration. Vista Hospitality truly knows how
                    to make dreams come true!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Hassan Sajjad</h2>
                  </div>
                  <p className="review">
                    As a corporate event planner, I am always on the lookout for
                    venues that offer a perfect blend of professionalism and
                    aesthetics. Vista Hospitality delivered on all fronts! The
                    teams responsiveness and flexibility during the planning
                    process were commendable. Our conference at Vista Ava Lawn
                    was a resounding success, thanks to the top-notch facilities
                    and seamless coordination. I highly recommend Vista
                    Hospitality for any corporate event; they truly understand
                    the needs of the business world.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Naeem</h2>
                  </div>
                  <p className="review">
                    We chose Vista Luxury Sweets to create a custom cake for our
                    daughters birthday, and it was an absolute showstopper! The
                    attention to detail in the design and the delectable flavors
                    exceeded our expectations. The team at Vista Hospitality was
                    a pleasure to work with, ensuring that every aspect of the
                    order was tailored to our preferences. The cake not only
                    looked incredible but tasted divine. Vista Luxury Sweets is
                    now our go-to for all special occasions!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Murtaza</h2>
                  </div>
                  <p className="review">
                    What stood out to me about Vista Hospitality was their
                    commitment to sustainability. As someone who values
                    eco-friendly practices, it was refreshing to see their
                    dedication to minimizing their environmental impact. The
                    venues green initiatives, from energy-efficient lighting to
                    waste reduction programs, make it a conscientious choice for
                    events. Beyond that, the staffs warm hospitality and the
                    beautiful surroundings make Vista Hospitality a top choice
                    for anyone looking for an event venue with a conscience.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="marqueeTwo marquee">
          <div className="marquee-carousel marquee-carousel-1 marquee-carousel-2">
            <div className="marquee-itemsTwo marquee-items">
              {/* {visibleReviews &&
                visibleReviews.map((e, key) => (
                  <div className="marquee-item" key={key}>
                    <div className="review_info">
                      <div className="name">
                        <h2>{e.attributes.Name}</h2>
                      </div>
                      <p className="review">{e.attributes.Review}</p>
                    </div>
                    <div className="review_btm">
                      <div className="rating_con">
                        {renderStars(e.attributes.Starts)}
                      </div>
                      <div className="btn_con">
                        <button onClick={() => openModalAtIndex(key)}>
                          Read More
                        </button>
                      </div>
                    </div>
                  </div>
                ))} */}
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ali Zahid</h2>
                  </div>
                  <p className="review">
                    We recently hosted our dream wedding at Vista Marquess, and
                    it was nothing short of magical! The venue itself is
                    breathtaking, with its elegant architecture and stunning
                    views. The event planning team at Vista Hospitality went
                    above and beyond to bring our vision to life. The attention
                    to detail, personalized service, and the culinary experience
                    exceeded our expectations. Our guests are still raving about
                    the memorable celebration. Vista Hospitality truly knows how
                    to make dreams come true!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Hassan Sajjad</h2>
                  </div>
                  <p className="review">
                    As a corporate event planner, I am always on the lookout for
                    venues that offer a perfect blend of professionalism and
                    aesthetics. Vista Hospitality delivered on all fronts! The
                    teams responsiveness and flexibility during the planning
                    process were commendable. Our conference at Vista Ava Lawn
                    was a resounding success, thanks to the top-notch facilities
                    and seamless coordination. I highly recommend Vista
                    Hospitality for any corporate event; they truly understand
                    the needs of the business world.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Naeem</h2>
                  </div>
                  <p className="review">
                    We chose Vista Luxury Sweets to create a custom cake for our
                    daughters birthday, and it was an absolute showstopper! The
                    attention to detail in the design and the delectable flavors
                    exceeded our expectations. The team at Vista Hospitality was
                    a pleasure to work with, ensuring that every aspect of the
                    order was tailored to our preferences. The cake not only
                    looked incredible but tasted divine. Vista Luxury Sweets is
                    now our go-to for all special occasions!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Murtaza</h2>
                  </div>
                  <p className="review">
                    What stood out to me about Vista Hospitality was their
                    commitment to sustainability. As someone who values
                    eco-friendly practices, it was refreshing to see their
                    dedication to minimizing their environmental impact. The
                    venues green initiatives, from energy-efficient lighting to
                    waste reduction programs, make it a conscientious choice for
                    events. Beyond that, the staffs warm hospitality and the
                    beautiful surroundings make Vista Hospitality a top choice
                    for anyone looking for an event venue with a conscience.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ali Zahid</h2>
                  </div>
                  <p className="review">
                    We recently hosted our dream wedding at Vista Marquess, and
                    it was nothing short of magical! The venue itself is
                    breathtaking, with its elegant architecture and stunning
                    views. The event planning team at Vista Hospitality went
                    above and beyond to bring our vision to life. The attention
                    to detail, personalized service, and the culinary experience
                    exceeded our expectations. Our guests are still raving about
                    the memorable celebration. Vista Hospitality truly knows how
                    to make dreams come true!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Hassan Sajjad</h2>
                  </div>
                  <p className="review">
                    As a corporate event planner, I am always on the lookout for
                    venues that offer a perfect blend of professionalism and
                    aesthetics. Vista Hospitality delivered on all fronts! The
                    teams responsiveness and flexibility during the planning
                    process were commendable. Our conference at Vista Ava Lawn
                    was a resounding success, thanks to the top-notch facilities
                    and seamless coordination. I highly recommend Vista
                    Hospitality for any corporate event; they truly understand
                    the needs of the business world.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Naeem</h2>
                  </div>
                  <p className="review">
                    We chose Vista Luxury Sweets to create a custom cake for our
                    daughters birthday, and it was an absolute showstopper! The
                    attention to detail in the design and the delectable flavors
                    exceeded our expectations. The team at Vista Hospitality was
                    a pleasure to work with, ensuring that every aspect of the
                    order was tailored to our preferences. The cake not only
                    looked incredible but tasted divine. Vista Luxury Sweets is
                    now our go-to for all special occasions!
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
              <div className="marquee-itemTwo marquee-item">
                <div className="review_info">
                  <div className="name">
                    <h2>Ch Murtaza</h2>
                  </div>
                  <p className="review">
                    What stood out to me about Vista Hospitality was their
                    commitment to sustainability. As someone who values
                    eco-friendly practices, it was refreshing to see their
                    dedication to minimizing their environmental impact. The
                    venues green initiatives, from energy-efficient lighting to
                    waste reduction programs, make it a conscientious choice for
                    events. Beyond that, the staffs warm hospitality and the
                    beautiful surroundings make Vista Hospitality a top choice
                    for anyone looking for an event venue with a conscience.
                  </p>
                </div>
                <div className="review_btm">
                  <div className="rating_con">
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    <i className="bi bi-star-fill"></i>
                    {/* {renderStars(e.attributes.Starts)} */}
                  </div>
                  <div className="btn_con">
                    <button onClick={() => openModalAtIndex(key)}>
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Modal isOpen={modalIndex !== null} onClose={closeModal} stars={4}>
        {modalIndex !== null && (
          <>
            <h2 className="ModalTitle">
              {visibleReviews[modalIndex].attributes.Name}
            </h2>
            <p>{visibleReviews[modalIndex].attributes.Review}</p>
          </>
        )}
      </Modal>
    </div>
  );
}
