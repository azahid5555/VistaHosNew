import "@/styles/style.css";
import { PageWrapper } from "@/components/general/PageWrapper";
import BannerTitleScroll from "@/components/Events/BannerTitleScroll";
import MenuHeading from "@/components/Events/MenuHeading";
import Menu from "@/components/menu/Menu";
import HeadingTwo from "@/components/general/HeadingTwo";
import ReviewsSecOneLine from "@/components/general/ReviewsSecOneLine";
import BottomCTA from "@/components/general/BottomCTA";
export default function ClassicalMenu() {
  return (
    <PageWrapper>
      <main className="menuInner_page">
        <BannerTitleScroll title1="CLASSICAL" title2="MENU " />
        <section className=" position-relative">
          <div className=" container-fluid vistaCon">
            <MenuHeading
              title="CLASSIC MENU"
              para="Our classic menu is the best of what we have to offer, and is fit for any occasion. "
              btntext="Print Menu"
              btnlink="/"
            />
          </div>
        </section>
        <Menu />
        <section className=" position-relative bg-dark60">
          <div className=" container-fluid vistaCon mt-0">
            <div className="row justify-content-center">
              <div className="col-6 text-center">
                <HeadingTwo text="WHERE MOMENTS " text2="BECOME MEMORIES" />
              </div>
            </div>
          </div>
        </section>
        <ReviewsSecOneLine />
        <BottomCTA />
      </main>
    </PageWrapper>
  );
}
