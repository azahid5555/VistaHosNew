import Image from "next/image";
import image3 from "@/public/assets/icons/flowerIcon.svg";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import VistaBtn from "../general/VistaBtn";
export default function AboutEventDetailThree(props) {
  return (
    <div className="row pb-5">
      <div className="col-12">
        <div className="wedding__album--wrapper">
          <div className="wedding__album--content">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-md-5 col-12 col-sm-8">
                <div className="album__image-wrapper">
                  <div className="album__image--content">
                    <div className="album__images--1">
                      <Image
                        alt="img"
                        src={props.img1}
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
                        src={props.img2}
                        className=" img-fluid"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-5 col-md-6 col-12 mt-5 mt-md-0">
                <div className="right-column pt-5 pt-md-0 d-flex flex-column justify-content-center gap-lg-4 gap-3">
                  <div className="upper--wrapper d-flex flex-column justify-content-center gap-lg-3 gap-2">
                    <div className="sub--title">
                      <span className="text-uppercase Vista_para_ssm">
                        {props.subtitle}
                      </span>
                    </div>
                    <div className="main-title">
                      <HeadingTwo
                        text={props.title1text1}
                        text2={props.title1text2}
                      />
                    </div>
                    <div>
                      <p className="Vista_para_sm m-0">{props.para}</p>
                    </div>
                  </div>
                  <div className="lower--wrapper d-flex flex-column gap-4 ">
                    <div className="album-timing">
                      <HeadingFourAnimated text={props.feature1} />
                      <HeadingFourAnimated text={props.feature2} />
                    </div>
                    <VistaBtn text={props.btntitle} link={props.btnlink} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
