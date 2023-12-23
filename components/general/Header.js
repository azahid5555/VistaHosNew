"use client";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/imgs/logo.webp";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import InquiryModal from "./InquiryModal";
import HeadingFourAnimated from "./HeadingFourAnimated";
import HeadingThree from "./HeadingThree";
const navLinks = [
  { title: "Home", href: "/", class: " " },
  { title: "About Us", href: "/about-us", class: " " },
  {
    title: "Events",
    href: "/events",
    class: "submenuCon",
    submenu: [
      {
        title: "Wedding Event",
        href: "/events/wedding-event",
        class: "submenuCon",
        submenu: [
          {
            title: "Wedding Photography",
            href: "/events/wedding-event/wedding-photography",
          },
        ],
      },
      {
        title: "Corporate Events",
        href: "/events/corporate-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Annual Dinner",
            href: "/events/corporate-events/annual-dinner",
          },
          {
            title: "Annual Meetings",
            href: "/events/corporate-events/annual-meetings",
          },
          {
            title: "Exibition",
            href: "/events/corporate-events/exibition",
          },
          {
            title: "Charity Events",
            href: "/events/corporate-events/charity-events",
          },
          {
            title: "Corporate Dinner Events",
            href: "/events/corporate-events/corporate-dinner-events",
          },
        ],
      },
      {
        title: "Parties",
        href: "/events/party-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Royal Hightea Party",
            href: "/events/party-events/royal-hightea-party",
          },
          {
            title: "HipHop Party",
            href: "/events/party-events/hiphop-party",
          },
          {
            title: "Birthday Party",
            href: "/events/party-events/birthday-party",
          },
        ],
      },
      {
        title: "Public Events",
        href: "/events/public-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Musical Concert",
            href: "/events/public-events/musical-concert",
          },
          {
            title: "Sufi Night",
            href: "/events/public-events/sufi-night",
          },
          {
            title: "Festivals Event",
            href: "/events/public-events/festivals-event",
          },
          {
            title: "Model Photography",
            href: "/events/public-events/model-photography",
          },
        ],
      },
    ],
  },
  {
    title: "Menu",
    href: "/menus",
    class: "submenuCon",
    submenu: [
      {
        title: "Classical Menu",
        href: "/menus/classical-menu",
      },
    ],
  },
  {
    title: "Tour",
    href: "/tour",
    class: "submenuCon",
    submenu: [
      {
        title: "La Vista Cafe",
        href: "/tour/la-vista-cafe",
      },
      {
        title: "Vista Ava Lawn",
        href: "/tour/vista-ava-lawn",
      },
      {
        title: "Vista Birthday Park",
        href: "/tour/vista-birthday-park",
      },
      {
        title: "Vista Engagment Park",
        href: "/tour/vista-engagment-park",
      },
      {
        title: "Vista Lawn Pool Side",
        href: "/tour/vista-lawn-pool-side",
      },
      {
        title: "Vista Luxury Suits",
        href: "/tour/vista-luxury-suits",
      },
      {
        title: "Vista Marquee",
        href: "/tour/vista-marquee",
      },
    ],
  },
  { title: "Contact Us", href: "/contact-us", class: " " },
];
const mobNavLinks = [
  { title: "Home", href: "/", class: " " },
  { title: "About Us", href: "/about-us", class: " " },
  {
    title: "Events",
    href: "/events",
    class: "mobSubmenuCon",
    submenu: [
      {
        title: "Wedding Event",
        href: "/events/wedding-event",
        class: "submenuCon",
        submenu: [
          {
            title: "Wedding Photography",
            href: "/events/wedding-event/wedding-photography",
          },
        ],
      },
      {
        title: "Corporate Events",
        href: "/events/corporate-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Annual Dinner",
            href: "/events/corporate-events/annual-dinner",
          },
          {
            title: "Annual Meetings",
            href: "/events/corporate-events/annual-meetings",
          },
          {
            title: "Exibition",
            href: "/events/corporate-events/exibition",
          },
          {
            title: "Charity Events",
            href: "/events/corporate-events/charity-events",
          },
          {
            title: "Corporate Dinner Events",
            href: "/events/corporate-events/corporate-dinner-events",
          },
        ],
      },
      {
        title: "Parties",
        href: "/events/party-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Royal Hightea Party",
            href: "/events/party-events/royal-hightea-party",
          },
          {
            title: "HipHop Party",
            href: "/events/party-events/hiphop-party",
          },
          {
            title: "Birthday Party",
            href: "/events/party-events/birthday-party",
          },
        ],
      },
      {
        title: "Public Events",
        href: "/events/public-events",
        class: "submenuCon",
        submenu: [
          {
            title: "Musical Concert",
            href: "/events/public-events/musical-concert",
          },
          {
            title: "Sufi Night",
            href: "/events/public-events/sufi-night",
          },
          {
            title: "Festivals Event",
            href: "/events/public-events/festivals-event",
          },
          {
            title: "Model Photography",
            href: "/events/public-events/model-photography",
          },
        ],
      },
    ],
  },
  {
    title: "Menu",
    href: "/menus",
    class: "mobSubmenuCon",
    submenu: [
      {
        title: "Classical Menu",
        href: "/menus/classical-menu",
      },
    ],
  },
  {
    title: "Tour",
    href: "/tour",
    class: "mobSubmenuCon",
    submenu: [
      {
        title: "La Vista Cafe",
        href: "/tour/la-vista-cafe",
      },
      {
        title: "Vista Ava Lawn",
        href: "/tour/vista-ava-lawn",
      },
      {
        title: "Vista Birthday Park",
        href: "/tour/vista-birthday-park",
      },
      {
        title: "Vista Engagment Park",
        href: "/tour/vista-engagment-park",
      },
      {
        title: "Vista Lawn Pool Side",
        href: "/tour/vista-lawn-pool-side",
      },
      {
        title: "Vista Luxury Suits",
        href: "/tour/vista-luxury-suits",
      },
      {
        title: "Vista Marquee",
        href: "/tour/vista-marquee",
      },
    ],
  },
  { title: "Contact Us", href: "/contact-us", class: " " },
];

