import Image from "next/image";
import image1 from "@/public/assets/imgs/homeAbout.webp";
import image2 from "@/public/assets/imgs/blogDemo3.webp";
import image3 from "@/public/assets/icons/flowerIcon.svg";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import VistaBtn from "../general/VistaBtn";
export default function AboutEventDetailThree() {
  return (
    <section className="photography__wedding-album position-relative bg-dark60">
      <div className="container-fluid vistaCon">
        <div className="row">
          <div className="col-12">
            <div className="wedding__album--wrapper">
              <div className="wedding__album--content">
                <div className="row justify-content-center align-items-center for-gap">
                  {/* !left images column */}
                  <div className="col-lg-5 mb-5 mb-md-0 col-md-4">
                    <div className="album__image-wrapper">
                      <div className="album__image--content">
                        <div className="album__images--1">
                          <Image
                            alt="img"
                            src={image1}
                            className=" img-fluid"
                          />
                        </div>
                        <div className="album__images--3">
                          <Image
                            alt="iomg"
                            src={image3}
                            className="object-fit-contain"
                          />
                        </div>
                        <div className="album__images--2">
                          <Image
                            alt="img"
                            src={image2}
                            className=" img-fluid"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* !right content column */}
                  <div className="col-lg-5 col-md-5">
                    <div className="right-column py-5 d-flex flex-column justify-content-center gap-lg-4 gap-3">
                      <div className="upper--wrapper d-flex flex-column justify-content-center gap-lg-3 gap-2">
                        <div className="sub--title">
                          <span className="text-uppercase Vista_para_ssm">
                            THE BEST OF THE BEST
                          </span>
                        </div>
                        <div className="main-title">
                          <HeadingTwo
                            text="A Night of Culinary"
                            text2="Mastery"
                          />
                        </div>
                        <div>
                          <p className="Vista_para_sm m-0">
                            Savor an extraordinary culinary journey at our
                            annual dinner, where expertly crafted flavors meet
                            impeccable presentation. Experience gastronomic
                            delight in every bite, setting the stage for an
                            unforgettable evening.
                          </p>
                        </div>
                      </div>
                      <div className="lower--wrapper d-flex flex-column gap-4 ">
                        <div className="album-timing">
                          <HeadingFourAnimated text="Exquisite Menu Selection" />
                          <HeadingFourAnimated text="Fine Dining Ambiance" />
                        </div>
                        <VistaBtn text="Contact Us" link="/" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
