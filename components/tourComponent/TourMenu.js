import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingThree from "../general/HeadingThree";

export default function TourMenu(props) {
  return (
    <section className="TourMenu position-relative">
      <div className="container-fluid  TourMenu--con vistaCon">
        <div className="rounded p-2 p-md-5 bg-dark60">
          <div className="row justify-content-center align-items-center">
            <div className="upper-header col-12 align-items-center text-center ">
              <HeadingFourAnimated
                text2={props.subtitle}
                className="text-center"
              />
              <HeadingThree text={props.mainTitle} className="text-center" />

              <Image
                alt="cafe-image"
                src={props.menulineImage}
                className=" img-fluid object-fit-cover text-center  "
              />
            </div>
          </div>
          <div className="row pt-5 lower-wrapper">
            {props.colOneRecepie_deatail.map(function (item) {
              return (
                <div className="col-12 col-lg-6" key={item.id}>
                  <div className="row justify-content-around  mb-4">
                    <div className="col-9 d-flex align-items-center">
                      <div className="rounded-circle me-3">
                        <Image
                          alt="recepie-image"
                          src={item.col_1_recepieImage}
                          className="object-fit-cover img-fluid rounded-circle"
                        />
                      </div>
                      <div className="recepie-desc d-flex gap-2 flex-column">
                        <HeadingFourAnimated
                          text={item.col_1_recepieName}
                          className="text-center"
                        />
                        <p className="text-white pb-0 mb-0">
                          {item.col_1_recepiedesc}
                        </p>
                      </div>
                    </div>
                    <div className="col-2 recepie_price mt-2 d-flex justify-content-end align-items-baseline">
                      <h4 className=" font-link">{item.col_1_recepiePrice}</h4>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
