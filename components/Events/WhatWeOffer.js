import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingTwo from "../general/HeadingTwo";
import ThreeDCard from "../general/ThreeDCard";
export default function WhatWeOffer(props) {
  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-7 col-md-6 text-center mb-5">
          <div className="sub--title">
            <HeadingFourAnimated text2={props.subHeading} />
          </div>
          <HeadingTwo text={props.heading} />
        </div>
      </div>
      <div className="row">
        {props.cardsArray.map((card, i) => (
          <div className="col-12 col-sm-6 col-md-4" key={i}>
            <ThreeDCard icon={card.icon} title={card.title} para={card.para} />
          </div>
        ))}
      </div>
    </>
  );
}
