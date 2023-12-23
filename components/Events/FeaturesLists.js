import Image from "next/image";
import img1 from "@/public/assets/imgs/golden__leave.png";
import img2 from "@/public/assets/imgs/golden__paint.png";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
export default function FeaturesLists(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="Event__feature-wrapper py-5 text-center">
          <div className="row justify-content-center">
            {props.featureList.map((list) => (
              <div className="col-md-4 col-6 mb-3" key={list.id}>
                <div className="feature__image-wrapper d-flex flex-column gap-3">
                  <div className="feature__image">
                    <Image alt="feature 1" src={list.img} />
                  </div>
                  <div className="faeture__content-wrapper text-center d-flex flex-column gap-3 px-2 px-md-3 px-lg-5">
                    <HeadingFourAnimated text2={list.title} />
                    <p className="text-center fw-normal fs-6  Vista_para_l">
                      {list.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
