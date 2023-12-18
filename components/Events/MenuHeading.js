import HeadingFourAnimated from "../general/HeadingFourAnimated";
import HeadingOne from "../general/HeadingOne";
import HeadingThree from "../general/HeadingThree";
import VistaBtnSmall from "../general/VistaBtnSmall";

export default function MenuHeading(props) {
  return (
    <div className="row justify-content-center text-center">
      <div className="col-12 col-sm-10 col-md-8">
        <HeadingOne text2={props.title} />
        <div className=" fst-italic mt-2 mb-4 font-italic-parent">
          <HeadingThree text={props.para} />
        </div>
        <div>
          <VistaBtnSmall text={props.btntext} link={props.btnlink} />
        </div>
      </div>
    </div>
  );
}
