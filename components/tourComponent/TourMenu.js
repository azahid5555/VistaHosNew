import Image from "next/image";
import HeadingTwo from "../general/HeadingTwo";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingThree from "../general/HeadingThree";

export default function TourMenu(props) {
  return (
    <section className="TourMenu position-relative">
      <div className="container-fluid  TourMenu--con vistaCon">
        <div className="rounded p-5 bg-dark60">
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
          <div className="row pt-5 lower-wrapper ">
            <div className="col-6 d-flex flex-column gap-5">
              {/* !1st line warapper started */}

              {props.colOneRecepie_deatail.map(function (item) {
                return (
                  <div
                    className="row justify-content-around align-items-center"
                    key={item.id}
                  >
                    <div className="col-9 d-flex justify-content-evenly align-items-center">
                      <div className="rounded-circle">
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
                    <div className="col-2 recepie_price">
                      <h4>{item.col_1_recepiePrice}</h4>
                    </div>
                  </div>
                );
              })}

              {/* !1st line warapper ended */}
            </div>
            <div className="col-6 d-flex flex-column gap-5">
              {/* !1st line warapper started */}

              {props.colTwoRecepie_deatail.map(function (item) {
                return (
                  <div
                    className="row justify-content-around align-items-center"
                    key={item.id}
                  >
                    <div className="col-9 d-flex justify-content-evenly align-items-center">
                      <div className="rounded-circle">
                        <Image
                          alt="recepie-image"
                          src={item.col_2_recepieImage}
                          className="object-fit-cover img-fluid rounded-circle"
                        />
                      </div>
                      <div className="recepie-desc d-flex gap-2 flex-column">
                        <HeadingFourAnimated
                          text={item.col_2_recepieName}
                          className="text-center"
                        />
                        <p className="text-white pb-0 mb-0">
                          {item.col_2_recepiedesc}
                        </p>
                      </div>
                    </div>
                    <div className="col-2 recepie_price">
                      <h4>{item.col_2_recepiePrice}</h4>
                    </div>
                  </div>
                );
              })}

              {/* !1st line warapper ended */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
