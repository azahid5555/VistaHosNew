import HeadingTwo from "./HeadingTwo";
import VistaBtn from "./VistaBtn";
import TeamSlider from "./TeamSlider";
export default function TeamSection() {
  return (
    <section className="position-relative Team_con">
      <div className="container-fluid vistaCon mb-0 position-relative z-2">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5 mb-4 mb-md-0">
            <HeadingTwo text="Vista Hospitality, Where Dedication Drives Excellence" />
            <p className=" Vista_para_sm my-4">
              At Vista Hospitality, our team forms the core of our dedication to
              delivering outstanding experiences. Our team consists of
              passionate, creative, and devoted individuals who share a common
              vision: to make every celebration truly extraordinary.
            </p>
            <div>
              <VistaBtn text="View All Team" link="#" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <TeamSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
