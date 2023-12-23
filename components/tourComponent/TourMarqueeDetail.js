import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";

export default function TourMarqueeDetail(props) {
  return (
    <section className="wtour-sec position-relative">
      <div className="container-fluid vistaCon mb-0 mb-sm-auto">
        <div className="row align-items-center">
          <div className="col-md-3 col-sm-5">
            <Image alt="charity-page-side-image" src={props.tourMarqueeImg} />
          </div>
          <div className="col-md-6 col-sm-7 d-flex text-white justify-content-start mt-2 mt-sm-0">
            <HeadingTwo text={props.mainTitle} />
          </div>
          <div className="col-md-3 col-12 d-flex align-items-center justify-content-center mt-sm-4 mt-2 mt-md-0">
            <p className="Vista_para_sm text-white">{props.para}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
