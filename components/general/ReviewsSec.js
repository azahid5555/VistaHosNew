import Link from "next/link";
import HeadingTwo from "./HeadingTwo";
import crossIcon from "@/public/assets/icons/btnclose.svg";
import ReviewsSlider from "./ReviewsSlider";

export default function ReviewsSec() {
  return (
    <>
      <section className="reviews_con position-relative pt-5 mb-5 mt-5">
        <div className="container-fluid statCon">
          <div className="row mb-4">
            <div className="col-12">
              <div className="Sectitle2 text-center mb-3">
                <HeadingTwo text="Reviews" />
              </div>
            </div>
          </div>
          <div className="row">
            <ReviewsSlider />
          </div>
          <div className="row mt-5 text-center justify-content-center viewAllRev">
            <div className="col-12 z-2">
              <Link
                href="/all-reviews"
                className=" animated_link font-link text-uppercase"
              >
                View All
              </Link>
            </div>
          </div>
          <div className="row leaveRevBtn_con mt-4 justify-content-center">
            <div className="col-12 z-2 text-center">
              <div className="Vista_Btn_container btn_dark vistaBtn_large">
                <button
                  type="button"
                  className="Vista_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#reviewModal"
                >
                  <span className="Vista_btn_text">Leave Your Review</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="reviewModal"
        tabIndex={-1}
        aria-labelledby="reviewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered enquiryModal">
          <div className="modal-content">
            <div className="modal-body py-5 position-relative">
              <button
                type="button"
                className="btn-close"
                style={{ backgroundImage: `url(${crossIcon.src})` }}
                data-bs-dismiss="modal"
                aria-label="Close"
              />
              <div className="row">
                <div className="col-12">
                  <h2 className="text-white text-center fw-lighter">
                    ADD YOUR REVIEW
                  </h2>
                  <p className="text-white60 text-center">
                    Let Us Know About Your Experience With Us
                  </p>
                </div>
              </div>
              <div className="row mt-4">
                <div className="col-12">{/* <ReviewsForm /> */}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
