import BlogSec from "@/components/general/BlogSec";
import BottomCTA from "@/components/general/BottomCTA";
import { PageWrapper } from "@/components/general/PageWrapper";
import ReservationSec from "@/components/general/ReservationSec";
import TeamSection from "@/components/general/TeamSection";
import TitleNDescription from "@/components/general/TitleNDescription";
import HomeAboutSec from "@/components/general/ColorChnagingHeadThree";
import HomeAboutUs from "@/components/home/HomeAboutUs";
import Possibilities from "@/components/home/Possibilities";
import Stats from "@/components/home/Stats";
import VideoBanner from "@/components/home/VideoBanner";
import "@/styles/style.css";
export default function Home() {
  return (
    <PageWrapper>
      <main className="homePage_main">
        <VideoBanner video="/assets/vistaHospitalityVideo.mp4" />
        {/* <HomeAboutSec /> */}
        {/* <ReservationSec /> */}
        <HomeAboutUs />
        <Possibilities />
        <TeamSection />
        <Stats />
        <TitleNDescription />
        <BlogSec />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
