import Image from "next/image";
// import charity_image from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import HeadingTwo from "../general/HeadingTwo";

import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingThree from "../general/HeadingThree";

export default function ReservationCafe(props) {
  return (
    <section className="cafe-reservation position-relative ">
      <div className="container-fluid vistaCon">
        <div className="row justify-content-center g-0">
          {/* !left side image started */}
          <div class="col-lg-5">
            <div className="images--wrapper w-100 h-100">
              <Image
                alt="cafe-image"
                src={props.cafeimg3}
                className=" img-fluid object-fit-cover w-100 h-100 rounded"
              />
            </div>
          </div>
          {/* left side image ended */}
          {/* right side content started */}
          <div className="call-for-res col-lg-5 bg-dark60 py-5 d-flex justify-content-center align-items-center flex-column">
            <HeadingThree text2={props.subtitle} className="font-italic" />

            <HeadingTwo text={props.mainTitle} />
            <div className="col-lg-12 col-md-12 col-sm-12 p-3 mt-3">
              <div className="line mt-2" />
            </div>
            {/* timimng row started  */}
            <div className="row py-4  justify-content-center align-items-center">
              <div className="col-6 d-flex flex-column gap-4 text-center">
                <h4 className=" font-heading">{props.timing_1}</h4>
                <h4 className="text-center ">{props.start_Time}</h4>
                <h4 className="text-center ">{props.end_Time}</h4>
                <div className="line mt-2" />
              </div>
              <div className="col-6 text-center d-flex flex-column gap-4">
                <h4 className=" font-heading">{props.timing_1}</h4>
                <h4 className="text-center">{props.start_Time}</h4>
                <h4 className="text-center ">{props.end_Time}</h4>
                <div className="line" />
              </div>
            </div>
            {/* timimng row ended  */}

            <div className="Vista_Btn_container btn_dark vistabtnSmall text-center mt-4">
              <a href="#" className="Vista_btn">
                <span className="Vista_btn_text">Book Now</span>
              </a>
            </div>
          </div>
          {/* right side content ended  */}
        </div>
      </div>
    </section>
  );
}
