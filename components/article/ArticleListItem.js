import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import ArticleItems from "../JSON/ArticleMessages";
import style from "../../styles/modules/_articles.module.scss";
import Image from "next/image";
import Link from "next/link";

function ArticleListItem(props) {
  return (
    <Link href={props.URL}>
      <div className={[style["sponsor--item--container"], style["article--list--item"]].join(" ")}>
        <div className={style["article--list--image--container"]}>
          <Image src={ArticleItems.ArticleListImage1} layout="fill" />
        </div>
        <div className="w-9/12 ml-8 mt-2 mb-2 mr-8">
          <h4 className="text-base">
            {/* 加拿大華裔投票促進會「就差你一票」街頭促票活動 */}
            {props.title}
          </h4>
          <p className="mb-4">{props.textPreview}</p>
          <small className="">{props.date}</small>
        </div>
      </div>
    </Link>
  );
}

export default ArticleListItem;
