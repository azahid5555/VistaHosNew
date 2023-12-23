import Image from "next/image";
import img from "@/public/assets/imgs/vista_hospitality_Inn_3.webp";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
export default function HomeAboutUs() {
  return (
    <section className="position-relative">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-between align-items-center align-content-center  online-reserv-row flex-sm-column-reverse flex-md-row flex-column-reverse">
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
                Redefining Hospitality, Creating Memories
              </h3>
            </div>
          </div>
          <div className="col-md-6 or-right-col d-flex justify-content-center align-items-center col-sm-12">
            <div className="or-inner-content mb-4 mb-md-0 text-sm-center text-md-start">
              <h3 className="subheading">Your Event, Your Way</h3>
              <HeadingTwo text="Building Memories" text2="Vista Hospitality" />
              <p className="Vista_para_sm">
                At Vista Hospitality, we are passionate about crafting
                unparalleled experiences in the realm of hospitality. With a
                commitment to excellence and a dedication to personalized
                service, we curate moments that transcend expectations and etch
                themselves into cherished memories. Our journey is guided by a
                vision to redefine the standards of hospitality, ensuring every
                event we touch becomes a remarkable celebration of joy,
                elegance, and impeccable service.
              </p>
              <div className="list-div pb-5">
                <div className="or-list-margin-b">
                  <HeadingFourAnimated text="01  Tailored Hospitality Excellence" />
                </div>
                <div className="or-list-margin-b">
                  <HeadingFourAnimated text="02  Exquisite Venue Offerings" />
                </div>
                <div className="or-list-margin-b">
                  <HeadingFourAnimated text="03  Delectable Culinary Delights" />
                </div>
              </div>
              <div className="Vista_Btn_container btn_dark">
                <button
                  type="button"
                  className="Vista_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <span className="Vista_btn_text fw-bold">Book Now</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
