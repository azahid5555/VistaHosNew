import { DM_Sans } from "next/font/google";
import { Lexend_Zetta } from "next/font/google";
import localFont from "next/font/local";

export const spanLight = localFont({
  src: "../static-fonts/span_light.otf",
  display: "swap",
  variable: "--font-heading-light",
});
export const spanLightItalic = localFont({
  src: "../static-fonts/span_light_italic.otf",
  display: "swap",
  variable: "--font-heading-light-italic",
});
export const spanRegular = localFont({
  src: "../static-fonts/span_regular.otf",
  display: "swap",
  variable: "--font-heading-regular",
});
export const spanSemiBold = localFont({
  src: "../static-fonts/span_semibold.otf",
  display: "swap",
  variable: "--font-heading-semibold",
});
export const spanSemiBoldItalic = localFont({
  src: "../static-fonts/span_semibolf_italic.otf",
  display: "swap",
  variable: "--font-heading-semibold-italic",
});
export const spanBold = localFont({
  src: "../static-fonts/span_bold.otf",
  display: "swap",
  variable: "--font-heading-bold",
});
export const spanBoldItalic = localFont({
  src: "../static-fonts/span_bold_italic.otf",
  display: "swap",
  variable: "--font-heading-bold-italic",
});

export const DmSans = DM_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-para",
});

export const LexendZetta = Lexend_Zetta({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-link",
});
