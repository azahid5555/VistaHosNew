import HeadingOne from "../general/HeadingOne";
import HeadingThree from "../general/HeadingThree";
import VistaBtn from "../general/VistaBtn";
import VistaBtnLight from "../general/VistaBtnLight";

export default function HeroInnerPages(props) {
  return (
    <section className="Event__subHero-section wedding__hero-section position-relative">
      <div className=" container-fluid vistaCon mb-0">
        <div className="row">
          <div className="col-12">
            <div className="inner__content subhero-container">
              <div className="row g-0 align-items-center justify-content-center">
                <div className="heading__radial-gradient justify-content-center">
                  <div className="col-lg-12 col-md-12 pb-4 pb-lg-0">
                    <div className="headline__text-wrapper faeture__content-wrapper">
                      <div className=" d-flex justify-content-center">
                        <HeadingThree text={props.subtitle} />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 pt-2 col-md-12 pb-4 pb-lg-0">
                    <div className="headline__text-wrapper text-center text-uppercase">
                      <HeadingOne text={props.title1} text2={props.title2} />
                    </div>
                  </div>
                  {props.para && (
                    <div className="col-12 col-md-7">
                      <p className=" Vista_para_sm text-center">
                        {" "}
                        {props.para}
                      </p>
                    </div>
                  )}
                  <div className="col-lg-12 pt-2 mt-3 col-md-12 pb-4 pb-lg-0">
                    <div className="vista__button-wrapper">
                      <div className="vista__button-wrapper--content gap-3 justify-content-center flex-md-row flex-column d-flex">
                        <VistaBtnLight text="Book Reservation" link="/" />
                        <VistaBtn text="Contact Us" link="/" />
                      </div>
                    </div>
                  </div>
                </div>
                {/* end of content */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
