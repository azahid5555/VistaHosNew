import logo from "@/public/assets/imgs/logo.webp";
import Image from "next/image";
import HeadingTwo from "./HeadingTwo";
import HeadingOne from "./HeadingOne";
import HeadingThree from "./HeadingThree";
import { useState } from "react";
export default function InquiryModal() {
  const [currentStep, setCurrentStep] = useState(1);

  const handleNext = () => {
    setCurrentStep(currentStep + 1);
  };

  const handlePrevious = () => {
    setCurrentStep(currentStep - 1);
  };

  return (
    <div
      className="modal fade inquiryModla"
      id="staticBackdrop"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabIndex={-1}
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content bg-black">
          <div className="modal-header container-fluid container-small justify-content-between py-2 border-0">
            <div className="logo_con" style={{ width: "15%" }}>
              <a className="navbar-brand font-heading" href="#">
                <Image src={logo} alt="logo" className="img-fluid" />
              </a>
            </div>
            <HeadingTwo text="Lets" text2="Talk" />
            <div className="Vista_Btn_container btn_dark vistabtnSmall">
              <button
                type="button"
                className="Vista_btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span className="Vista_btn_text fw-bold">Close</span>
              </button>
            </div>
          </div>
          <div className="modal-body">
            <form>
              <div className="container-fluid  inquiryFormCon">
                <div className="inquiryForm_wrapper">
                  <span className=" font-link text-white fw-bold mb-2 d-inline-block w-100">
                    1 About Your Event
                  </span>
                  {currentStep === 1 && (
                    <div className="row gap-4 formPart1">
                      <div className="col-3 d-flex flex-column justify-content-between">
                        <div className="inquiryContent">
                          <HeadingThree text2="About Your Event" />
                          <p className=" Vista_para_sm">
                            Tell us everything this is to be know about the
                            special event you are planning
                          </p>
                        </div>
                        <div className="inquiry_btn_con">
                          <div className="contactbtn_Wrapper">
                            <div className="Vista_Btn_container btn_dark vistabtnSmall">
                              <button
                                type="button"
                                className="Vista_btn"
                                style={{ width: "9rem" }}
                                onClick={handleNext}
                              >
                                <span className="Vista_btn_text fw-bold">
                                  Next
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="inquiry_subform_con d-flex flex-column gap-2">
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Event Name
                              </span>
                            </label>
                            <input
                              type="text"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="What do we call this thing?"
                              required4
                            />
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Event Type
                              </span>
                            </label>
                            <select
                              name="event_type"
                              className="px-3 pb-1 border-0 rounded-2 inquiryInput"
                              data-value=""
                              type="string"
                              required
                            >
                              <option value="" selected disabled>
                                Select your event type
                              </option>
                              <option value="birthday_party">
                                Birthday Party
                              </option>
                              <option value="wedding_reception">
                                Wedding Reception
                              </option>
                              <option value="wedding_ceremony">
                                Wedding Ceremony
                              </option>
                              <option value="wedding_ceremony_and_reception">
                                Wedding Ceremony &amp; Reception
                              </option>
                              <option value="sweet_16">Sweet 16</option>
                              <option value="quince">Quince</option>
                              <option value="graduation_party">
                                Graduation Party
                              </option>
                              <option value="baby_shower">Baby Shower</option>
                              <option value="bridal_shower">
                                Bridal Shower
                              </option>
                              <option value="surprise_party">
                                Surprise Party
                              </option>
                              <option value="party">Party</option>
                              <option value="business">Business</option>
                              <option value="conference_workshop">
                                Conference/Workshop
                              </option>
                              <option value="luncheon">Luncheon</option>
                              <option value="dinner">Dinner</option>
                              <option value="school_event">School Event</option>
                              <option value="anniversary">Anniversary</option>
                              <option value="holiday_party">
                                Holiday Party
                              </option>
                              <option value="fundraiser">Fundraiser</option>
                              <option value="memorial">Memorial</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Event Date
                              </span>
                            </label>
                            <input
                              type="date"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="What do we call this thing?"
                              required4
                            />
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Event Time
                              </span>
                            </label>
                            <select
                              name="event_time"
                              className="px-3 pb-1 border-0 rounded-2 inquiryInput"
                              data-value=""
                              type="string"
                              required
                            >
                              <option value="" selected disabled>
                                Select your event time
                              </option>
                              <option value="morning">Morning</option>
                              <option value="Lunch">Lunch</option>
                              <option value="Lunch">Evening</option>
                              <option value="Lunch">Night</option>
                            </select>
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Head Count
                              </span>
                            </label>
                            <input
                              type="number"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="100"
                              required4
                            />
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Desired Space
                              </span>
                            </label>
                            <select
                              name="desired_space"
                              id=""
                              className="px-3 pb-1 border-0 rounded-2 inquiryInput"
                              data-value=""
                              type="string"
                              required
                            >
                              <option value="select">Select a space</option>
                              <option value="select">
                                Vista Engagement Park
                              </option>
                              <option value="select">
                                Vista Lawn Pool Side
                              </option>
                              <option value="select">
                                Vista Birthday Park
                              </option>
                              <option value="select">Vista Ava Lawn</option>
                              <option value="select">Vista Marquee</option>
                              <option value="select">LA Vista Cafe</option>
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  )}
                </div>

                <div className="inquiryForm_wrapper">
                  <span className=" font-link text-white fw-bold mb-2 d-inline-block w-100">
                    2 Contact details
                  </span>
                  {currentStep === 2 && (
                    <div className="row gap-4 formPart2">
                      <div className="col-3 d-flex flex-column justify-content-between">
                        <div className="inquiryContent">
                          <HeadingThree text2="Contact details" />
                          <p className=" Vista_para_sm">
                            Amazing, let us know how can we get ahold of you so
                            we can talk further.
                          </p>
                        </div>
                        <div className="inquiry_btn_con">
                          <div className="contactbtn_Wrapper d-flex justify-content-between">
                            <div className="Vista_Btn_container btn_dark vistabtnSmall d-flex justify-content-between btn_light">
                              <button
                                type="button"
                                className="Vista_btn"
                                style={{ width: "9rem" }}
                                onClick={handlePrevious}
                              >
                                <span className="Vista_btn_text fw-bold">
                                  Previous
                                </span>
                              </button>
                            </div>
                            <div className="Vista_Btn_container btn_dark vistabtnSmall d-flex justify-content-between">
                              <button
                                type="button"
                                className="Vista_btn"
                                style={{ width: "9rem" }}
                                onClick={handleNext}
                              >
                                <span className="Vista_btn_text fw-bold">
                                  Next
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="inquiry_subform_con d-flex flex-column gap-2">
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Full Name
                              </span>
                            </label>
                            <input
                              type="text"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="What's your full name?"
                              required4
                            />
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Email
                              </span>
                            </label>
                            <input
                              type="email"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="someone@mail.com?"
                              required4
                            />
                          </div>
                          <div className="vista_form_row d-flex flex-column position-relative">
                            <label className=" py-1 px-3 z-3">
                              <span className=" font-link text-white">
                                Phone Number
                              </span>
                            </label>
                            <input
                              type="tel"
                              className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                              placeholder="+92 300 1234 567"
                              required4
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  )}
                </div>
                <div className="inquiryForm_wrapper">
                  <span className=" font-link text-white fw-bold mb-2 d-inline-block w-100">
                    3 Recap
                  </span>
                  {currentStep === 3 && (
                    <div className="row gap-4 formPart2">
                      <div className="col-3 d-flex flex-column justify-content-between">
                        <div className="inquiryContent">
                          <HeadingThree text2="Recap" />
                          <p className=" Vista_para_sm">
                            Here’s what we’ve heard, if everything looks okay
                            hit “submit.”
                          </p>
                        </div>
                        <div className="inquiry_btn_con">
                          <div className="contactbtn_Wrapper d-flex justify-content-between">
                            <div className="Vista_Btn_container btn_dark vistabtnSmall d-flex justify-content-between btn_light">
                              <button
                                type="button"
                                className="Vista_btn"
                                style={{ width: "9rem" }}
                                onClick={handlePrevious}
                              >
                                <span className="Vista_btn_text fw-bold">
                                  Previous
                                </span>
                              </button>
                            </div>
                            <div className="Vista_Btn_container btn_dark vistabtnSmall d-flex justify-content-between">
                              <button
                                type="button"
                                className="Vista_btn"
                                style={{ width: "9rem" }}
                              >
                                <span className="Vista_btn_text fw-bold">
                                  Submit
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-6">
                        <div className="inquiry_subform_con d-flex flex-column gap-2 inquiryRecap_con">
                          <div className=" w-100 mb-4">
                            <div className=" w-100">
                              <span
                                className=" font-link text-white mb-2 d-inline-block w-100"
                                style={{ fontSize: "12px" }}
                              >
                                YOUR INFORMATION
                              </span>
                            </div>
                            <div className="w-100 infoCon d-flex text-white font-para">
                              <div className="name">Ali Zahid</div>
                              <div className="email">azahid5555@gmail.com</div>
                              <div className="number">+92-323-7478-717</div>
                            </div>
                          </div>
                          <div className=" w-100 mb-4">
                            <div className=" w-100">
                              <span
                                className=" font-link text-white mb-2 d-inline-block w-100"
                                style={{ fontSize: "12px" }}
                              >
                                YOUR MESSAGE
                              </span>
                            </div>
                            <h2 className=" vista_hos_title2">
                              You’re inquiring about having a
                              <span className=" text-decoration-underline">
                                Luncheon
                              </span>
                              in
                              <span className=" text-decoration-underline">
                                Palm Terrace
                              </span>
                              on
                              <span className=" text-decoration-underline">
                                December 15, 2023
                              </span>
                              at
                              <span className=" text-decoration-underline">
                                6pm
                              </span>
                              for
                              <span className=" text-decoration-underline">
                                1111
                              </span>
                              guests.
                            </h2>
                          </div>
                          <div className="w-100">
                            <div
                              className="vista_form_row d-flex flex-column position-relative"
                              style={{ height: "200px" }}
                            >
                              <label className=" py-1 px-3 z-3">
                                <span className=" font-link text-white">
                                  Additional Details
                                </span>
                              </label>
                              <textarea
                                name=""
                                id=""
                                cols="30"
                                rows="10"
                                className=" px-3 pb-1 border-0 rounded-2 inquiryInput"
                                style={{ resize: "none" }}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-3"></div>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
