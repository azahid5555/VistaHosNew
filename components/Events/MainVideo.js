import Link from "next/link";
import HeadingOne from "../general/HeadingOne";
import VideoWithControls from "../general/VideoWithControls";
export default function MainVideo(props) {
  return (
    <>
      <section className="position-relative mainVideoSec overflow-hidden d-flex align-items-end">
        <div className="video_con">
          <video loop autoPlay muted>
            <source src={props.video} />
          </video>
        </div>
        <div className="overlayblack"></div>
        <div className=" container-fluid vistaCon mb-0">
          <div className="row">
            <div className="col-12 z-2">
              <div className="row border-bottom align-items-end">
                <div className="col-6 p-0 mb-2">
                  <h5 className=" font-heading mb-0">Vista Hospitality INN</h5>
                </div>
                <div className="col-6 text-end p-0 mb-2">
                  <Link
                    href="/"
                    className="text-white font-link text-decoration-none mainVideoBookBtn animated_link"
                  >
                    Book Now{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </Link>
                </div>
              </div>
              <div className="pt-4 d-flex justify-content-between align-items-center">
                <HeadingOne text="Escape To Paradise" />
                <div className="videoIconCon">
                  <div className="videoIconCon_wrapper">
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#videoModal"
                    >
                      <i class="bi bi-play-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="row mt-4 vistaDetailsCon">
                <div className="col-12 col-md-6 d-flex align-items-end align-items-sm-baseline">
                  <div className="icon text-white fs-1 fw-light me-2 me-md-4 mb-4 mb-sm-0">
                    <span>
                      <i class="bi bi-arrow-down"></i>
                    </span>
                  </div>
                  <div className="content">
                    <p className=" Vista_para_l">
                      Vista Hospitality Inn, where elegance meets the shoreline.
                      Immerse yourself in beachfront enchantment, where every
                      detail is a brushstroke of coastal charm.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  <h2 className=" vista_hos_title2">
                    At 69<span className=" font-para">/</span>70 Sector B,
                    Behria Town Lahore
                  </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div
        className="modal fade"
        id="videoModal"
        tabIndex={-1}
        aria-labelledby="videoModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg modal-dialog-centered ">
          <div className="modal-content bg-transparent border-0">
            <div className="modal-header border-0">
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body p-0">
              <VideoWithControls video={props.video} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
