import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingTwo from "../general/HeadingTwo";
import ThreeDCard from "../general/ThreeDCard";
import icon1 from "@/public/assets/icons/weddingDay.svg";
import icon2 from "@/public/assets/icons/weddingDay2.svg";
import icon3 from "@/public/assets/icons/weddingDay3.svg";
export default function WhatWeOffer() {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-7 col-md-6 text-center mb-5">
          <div className="sub--title">
            <HeadingFourAnimated text2="WHAT WE OFFER" />
          </div>
          <HeadingTwo text="Capture the precious moments of your couple" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-4">
          <ThreeDCard
            icon={icon1}
            title="Wedding day coverage"
            para="Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore and data."
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <ThreeDCard
            icon={icon2}
            title="Professional Photography"
            para="Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore and data."
          />
        </div>
        <div className="col-12 col-sm-6 col-md-4">
          <ThreeDCard
            icon={icon3}
            title="Pre-wedding Photoshoot"
            para="Consectetur adipiscing elit, sed do eiusm od tempor incididunt ut labore and data."
          />
        </div>
      </div>
    </>
  );
}