export default function Header() {
  const path = usePathname();
  const [color, setColor] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen) => !prevOpen);
  };
  const changeColor = () => {
    if (window.scrollY >= 60) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return () => {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);

  const menuVars = {
    initial: {
      scaleY: 0,
    },
    animate: {
      scaleY: 1,
      transition: {
        duration: 0.5,
        ease: [0.12, 0, 0.39, 0],
      },
    },
    exit: {
      scaleY: 0,
      transition: {
        delay: 0.5,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const mobileLinkVars = {
    initial: {
      y: "30vh",
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.43, 1],
      },
    },
  };
  const logoVars = {
    initial: {
      y: 0,
      x: 0,
      z: 0,
      scaleY: 1,
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.37, 0, 0.63, 1],
      },
    },
    open: {
      y: 0,
      x: 0,
      z: 0,
      scaleY: 1,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0, 0.55, 0.43, 1],
      },
    },
  };

  const containerVars = {
    initial: {
      transition: {
        staggerChildren: 0.09,
        staggerDirection: -1,
      },
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.09,
        staggerDirection: 1,
      },
    },
  };

  const [isHovered, setIsHovered] = useState(null);
  const handleHover = (hovered, index) => {
    if (navLinks[index].class === "submenuCon") {
      setIsHovered(hovered ? index : null);
    }
  };

  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(null);
  const [subMobileSubmenuOpen, setSubMobileSubmenuOpen] = useState(null);

  const toggleMobileSubmenu = (index) => {
    setMobileSubmenuOpen((prev) => (prev === index ? null : index));
    console.log("toggle Sub Menu");
  };
  const toggleSubMobileSubmenu = (index) => {
    setSubMobileSubmenuOpen((prev) => (prev === index ? null : index));
    console.log("toggle Sub Sub Menu");
  };

  return (
    <>
      <header className={color ? "nav_borderBtm sticky-top" : " sticky-top "}>
        <nav className="navbar navbar-expand-lg">
          <div className="container-fluid container-small justify-content-between">
            <div className="logo_con">
              <Link className="navbar-brand font-heading" href="/">
                <Image src={logo} alt="logo" className="img-fluid" />
              </Link>
            </div>
            <div
              className="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul className="navbar-nav me-3">
                {navLinks.map((link, i) => {
                  return (
                    <li
                      className={`nav-item position-relative px-2 ${
                        link.class
                      } ${isHovered === i ? "overlay" : ""}`}
                      key={i}
                      onMouseEnter={() => handleHover(true, i)}
                      onMouseLeave={() => handleHover(false, i)}
                    >
                      <Link
                        href={link.href}
                        className="text-decoration-none nav-link pe-auto  position-relative"
                      >
                        {link.href === path && (
                          <motion.span
                            layoutId="underline"
                            className="navlink_line position-absolute start-0 w-100"
                          />
                        )}
                        <AnimatedLink title={link.title} className="" />
                      </Link>
                      {link.submenu && (
                        <ul className="submenu position-absolute">
                          {link.submenu.map((sublink, j) => (
                            <li
                              key={j}
                              className={`position-relative ${sublink.class}`}
                            >
                              <Link
                                href={sublink.href}
                                className="text-decoration-none nav-link text-white font-link navlinkTxt animated_link m-0 d-inline-block"
                              >
                                <span>{sublink.title}</span>
                              </Link>
                              {sublink.submenu && (
                                <ul className="Innersubmenu position-absolute">
                                  {sublink.submenu.map((nestedSublink, k) => (
                                    <li key={k}>
                                      <Link
                                        href={nestedSublink.href}
                                        className="text-decoration-none nav-link text-white font-link navlinkTxt animated_link m-0 d-inline-block"
                                      >
                                        <span>{nestedSublink.title}</span>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="contactbtn_Wrapper">
              <div className="Vista_Btn_container btn_dark vistabtnSmall">
                <button
                  type="button"
                  className="Vista_btn"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  <span className="Vista_btn_text fw-bold">Inquire</span>
                </button>
              </div>
            </div>
            <button
              className="mobMenuCon p-0 bg-transparent border-0 fs-4 text-white"
              onClick={toggleMenu}
            >
              <i class="bi bi-list"></i>
            </button>
          </div>
        </nav>
        <AnimatePresence>
          {open && (
            <motion.div
              variants={menuVars}
              initial="initial"
              animate="animate"
              exit="exit"
              className="small_screen_nav_bg"
            >
              <div className="small_screen_nav_inner">
                <motion.div
                  className=" d-flex align-items-center mobHeaderCon container-small"
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                >
                  <motion.div
                    className=" justify-content-between flex-row d-flex my-3 align-items-center"
                    variants={logoVars}
                  >
                    <div className="logo_con w-25">
                      <Image alt="logo" src={logo} className=" img-fluid" />
                    </div>
                    <p className="text-white" onClick={toggleMenu}>
                      Close
                    </p>
                  </motion.div>
                </motion.div>
                <motion.div
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                  className="h-100 row mobileMenuCon container-small pe-0 d-flex align-items-center"
                >
                  <div className="col-12 col-sm-6 col-md-8 mobileMenuCon_left">
                    <div className="mobileMenuCon_wrapper d-flex flex-column justify-content-start align-items-baseline text-dark align-items-center">
                      {mobNavLinks.map((link, index) => {
                        return (
                          <div
                            className={`overflow-hidden  MobilesubmenuCon ${link.class}`}
                            key={index}
                          >
                            <motion.div
                              variants={mobileLinkVars}
                              className="nav-link-con"
                              // onClick={toggleMenu}
                              onClick={() => toggleMobileSubmenu(index)}
                            >
                              <div className=" d-flex ">
                                <Link
                                  href={link.href}
                                  className="text-decoration-none nav-link pe-auto"
                                >
                                  <AnimatedLink
                                    title={link.title}
                                    className=""
                                  />
                                </Link>
                                <span className="MobilesubmenuCon_icon">
                                  <i
                                    className={`bi ${
                                      mobileSubmenuOpen === index
                                        ? "bi-arrow-down"
                                        : "bi-arrow-right"
                                    }`}
                                  ></i>
                                </span>
                              </div>
                              {link.submenu && (
                                <ul
                                  className={`mobsubmenu ${
                                    mobileSubmenuOpen === index ? "open" : ""
                                  }`}
                                >
                                  {link.submenu.map((sublink, j) => (
                                    <li
                                      key={j}
                                      className={`position-relative mobsubmenuWrapper ${sublink.class}`}
                                      onClick={() => toggleSubMobileSubmenu(j)}
                                    >
                                      <div className=" d-flex align-items-center mb-2">
                                        <Link
                                          href={sublink.href}
                                          className="text-decoration-none nav-link pe-auto"
                                        >
                                          <AnimatedLink
                                            title={sublink.title}
                                            className=""
                                          />
                                        </Link>
                                        <span className="MobilesubmenuCon_icon MobilesubmenuCon_iconTwo">
                                          <i
                                            className={`bi ${
                                              subMobileSubmenuOpen === index
                                                ? "bi-arrow-down"
                                                : "bi-arrow-right"
                                            }`}
                                          ></i>
                                        </span>
                                      </div>
                                      {sublink.submenu && (
                                        <ul
                                          className={`InnerMobsubmenu ${
                                            subMobileSubmenuOpen === index
                                              ? "open"
                                              : ""
                                          }`}
                                        >
                                          {sublink.submenu.map(
                                            (nestedSublink, k) => (
                                              <li key={k}>
                                                <Link
                                                  href={nestedSublink.href}
                                                  className="text-decoration-none nav-link pe-auto"
                                                >
                                                  <AnimatedLink
                                                    title={nestedSublink.title}
                                                    className=""
                                                  />
                                                </Link>
                                              </li>
                                            )
                                          )}
                                        </ul>
                                      )}
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </motion.div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="mobNav_contact flex-column justify-content-center h-100"
                  variants={containerVars}
                  initial="initial"
                  animate="open"
                  exit="initial"
                >
                  <div className=" overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="contactDetails_con"
                    >
                      <HeadingFourAnimated text="Want to talk?" />
                      <a
                        href="mailto:info@vistahospitality.com"
                        className=" text-decoration-none"
                      >
                        <p className=" Vista_para_sm clrSec">
                          info@vistahospitality
                        </p>
                      </a>
                    </motion.div>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="contactDetails_con"
                    >
                      <HeadingFourAnimated text="Want to Book a Sweet?" />
                      <a
                        href="mailto:info@vistahospitality.com"
                        className=" text-decoration-none"
                      >
                        <p className=" Vista_para_sm clrSec">Book Now</p>
                      </a>
                    </motion.div>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="contactDetails_con"
                    >
                      <HeadingFourAnimated text="Quick Hire Us?" />
                      <a
                        href="mailto:info@vistahospitality.com"
                        className=" text-decoration-none"
                      >
                        <p className=" Vista_para_sm clrSec">0323747817</p>
                      </a>
                    </motion.div>
                  </div>
                  <div className=" overflow-hidden">
                    <motion.div
                      variants={mobileLinkVars}
                      className="contactDetails_con"
                    >
                      <div className="contactbtn_Wrapper">
                        <div className="Vista_Btn_container btn_dark vistabtnSmall">
                          <button
                            type="button"
                            className="Vista_btn"
                            data-bs-toggle="modal"
                            data-bs-target="#staticBackdrop"
                          >
                            <span className="Vista_btn_text fw-bold">
                              Inquire
                            </span>
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
      <InquiryModal />
    </>
  );
}
