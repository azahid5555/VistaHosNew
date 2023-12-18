import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import BannerTitleScroll from "@/components/Events/BannerTitleScroll";
export default function Inuiry() {
  return (
    <PageWrapper>
      <main className="inquiryPage">
        <BannerTitleScroll title1="LETS TALK" title2="LETS TALK" />
      </main>
    </PageWrapper>
  );
}
