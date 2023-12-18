import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";

export default function TourMarqueeDetail(props) {
  return (
    <section className="wtour-sec position-relative">
      <div className="container-fluid vistaCon">
        <div className="row">
          <div className="col-lg-3">
            <Image alt="charity-page-side-image" src={props.tourMarqueeImg} />
          </div>
          <div className="col-lg-6 d-flex text-white justify-content-start">
            <HeadingTwo text={props.mainTitle} />
          </div>
          <div className="col-lg-3 d-flex align-items-center justify-content-center">
            <p className="Vista_para_sm text-white">{props.para}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
