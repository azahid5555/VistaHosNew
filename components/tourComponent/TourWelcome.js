import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingThree from "../general/HeadingThree";

export default function TourWelcome(props) {
  return (
    <section className="tourWelcome position-relative">
      <div className="container-fluid vistaCon">
        <div className="row align-items-center justify-content-center">
          {/* !left cvolumn started */}
          <div className="col-5 z-3">
            <div className="content-wrapper gap-2 py-5 px-2 bg-dark60 text-center d-flex flex-column justify-content-center align-items-center">
              <HeadingThree
                text2={props.subtitle}
                className="font-italic text-center"
              />
              <HeadingTwo text={props.mainTitle} className="text-center" />
              <div className="col-4">
                <Image
                  alt="cup-imgaes"
                  src={props.tourWelcome_5}
                  className=" object-fit-cover img-fluid w-100 h-100"
                />
              </div>

              <p className=" text-white-50">{props.para}</p>
            </div>
          </div>
          {/* !left column ended */}
          {/* right column for images started */}
          <div className="col-6 z-0">
            <div className="row pb-4">
              <div className="col-6">
                <Image
                  alt="cup-imgaes"
                  src={props.tourWelcome_1}
                  className=" object-fit-cover img-fluid w-100 h-100"
                />
              </div>
              <div className="col-6">
                <Image
                  alt="cup-imgaes"
                  src={props.tourWelcome_2}
                  className=" object-fit-cover img-fluid w-100 h-100"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <Image
                  alt="cup-imgaes"
                  src={props.tourWelcome_3}
                  className=" object-fit-cover img-fluid w-100 h-100"
                />
              </div>
              <div className="col-6">
                <Image
                  alt="cup-imgaes"
                  src={props.tourWelcome_4}
                  className=" object-fit-cover img-fluid w-100 h-100"
                />
              </div>
            </div>
          </div>
          {/* right column for images ended */}
        </div>
      </div>
    </section>
  );
}
