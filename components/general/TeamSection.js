import HeadingTwo from "./HeadingTwo";
import VistaBtn from "./VistaBtn";
import TeamSlider from "./TeamSlider";
export default function TeamSection() {
  return (
    <section className="position-relative Team_con">
      <div className="container-fluid vistaCon mb-0 position-relative z-2">
        <div className="row align-items-center justify-content-between">
          <div className="col-12 col-md-5">
            <HeadingTwo text="Vista Hospitality, Where Passion Fuels Perfection" />
            <p className=" Vista_para_sm my-4">
              At Vista Hospitality, our team is the heartbeat of our commitment
              to exceptional experiences. Comprising individuals who are
              passionate, creative, and dedicated, we are united by a shared
              vision to make every celebration extraordinary.
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
