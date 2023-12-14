import Image from "next/image";
import charity_image from "@/public/assets/imgs/vista-hospitality-inn-annual-meetup copy.webp";
import HeadingTwo from "../general/HeadingTwo";
import VistaBtn from "../general/VistaBtn";
import HeadingFourAnimated from "../general/HeadingFourAnimated";

export default function AboutEventDetailFour(props) {
  return (
    <div className={props.className}>
      <div className="col-lg-4 cv-detail-img col-md-12 col-sm-12">
        <Image
          alt="charity-page-side-image"
          src={charity_image}
          className="object-fit-cover img-fluid"
        />
      </div>
      <div className="col-lg-7 ms-lg-auto ms-0 d-flex flex-column col-md-12 col-sm-12">
        <HeadingTwo text={props.mainTitle} />
        <div className="vista--subtitle pt-3">
          <p className="Vista_para_sm text-white ">{props.subtitle}</p>
        </div>
        <p className="Vista_para_sm text-white mt-4 mt-lg-3 mb-4">
          {props.para}
        </p>

        {props.featurelist && (
          <ul className="list-inline list-unstyled mb-4">
            {props.featurelist.map((li) => (
              <li className="d-flex align-items-center " key={li.id}>
                <i className="bi bi-check fs-3 clrPrime" />
                <HeadingFourAnimated text={li.feature_1} />
              </li>
            ))}
          </ul>
        )}
        <VistaBtn text={props.btntext} link={props.btnlink} />
      </div>
    </div>
  );
}
