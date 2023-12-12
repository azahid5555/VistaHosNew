import Image from "next/image";
import logo from "@/public/assets/imgs/logo.webp";
import footerIcon1 from "@/public/assets/icons/FooterenvelopIcon.svg";
import footerIcon2 from "@/public/assets/icons/FooterFBicon.svg";
import footerIcon3 from "@/public/assets/icons/FooterLIicon.svg";
import footerIcon4 from "@/public/assets/icons/FooterIGicon.svg";
import footerIcon5 from "@/public/assets/icons/FooterWAicon.svg";
import lahoreSkyline from "@/public/assets/icons/lahoreSkyline.svg";
import Link from "next/link";
import Newsletter from "./NewsLetter";
export default function Footer() {
  return (
    <footer className=" footer_con position-relative VistaSec_topBorder_grade">
      <div className="footerBTmImg">
        <Image src={lahoreSkyline} alt="UAE Skyline" className="img-fluid" />
      </div>
      <div className="container-fluid vistaCon mb-0 pb-5  position-relative">
        <div className="row">
          <div className="col-12 text-start">
            <Image src={logo} alt="Casa Vista Logo" className="footerlogo" />
          </div>
        </div>
        <div className="row footer_middle">
          <div className="col-12 col-md-12 col-lg-8 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-12 fotter_menu_con">
                <div className="fotter_inner_menu_con">
                  <ul>
                    <li>
                      <Link href="/about-us" className="animated_link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact-us" className="animated_link">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/our-services" className="animated_link">
                        Services
                      </Link>
                    </li>
                    <li>
                      <Link href="/latest-news" className="animated_link">
                        Latest News
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="fotter_inner_menu_con">
                  <ul>
                    <li>
                      <Link href="/buy" className="animated_link">
                        Buy
                      </Link>
                    </li>
                    <li>
                      <Link href="/rent" className="animated_link">
                        Rent
                      </Link>
                    </li>
                    <li>
                      <Link href="/off-plan" className="animated_link">
                        Off-Plan
                      </Link>
                    </li>
                    <li>
                      <Link href="/international" className="animated_link">
                        International
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="fotter_inner_menu_con">
                  <ul>
                    <li>
                      <Link href="/privacy-policy" className="animated_link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link href="/terms-conditions" className="animated_link">
                        Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link href="/guides" className="animated_link">
                        Area Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/all-reviews" className="animated_link">
                        Reviews
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="fotter_inner_menu_con">
                  <ul>
                    <li>
                      <Link
                        href="/our-services/investors-visas"
                        className="animated_link"
                      >
                        Investor Visa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-services/mortgage-services"
                        className="animated_link"
                      >
                        Mortage Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-services/branding"
                        className="animated_link"
                      >
                        Branding
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-services/crypto-currency"
                        className="animated_link"
                      >
                        Crypto Currencies
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-12 col-sm-6">
                <div className="footer_social_icon">
                  <ul>
                    <li>
                      <Link href="mailto:Info@vistahospitality.com">
                        <Image src={footerIcon1} alt="Email Us" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank">
                        <Image src={footerIcon2} alt="Facebook" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank">
                        <Image src={footerIcon3} alt="Linkedin" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank">
                        <Image src={footerIcon4} alt="Instagram" />
                      </Link>
                    </li>
                    <li>
                      <Link href="/" target="_blank">
                        <Image src={footerIcon5} alt="Whastapp" />
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <Newsletter />
          </div>
        </div>
        <div className="row footerBtm justify-content-between flex-row mt-5">
          <div className="col-12 d-flex justify-content-between flex-column flex-lg-row">
            <div className="ftrBtm_left">
              <ul>
                <li>
                  <p className=" Vista_para_sm font-para">
                    Vista Hospitality &copy; 2023 All Rights Reserved
                  </p>
                </li>
              </ul>
            </div>
            <div className="ftrbtm_right ">
              <p className="m-0 fw-lighter text-white Vista_para_sm font-para">
                Created & Managed by{" "}
                <a href="/" target="_blank" className="animated_link">
                  A Cubic Creative Factory
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
