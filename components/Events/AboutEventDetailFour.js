import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import VistaBtn from "../general/VistaBtn";
import HeadingFourAnimated from "../general/HeadingFourAnimated";

export default function AboutEventDetailFour(props) {
  return (
    <div className={props.className}>
      <div className="col-lg-4 cv-detail-img col-md-5 col-sm-8 col-12 mb-5 mb-md-0">
        {props.img && (
          <Image
            alt="charity-page-side-image"
            src={props.img}
            className="object-fit-cover img-fluid"
          />
        )}
        {props.video && (
          <div className=" text-end">
            <video className="w-75 rounded" loop muted autoPlay>
              <source src={props.video} />
            </video>
          </div>
        )}
      </div>
      <div className="col-lg-7 ms-0 d-flex flex-column col-md-7 col-sm-12 col-12">
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
