import Image from "next/image";
import img1 from "@/public/assets/imgs/aboutOne.webp";
import img2 from "@/public/assets/imgs/aboutTwo.webp";
import VistaBtn from "../general/VistaBtn";
import HeadingOne from "../general/HeadingOne";
import HeadingTwo from "../general/HeadingTwo";
export default function AboutUs() {
  return (
    <section className="aboutus-con  position-relative pb-1">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-between">
          <div className="col-md-12 position-relative col-lg-5">
            <div className="about-year">
              <HeadingOne text="1998" />
              <h6 className=" text-end">START IN</h6>
            </div>
            <div className="about-img-left">
              <Image
                className=" img-fluid rounded"
                alt="Vista Sweets"
                src={img2}
              />
            </div>
            <div className="about-img-right">
              <Image
                className=" img-fluid rounded"
                alt="Vista Marquee"
                src={img1}
              />
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="aboutus-inner-content">
              <h5 className="subheading vista_hos_title5 clrSec">
                Vista Hospitality INN
              </h5>
              <HeadingTwo text="Our Commitment to" text2="Excellence" />
              <p className="Vista_para_sm">
                Welcome to Vista Hospitality, where the art of hospitality meets
                a commitment to creating timeless experiences. We are more than
                a venue; we are curators of moments, architects of joy, and
                storytellers of your celebrations.
              </p>
              <div className="about-timing pt-2 pb-3">
                <h6>MON-FRI: 9 AM – 22 PM</h6>
                <h6>SATURDAY: 9 AM – 20 PM</h6>
              </div>
              <VistaBtn text="Book Now" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
