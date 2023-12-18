import HeadingTwo from "../general/HeadingTwo";
import MenuSubCategory from "./MenuSubCategory";

export default function MenuCategory(props) {
  return (
    <div className=" position-relative menuCategory mt-5">
      <div className="groupLink">
        <HeadingTwo text={props.title} />
      </div>
      {props.para1 && (
        <p className=" Vista_para_sm fst-italic">{props.para1}</p>
      )}
      {props.para2 && (
        <p className=" Vista_para_sm fst-italic">{props.para2}</p>
      )}
      <div className="MenuSubCategory_con mb-2">
        <MenuSubCategory menuArray={props.menuArray} />
      </div>
      <div className="py-4 h-100">
        <div className="line"></div>
      </div>
    </div>
  );
}
