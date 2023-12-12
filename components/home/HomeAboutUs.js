import Image from "next/image";
import img from "@/public/assets/imgs/homeAbout.webp";
import HeadingTwo from "../general/HeadingTwo";
export default function HomeAboutUs() {
  return (
    <section className="position-relative">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-between align-content-center  online-reserv-row">
          <div className="col-md-5 position-relative col-sm-12 col-lg-5">
            <div className="online-reserv-img">
              <Image
                alt="Online Reservation"
                src={img}
                className=" img-fluid"
              />
            </div>
            <div className="or-slog-div d-flex">
              <h3 className="d-flex justify-content-center align-items-center">
                Seamless Reservations, Unforgettable Celebrations
              </h3>
            </div>
          </div>
          <div className="col-md-6 or-right-col d-flex justify-content-center align-items-center col-sm-12">
            <div className="or-inner-content">
              <h3 className="subheading">Your Event, Your Way</h3>
              <HeadingTwo text="Building Memories" text2="Vista Hospitality" />
              <p className="Vista_para_sm">
                Welcome to Vista Hospitality, where the essence of hospitality
                is artfully woven into every experience. Established with a
                vision to redefine celebrations, we take pride in being more
                than just a venue—we are curators of unforgettable moments.
              </p>
              <div className="list-div pb-5">
                <h4 className="or-list-margin-b">
                  <span className="or-feature-list">01</span>Elegance Redefined
                </h4>
                <h4 className="or-list-margin-b">
                  <span className="or-feature-list">02</span>Personalized
                  Service
                </h4>
                <h4 className="or-list-margin-b">
                  <span className="or-feature-list">03</span>Cultural Fusion
                </h4>
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
