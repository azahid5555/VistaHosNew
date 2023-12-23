"use client";
import { useState } from "react";
import img1 from "@/public/assets/imgs/vista_hospitality_Inn_2.webp";
import img2 from "@/public/assets/imgs/vista_hospitality_Inn_Birthday_1.webp";
import img3 from "@/public/assets/imgs/corporateEventBg.webp";
import img4 from "@/public/assets/imgs/vista_hospitality_Inn_Modeling_1.webp";
import FuzzyOverla from "../general/FuzzyOverlay";
import Link from "next/link";

export default function PossibilitiesBottom() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const eventTypes = [
    "Wedding Events",
    "Parties Events",
    "Corporate Events",
    "Public Events",
  ];
  const eventLinks = [
    "/events/wedding-event",
    "/events/party-events",
    "/events/corporate-events",
    "/events/public-events",
  ];

  return (
    <section className="position-relative possibilitiesSec">
      <div className="container-fluid position-relative mt-0 pt-0 z-3">
        <div className="possibilitiesBtm_con  Poss_bgImgHover position-relative overflow-hidden">
          <FuzzyOverla />
          <div className="row g-0">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                className={`possibilities_card_item ${
                  hoveredCard === index ? "active" : ""
                }`}
                onMouseEnter={() => handleCardHover(index)}
              >
                <Link
                  href={eventLinks[index]}
                  className=" text-decoration-none"
                >
                  <div className="poss_item_inner text-center">
                    <p className="Vista_para_sm mb-1">Vista Hospitality</p>
                    <h3 className="vista_hos_title3">{eventTypes[index]}</h3>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add dynamic styles based on hover */}
      <style jsx>{`
        .Poss_bgImgHover {
          background-image: linear-gradient(
              rgba(0, 0, 0, 0.3),
              rgba(0, 0, 0, 0.3)
            ),
            ${getBackgroundImage(hoveredCard)};
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          transition: background-image 0.5s ease-in-out;
        }
      `}</style>
    </section>
  );
}

// Function to get background image based on hovered card
function getBackgroundImage(index) {
  switch (index) {
    case 0:
      return `url(${img1.src})`;
    case 1:
      return `url(${img2.src})`;
    case 2:
      return `url(${img3.src})`;
    case 3:
      return `url(${img4.src})`;
    default:
      return `url(${img1.src})`;
  }
}
