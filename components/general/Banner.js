import FuzzyOverla from "./FuzzyOverlay";
import HeadingOne from "./HeadingOne";

export default function Banner(props) {
  return (
    <section
      className="banner-aboutus justify-content-center d-flex align-items-end overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${props.bgImg.src})`,
      }}
    >
      <FuzzyOverla />
      <div className="banner-bg-overlay" />
      <div className="banner-linear-gradient" />
      <div className="banner-sec-content container-fluid vistaCon z-3 mb-3 pb-0">
        <div className="row">
          <div className="col-12 col-sm-11 col-md-9 col-lg-7">
            <HeadingOne text={props.heading} />
            <p className="Vista_para_l">{props.para}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
