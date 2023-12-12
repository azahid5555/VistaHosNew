import Link from "next/link";

export default function VistaBtn(props) {
  return (
    <div className="Vista_Btn_container btn_dark">
      <Link className="Vista_btn" href={[props.link]}>
        <span className="Vista_btn_text">{props.text}</span>
      </Link>
    </div>
  );
}
