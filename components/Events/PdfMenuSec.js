import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingTwo from "../general/HeadingTwo";

export default function PdfMenuSec() {
  return (
    <section className="Offsite-catering-section">
      <div className="container catering-menus">
        <div className="row">
          <div className="col-lg-12 col-md-12 mt-5 text-center">
            <HeadingTwo text2="Offsite Catering Menus" />
          </div>
        </div>
        <div className="row text-center mt-5 p-5">
          <div className="col-lg-4 col-md-6 col-sm-12 pdf-sec">
            <HeadingFourAnimated text2="CLASSIC" />
            <p className=" Vista_para_sm font-link">CATERING MENU</p>
            <a
              href="#"
              className="text-white classic-PDF font-para text-decoration-none"
            >
              Download PDF
              <span className="ms-2 click_here">
                <i class="bi bi-chevron-down"></i>
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pdf-sec">
            <HeadingFourAnimated text2="CLASSIC" />
            <p className=" Vista_para_sm font-link">CATERING MENU</p>
            <a
              href="#"
              className="text-white classic-PDF font-para text-decoration-none"
            >
              Download PDF
              <span className="ms-2 click_here">
                <i class="bi bi-chevron-down"></i>
              </span>
            </a>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 pdf-sec">
            <HeadingFourAnimated text2="CLASSIC" />
            <p className=" Vista_para_sm font-link">CATERING MENU</p>
            <a
              href="#"
              className="text-white classic-PDF font-para text-decoration-none"
            >
              Download PDF
              <span className="ms-2 click_here">
                <i class="bi bi-chevron-down"></i>
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
