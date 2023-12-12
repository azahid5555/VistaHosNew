import HeadingTwo from "../general/HeadingTwo";
import TextMarquee from "../general/TextMarquee";
import TextMarqueeTwo from "../general/TextMarqueeTwo";
import VistaBtnLarge from "../general/VistaBtnLarge";
import PossibilitiesBottom from "./PossibilitiesBottom";

export default function Possibilities() {
  return (
    <section className="position-relative  possibilitiesSec VistaSec_topBorder_grade bg-dark60">
      <div className="container-fluid vistaCon position-relative mb-0 pb-0  z-3">
        <div className="row z-3">
          <div className="col-12 z-3">
            <HeadingTwo text="Grand Celebrations at Vista" />
          </div>
        </div>
      </div>
      <div className="position-relative container-fluid mt-3 marquees_con">
        <div className="row">
          <div className="col-12">
            <TextMarquee />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TextMarqueeTwo />
          </div>
        </div>
      </div>
      <div className="container-fluid vistaCon position-relative mt-0 pt-0 mb-0 z-3 text-end">
        <div className="row z-3">
          <div className="col-12 col-sm-6 text-start">
            <VistaBtnLarge text="See all possibilities" link="/" />
          </div>
          <div className="col-12 col-sm-6 z-3">
            <HeadingTwo text="Start Here" />
          </div>
        </div>
      </div>
      <div className=" pb-5">
        <PossibilitiesBottom />
        <div className="w-100 h-100 py-5"></div>
      </div>
    </section>
  );
}
