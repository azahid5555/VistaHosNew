"use client";
import { useState } from "react";
import img1 from "@/public/assets/imgs/marriage_event.webp";
import img2 from "@/public/assets/imgs/birthdays_event.webp";
import img3 from "@/public/assets/imgs/corporate_event.webp";
import img4 from "@/public/assets/imgs/public_event.webp";
import FuzzyOverla from "../general/FuzzyOverlay";

export default function PossibilitiesBottom() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardHover = (index) => {
    setHoveredCard(index);
  };

  const eventTypes = [
    "Marriage Event",
    "Birthday Parties",
    "Corporate Events",
    "Public Events",
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
                <div className="poss_item_inner text-center">
                  <p className="Vista_para_sm mb-1">Vista Hospitality</p>
                  <h3 className="vista_hos_title3">{eventTypes[index]}</h3>
                </div>
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
