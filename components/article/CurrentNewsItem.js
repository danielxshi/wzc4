import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import ArticleItems from "../JSON/ArticleMessages";
import style from "../../styles/modules/_articles.module.scss";
import Image from "next/image";

function CurrentNews(props) {
  return (
    <div className={style["sponsor--item--container"]}>
      <div className={style["sponsor--image--container"]}>
        <Image
          src={ArticleItems.sponsorImage1}
          layout="fill"
        />
      </div>
      <div className="w-8/12 ml-2 m-2">
        <h4 className="text-base">
          {props.title}
        </h4>
        <div className="flex flex-row mt-2">
          <small>{props.date}</small>
          <a
            className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"
            href={props.URL}
          >
            阅读全文
          </a>
        </div>
      </div>
    </div>
  );
}

export default CurrentNews;
