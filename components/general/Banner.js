import FuzzyOverla from "./FuzzyOverlay";
import HeadingOne from "./HeadingOne";

export default function Banner(props) {
  return (
    <section
      className="banner-aboutus justify-content-center d-flex align-items-end overflow-hidden"
      style={{ backgroundImage: `url(${props.bgImg.src})` }}
    >
      <FuzzyOverla />
      <div className="banner-bg-overlay" />
      <div className="banner-linear-gradient" />
      <div className="banner-sec-content container z-3 mb-3">
        <div className="row">
          <div className="col-6">
            <HeadingOne text={props.heading} />
            <p className="Vista_para_l">{props.para}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
