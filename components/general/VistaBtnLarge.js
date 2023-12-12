import Link from "next/link";

export default function VistaBtnLarge(props) {
  return (
    <div className="Vista_Btn_container btn_dark vistaBtn_large">
      <Link className="Vista_btn" href={[props.link]}>
        <span className="Vista_btn_text">{props.text}</span>
      </Link>
    </div>
  );
}
