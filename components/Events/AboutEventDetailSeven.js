"use client";
import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";

export default function AboutEventDetailSeven(props) {
  return (
    <section className="CulinaryExcellence-sec position-relative">
      <div className="container-fluid vistaCon">
        <div className="row pt-3 pb-5 gap-5">
          <div className="col-lg-5 cv-right-img col-md-12 px-5 col-sm-12 ms-xl-4">
            <Image
              alt="img"
              src={props.detailSevenImg}
              className="object-fit-cover img-fluid w-100 h-100"
            />
          </div>
          <div className="col-lg-6 d-flex flex-column col-md-12 col-sm-12">
            <div className="sub--title pb-2">
              <span className="text-uppercase Vista_para_ssm ">
                {props.subtitle}
              </span>
            </div>
            <HeadingTwo text={props.mainTitle} text2={props.mainTitleWord} />
            <p className="Vista_para_sm text-white mt-4 mt-lg-3">
              {props.para}
            </p>
            {/* !adding the features in it  */}
            <div className="main-feature--wrapper pt-sm-4 pt-3 d-flex flex-sm-row flex-column justify-content-between">
              <div className="feature-wrapper text-sm-start text-center ">
                <HeadingFourAnimated text={props.feature_1} />
                <p className="Vista_para_sm   feature-des">
                  {props.feature1_desc}
                </p>
              </div>
              <div className="feature-wrapper text-sm-start text-center">
                <HeadingFourAnimated text={props.feature_2} />
                <p className="Vista_para_sm text-white feature-des">
                  {props.feature2_desc}
                </p>
              </div>
            </div>
            {/* !adding the counters here */}
            <div className="main-counter--wrapper row pt-5">
              {/* !1st column  */}
              <div className="col-sm-4 col-12">
                <div className="counter d-flex align-items-center justify-content-center gap-2">
                  <h2 class="text-white h2 vista_hos_title2 ">
                    <span class="clrPrime counter--num font-para">
                      {props.counterNum_1}
                    </span>
                  </h2>

                  <p className="Vista_para_l text-white lh-sm ">
                    {props.countertitle_1}
                  </p>
                </div>
              </div>
              {/* !2nd column */}
              <div className="col-sm-4 col-12">
                <div className="counter d-flex align-items-center justify-content-center gap-2">
                  <h2 class="text-white h2 vista_hos_title2 ">
                    <span class="clrPrime counter--num font-para">
                      {props.counterNum_2}
                    </span>
                  </h2>

                  <p className="Vista_para_l text-white lh-sm ">
                    {props.countertitle_2}
                  </p>
                </div>
              </div>
              {/* !3rd column */}
              <div className="col-sm-4 col-12">
                <div className="counter d-flex align-items-center justify-content-center gap-2">
                  <h2 class="text-white h2 vista_hos_title2 ">
                    <span class="clrPrime counter--num font-para">
                      {props.counterNum_3}
                    </span>
                  </h2>

                  <p className="Vista_para_l text-white lh-sm ">
                    {props.countertitle_3}
                  </p>
                </div>
              </div>
              {/* !end of all columns */}
            </div>
            {/* !ending of counter here */}
            {/* !features are ended */}
          </div>
        </div>
      </div>
    </section>
  );
}
