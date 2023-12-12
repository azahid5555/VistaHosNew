import Link from "next/link";

export default function VistaBtnSmall(props) {
  return (
    <div className="Vista_Btn_container btn_dark vistabtnSmall">
      <Link className="Vista_btn" href={props.link}>
        <span className="Vista_btn_text fw-bold font-heading">
          {props.text}
        </span>
      </Link>
    </div>
  );
}
