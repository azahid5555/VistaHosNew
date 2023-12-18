import HeadingTwo from "../general/HeadingTwo";
import ThreeDCard from "../general/ThreeDCard";

export default function ServiceFeature(props) {
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
        <div className="row pt-4">
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <ThreeDCard
              icon={props.serviceFeatureImg1}
              title={props.featureTitle1}
              para=""
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <ThreeDCard
              icon={props.serviceFeatureImg2}
              title={props.featureTitle2}
              para=""
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <ThreeDCard
              icon={props.serviceFeatureImg3}
              title={props.featureTite3}
              para=""
            />
          </div>
          <div className="col-12 col-sm-6 col-md-3 text-center">
            <ThreeDCard
              icon={props.serviceFeatureImg4}
              title={props.featureTite4}
              para=""
            />
          </div>
        </div>
        {/* 3d card ended from here  */}
      </div>
    </section>
  );
}
