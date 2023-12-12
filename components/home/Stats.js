import Image from "next/image";
import FamImg from "@/public/assets/imgs/aboutBanner.webp";
import Icon from "@/public/assets/imgs/vIcon.webp";
import StatsCount from "./StatsCount";
import VideoSection from "../general/VideoSection";

const stats = [
  { title: "Event Spaces", value: "8", sufix: "+" },
  { title: "Year Experienced", value: "20", sufix: "+" },
  { title: "Event Types", value: "30", sufix: "+" },
  { title: "Satisfied Customers", value: "99.5", sufix: "%" },
  { title: "Square Feet", value: "50", sufix: "K" },
];

export default function Stats() {
  return (
    <section className="bgDark stats_con position-relative">
      <div className="container-fluid casaCon statCon">
        <div className="row">
          <div className="col-12">
            <div className="img_cover">
              <div className="overlay"></div>
              {/* <Image
                src={FamImg}
                alt="Casa Vista Happpy Family"
                className="img-fluid"
              /> */}
              <VideoSection video="/assets/vistaHospitalityVideo.mp4" />
              <div className="img_content">
                <div className="casa_features_con">
                  <div className="icon">
                    <div>
                      <Image src={Icon} alt="CasaIcon" />
                    </div>
                  </div>
                  <div className="features">
                    <ul>
                      <li>
                        <div className="list_wrapper">
                          <div className="listicon">
                            <i className="bi bi-check2"></i>
                          </div>
                          Stunning Event Spaces
                        </div>
                      </li>
                      <li>
                        <div className="list_wrapper">
                          <div className="listicon">
                            <i className="bi bi-check2"></i>
                          </div>
                          Canvas For Creativity
                        </div>
                      </li>
                      <li>
                        <div className="list_wrapper">
                          <div className="listicon">
                            <i className="bi bi-check2"></i>
                          </div>
                          Exclusive Lifestyle
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <StatsCount stats={stats} />
    </section>
  );
}
