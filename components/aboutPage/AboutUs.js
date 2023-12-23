import Image from "next/image";
import img1 from "@/public/assets/imgs/vista_hospitality_Inn_6.webp";
import img2 from "@/public/assets/imgs/aboutTwo.webp";
import VistaBtn from "../general/VistaBtn";
import HeadingOne from "../general/HeadingOne";
import HeadingTwo from "../general/HeadingTwo";
export default function AboutUs() {
  return (
    <section className="aboutus-con  position-relative pb-1">
      <div className="container-fluid vistaCon position-relative z-2">
        <div className="row justify-content-between">
          <div className="col-sm-7 col-md-5 position-relative col-lg-5">
            <div className="about-year">
              <HeadingOne text="1998" />
              <h6 className=" text-end">START IN</h6>
            </div>
            <div className="about-img-left">
              <Image
                className=" img-fluid rounded object-fit-cover"
                alt="Vista Sweets"
                src={img2}
              />
            </div>
            <div className="about-img-right">
              <Image
                className=" img-fluid rounded object-fit-cover"
                alt="Vista Marquee"
                src={img1}
              />
            </div>
          </div>
          <div className="col-sm-12 col-md-5 col-lg-5 mt-5 mt-md-0 pt-4 pt-md-0">
            <div className="aboutus-inner-content">
              <h5 className="subheading vista_hos_title5 clrSec">
                Vista Hospitality INN
              </h5>
              <HeadingTwo text="Our Commitment to" text2="Excellence" />
              <p className="Vista_para_sm">
                At Vista Hospitality, we are dedicated to redefining the
                hospitality landscape, offering unparalleled services to make
                every occasion extraordinary. With a passion for delivering
                exceptional experiences and a commitment to excellence, we
                specialize in catering to diverse events, from corporate
                functions to exquisite weddings.
              </p>
              <div className="about-timing pt-2 pb-3 font-para">
                <h6 className=" font-link lh-sm">MON-FRI: 9 AM – 22 PM</h6>
                <h6 className=" font-link lh-sm">SATURDAY: 9 AM – 20 PM</h6>
              </div>
              <VistaBtn text="Book Now" link="/" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
