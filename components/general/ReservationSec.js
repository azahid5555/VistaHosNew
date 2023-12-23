import Image from "next/image";

import HeadingTwo from "./HeadingTwo";
import HeadingFourAnimated from "./HeadingFourAnimated";
import HeadingThree from "./HeadingThree";
import FuzzyOverla from "./FuzzyOverlay";
export default function ReservationSec(props) {
  return (
    <section className="position-relative">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-between online-reserv-row">
          <div className="col-md-5 position-relative col-12">
            <div className="online-reserv-img position-relative overflow-hidden rounded">
              <FuzzyOverla />
              {props.ResImg && (
                <Image
                  alt="Online Reservation"
                  src={props.ResImg}
                  width={500}
                  height={500}
                  className=" img-fluid"
                />
              )}
              {props.video && (
                <video
                  className=" h-100 position-absolute top-0 bottom-0"
                  loop
                  muted
                  autoPlay
                >
                  <source src={props.video} />
                </video>
              )}
            </div>
            <div className="or-slog-div d-flex justify-content-center align-items-center z-3">
              <HeadingThree text="Seamless Reservations, Unforgettable Celebrations" />
            </div>
          </div>
          <div className="col-md-6 or-right-col d-flex justify-content-center align-items-center col-12 mt-5 mt-md-0">
            <div className="or-inner-content">
              <h3 className="subheading">Your Event, Your Way</h3>
              <HeadingTwo text="Seamless Event" text2="Reservations" />
              <p className="Vista_para_sm">
                Simplify your event planning with VistaHospitalitys Online
                Reservation. Streamlined for convenience, its your direct path
                to creating memorable experiences. <br />
                Let Vista Hospitality transform your vision into a reality.
                Reach out to us today to discuss how we can make your next event
                an extraordinary affair.
              </p>
              <div className="list-div pb-5">
                <div className="or-list-margin-b mb-0 ">
                  <HeadingFourAnimated text="01  Instant Availability" />
                </div>
                <div className="or-list-margin-b mb-0">
                  <HeadingFourAnimated text="02  Customization Options" />
                </div>
                <div className="or-list-margin-b mb-0">
                  <HeadingFourAnimated text="03  Secure Payments" />
                </div>
              </div>
              <div className="Vista_Btn_container btn_dark">
                <a href="#" className="Vista_btn">
                  <span className="Vista_btn_text">Book Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
