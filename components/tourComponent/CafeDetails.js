import Image from "next/image";
// import charity_image from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import HeadingTwo from "../general/HeadingTwo";

import HeadingFourAnimated from "../general/HeadingFourAnimated";

export default function CafeDetails(props) {
  return (
    <div className="row justify-content-evenly">
      <div className="col-lg-6 d-flex flex-column gap-4 col-sm-12 mb-4">
        <div className="row">
          <div className="col-12">
            <div className="sub--title">
              <HeadingFourAnimated text={props.subtitle} />
            </div>
          </div>
        </div>

        <HeadingTwo text={props.mainTitle} />

        <p className="Vista_para_sm text-white">{props.para}</p>

        <div className="vc-inner-con-img">
          <Image
            alt="charity-page-side-image"
            src={props.cafeimg1}
            className="object-fit-cover img-fluid w-100 h-100"
          />
        </div>
      </div>
      <div class="col-lg-5">
        <div className="images--wrapper w-100 h-100">
          <Image
            alt="cafe-image"
            src={props.cafeimg2}
            className=" img-fluid object-fit-cover w-100 h-100 rounded"
          />
        </div>
      </div>
    </div>
  );
}
