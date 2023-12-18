import Link from "next/link";
import HeadingFourAnimated from "../general/HeadingFourAnimated";
import MenuCategory from "./MenuCategory";

const menuCat1 = [
  {
    title: "CINNAMON FRENCH TOAST",
    desc: "Two Slices Texas Toast, Scrambled Eggs & Bacon or Sausage, Maple Syrup, & Powdered Sugar",
    price: "1500",
  },
  {
    title: "THE ALL AMERICAN",
    desc: "Scrambled Eggs with Cheese, Choice of Bacon, Sausage or Ham, Hash Browns, & Fresh Fruit",
    price: "1500",
  },
  {
    title: "TRADITIONAL BENEDICT",
    desc: "Two English Muffins Topped with Canadian Bacon, Poached Eggs, & Chipotle Hollandaise Sauce (vegetarian option available upon request)",
    price: "1500",
  },
  {
    title: "FRIED CHICKEN & WAFFLES",
    desc: "Buttermilk Brined, Oven Fried Chicken on top a Belgian Waffle & Chipotle Syrup",
    price: "1500",
  },
  {
    title: "BREAKFAST CROISSANT",
    desc: "Open-faced Croissant with Scrambled Eggs, Cheddar Cheese, & Canadian Bacon. Served with Fresh Fruit",
    price: "1500",
  },
];

export default function Menu() {
  return (
    <section className=" position-relative VistaSec_topBorder_grade">
      <div className=" container-fluid vistaCon mb-0">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="menuCat_con">
              <HeadingFourAnimated text="MENU SECTIONS" />
              <div className="d-flex flex-column mt-4">
                <a
                  href="#breakfast"
                  className=" font-link text-decoration-none animated_link m-0 d-inline mb-3"
                >
                  BREAKFAST & BRUNCH
                </a>
                <a
                  href="#appetizers"
                  className=" font-link text-decoration-none animated_link m-0 d-inline mb-3"
                >
                  APPETIZERS
                </a>
                <a
                  href="#mainCourse"
                  className=" font-link text-decoration-none animated_link m-0 d-inline mb-3"
                >
                  MAIN COURSES
                </a>
                <a
                  href="#sweets"
                  className=" font-link text-decoration-none animated_link m-0 d-inline mb-3"
                >
                  SWEETS
                </a>
                <a
                  href="#drinks"
                  className=" font-link text-decoration-none animated_link m-0 d-inline mb-3"
                >
                  DRINKS
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="breakfastMenu_con" id="breakfast">
              <MenuCategory
                menuArray={menuCat1}
                title="Breakfast And Brunch"
                para1="All Packages Include"
                para2="5 Hour Event Time, Two Hour Access Window Prior to Event Start, Customized Room Setup, Choice of White, Black or Ivory Linens for all Tables, Selection of Napkin Color(s), All China, Glassware & Flatware, Complimentary Parking for all Guests, and Uniformed, Professional Staff."
              />
            </div>
            <div className="breakfastMenu_con" id="appetizers">
              <MenuCategory
                menuArray={menuCat1}
                title="Appetizers"
                para1="All Packages Include"
                para2="5 Hour Event Time, Two Hour Access Window Prior to Event Start, Customized Room Setup, Choice of White, Black or Ivory Linens for all Tables, Selection of Napkin Color(s), All China, Glassware & Flatware, Complimentary Parking for all Guests, and Uniformed, Professional Staff."
              />
            </div>
            <div className="breakfastMenu_con" id="mainCourse">
              <MenuCategory
                menuArray={menuCat1}
                title="Main Courses"
                para1="All Packages Include"
                para2="5 Hour Event Time, Two Hour Access Window Prior to Event Start, Customized Room Setup, Choice of White, Black or Ivory Linens for all Tables, Selection of Napkin Color(s), All China, Glassware & Flatware, Complimentary Parking for all Guests, and Uniformed, Professional Staff."
              />
            </div>
            <div className="breakfastMenu_con" id="sweets">
              <MenuCategory
                menuArray={menuCat1}
                title="Sweets"
                para1="All Packages Include"
                para2="5 Hour Event Time, Two Hour Access Window Prior to Event Start, Customized Room Setup, Choice of White, Black or Ivory Linens for all Tables, Selection of Napkin Color(s), All China, Glassware & Flatware, Complimentary Parking for all Guests, and Uniformed, Professional Staff."
              />
            </div>
            <div className="breakfastMenu_con" id="drinks">
              <MenuCategory
                menuArray={menuCat1}
                title="Drinks"
                para1="All Packages Include"
                para2="5 Hour Event Time, Two Hour Access Window Prior to Event Start, Customized Room Setup, Choice of White, Black or Ivory Linens for all Tables, Selection of Napkin Color(s), All China, Glassware & Flatware, Complimentary Parking for all Guests, and Uniformed, Professional Staff."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
