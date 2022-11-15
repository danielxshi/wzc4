import Link from "next/link";
import style from "../../styles/modules/_button.module.scss";

function DefaultButton(props) {
  return (
    <>
      {/* <Link href={'/contact'}>
        <a className={[style['primary--btn'], style['link--button']].join(' ')}>
          {props.text1}
        </a>
      </Link> */}

      <div>
        <Link href={"/contact"}>
          <a
            className={[style["primary--btn"], style["link--button"]].join(" ")}
          >
            {props.text2}
          </a>
        </Link>
      </div>
    </>
  );
}

export default DefaultButton;
