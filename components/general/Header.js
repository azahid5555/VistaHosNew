"use client";
import AnimatedLink from "./AnimatedLink";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/assets/imgs/logo.webp";
import { useEffect, useState } from "react";
import VistaBtnSmall from "./VistaBtnSmall";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const navLinks = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about-us" },
  { title: "Events", href: "/events" },
  { title: "Menu", href: "/menus" },
  { title: "Tour", href: "/tour" },
  { title: "Contact Us", href: "/contact-us" },
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

  return (
    <header className={color ? "nav_borderBtm sticky-top" : " sticky-top "}>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid container-small justify-content-between">
          <div className="logo_con">
            <a className="navbar-brand font-heading" href="#">
              <Image src={logo} alt="logo" className="img-fluid" />
            </a>
          </div>
          <div
            className="collapse navbar-collapse justify-content-center"
            id="navbarNav"
          >
            <ul className="navbar-nav me-3">
              {navLinks.map((link, i) => {
                return (
                  <li className="nav-item position-relative px-2" key={i}>
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
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="contactbtn_Wrapper">
            <VistaBtnSmall text="Inquire" link="/contact-us" />
          </div>
          <button
            className="mobMenuCon p-0 bg-transparent border-0 fs-4"
            onClick={toggleMenu}
          >
            <span className="navbar-toggler-icon"></span>
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
              <div className=" justify-content-between flex-row d-flex">
                <h4>Vista Group</h4>
                <p className="" onClick={toggleMenu}>
                  Close
                </p>
              </div>
              <motion.div
                variants={containerVars}
                initial="initial"
                animate="open"
                exit="initial"
                className="h-100 d-flex flex-column justify-content-center text-dark align-items-center gap-3"
              >
                {navLinks.map((link, index) => {
                  return (
                    <div className=" overflow-hidden" key={index}>
                      <motion.Link
                        variants={mobileLinkVars}
                        href={link.href}
                        className="text-decoration-none nav-link pe-auto"
                      >
                        <AnimatedLink title={link.title} className="" />
                      </motion.Link>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
