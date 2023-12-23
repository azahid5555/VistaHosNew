import Image from "next/image";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingTwo from "../general/HeadingTwo";
export default function FeaturesListsTwo(props) {
  return (
    <div className="row">
      <div className="col-12">
        <div className="Event__feature-wrapper py-5 text-center">
          <HeadingTwo text={props.title} />
          <div className="row justify-content-center pt-4">
            {props.featureList_2.map((list) => (
              <div className="col-lg-4 col-12 col-sm-6 mb-3" key={list.id}>
                <div className="feature__image-wrapper d-flex flex-column gap-3">
                  <div className="feature__image">
                    <Image alt="feature 1" src={list.img} />
                  </div>
                  <div className="faeture__content-wrapper text-center d-flex flex-column gap-3 px-1 px-sm-5">
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
