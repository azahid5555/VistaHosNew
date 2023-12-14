import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import VistaBtn from "../general/VistaBtn";
export default function AboutEventDetailSix(props) {
  return (
    <section className="photography__wedding-album party--details--sec position-relative ">
      <div className="container-fluid vistaCon">
        <div className="row">
          <div className="col-12">
            <div className="wedding__album--wrapper">
              <div className="wedding__album--content">
                <div className="row justify-content-center align-items-center for-gap">
                  {/* !left images column */}
                  <div className="col-lg-5 mb-5 mb-md-0 col-md-7 col-9 col-sm-8 pb-4 pb-lg-0">
                    <div className="album__image-wrapper">
                      <div className="album__image--content">
                        <div className="album__images--1 main-image">
                          <Image
                            alt="side-image-detail"
                            src={props.detailImg1}
                            className=" img-fluid object-fit-cover"
                          />
                        </div>
                        <div className="album__images--2 middle--image position-absolute">
                          <Image
                            alt="side-image-detail"
                            src={props.detailImg2}
                            className=" img-fluid object-fit-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* !left side ended here  */}
                  {/* !right side of content started */}
                  <div className="col-lg-5 d-flex flex-column pt-3 col-md-12 col-sm-12">
                    <div className="sub--title pb-2">
                      <span className="text-uppercase Vista_para_ssm">
                        {props.subtitle}
                      </span>
                    </div>
                    <HeadingTwo text={props.mainTitle} />

                    <div className="col-12 p-3">
                      <div className="line" />
                    </div>
                    <p className="Vista_para_sm text-white mt-4 mt-lg-3">
                      {props.para}
                    </p>
                    {/* !adding the features in it  */}
                    {/* !lower seprator section */}
                    <div className="row justify-content-around flex-md-row flex-column gap-md-0 gap-3 align-items-center pt-lg-4 pt-2">
                      {/* !1st feature image */}
                      <div className="wrapper--feature col-lg-5 col-md-3 col-5">
                        <div className="image--wrapper position-relative">
                          <Image
                            alt="Our Story"
                            src={props.featureImg}
                            className=" img-fluid object-fit-cover"
                          />
                          <div className="text-white position-absolute image__feature--text">
                            <h5 className="h5 vista_hos_title5 text-center lh-sm">
                              {props.feature1}
                              <br />
                              {props.feature1br}
                            </h5>
                          </div>
                        </div>
                      </div>
                      {/*!2nd feature image */}
                      <div className="wrapper--feature col-lg-5 col-md-3 col-5 pt-md-0 pt-2">
                        <div className="image--wrapper position-relative">
                          <Image
                            alt="Our Story"
                            src={props.featureImg}
                            className=" img-fluid object-fit-cover"
                          />
                          <div className="text-white position-absolute image__feature--text">
                            <h5 className="h5 vista_hos_title5 text-center lh-sm">
                              {props.feature2}
                              <br />
                              {props.feature2br}
                            </h5>
                          </div>
                        </div>
                      </div>
                      {/*!2nd feature image end */}
                      {/* <h6 class="h6 text-white">Savor Regal Moments Together.</h6> */}
                    </div>
                    {/* !lower seprater section neded */}
                    <div className="button--wrapper justify-content-md-around d-flex flex-md-row justify-content-center align-items-center flex-column pt-5">
                      {/* !button_1 */}
                      <div className="Vista_Btn_container btn_light">
                        <a href="#" className="Vista_btn">
                          <span className="Vista_btn_text">
                            Book Reservation
                          </span>
                        </a>
                      </div>
                      {/* !button_1 */}
                      <div className="Vista_Btn_container btn_light">
                        <a href="#" className="Vista_btn">
                          <span className="Vista_btn_text">Contact Us</span>
                        </a>
                      </div>
                      {/*! end buttons */}
                    </div>
                    {/* !features are ended */}
                  </div>
                  {/* !right side of content ended */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
