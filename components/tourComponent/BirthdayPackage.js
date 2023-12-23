import HeadingTwo from "../general/HeadingTwo";
import ThreeDCardTwo from "./ThreeDCardTwo";

export default function BirthdayPackage(props) {
  return (
    <section className="musicalConcert__featuresec position-relative ">
      <div className="container-fluid vistaCon">
        <div className="row justify-content-between">
          <div className="col-lg-4 d-flex flex-column justify-content-start">
            <div className="sub--title pb-2">
              <span className="text-uppercase Vista_para_ssm ">
                {props.subtitle}
              </span>
            </div>
            {/* !adding the subheading end  */}
            <HeadingTwo text={props.mainTitle} text2={props.mainTitleWord} />
          </div>
          <div className="col-lg-6 d-flex align-items-center justify-content-center">
            <p className="Vista_para_sm text-white text-lg-end text-start ">
              {props.para}
            </p>
          </div>
        </div>

        {/* 3d card started from here  */}
        <div className="row pt-4 birthdayParkAdvantages">
          <div className="col-12 col-sm-6 col-md-4 text-center">
            <ThreeDCardTwo
              title={props.featureTitle1}
              para=""
              packageList_1={props.packageList_1}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center">
            <ThreeDCardTwo
              title={props.featureTitle2}
              para=""
              packageList_2={props.packageList_2}
            />
          </div>
          <div className="col-12 col-sm-6 col-md-4 text-center">
            <ThreeDCardTwo
              title={props.featureTite3}
              para=""
              packageList_3={props.packageList_3}
            />
          </div>
        </div>
        {/* 3d card ended from here  */}
      </div>
    </section>
  );
}
