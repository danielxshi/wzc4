import ArticleItems from "../JSON/ArticleMessages";
import Image from "next/image";
import style from "../../styles/modules/_articles.module.scss";
import ArticleModuleLarge from "./ArticleModuleLarge";

function ArticleModule(props) {
  return (
    <div className={style["current--news--section--container"]}>
      <h2 className="text-2xl font-bold mb-4">同乡会动态</h2>
      <div className="flex">
        <ArticleModuleLarge />
        <div className={[style["news--flex"], style["news--small"]].join(" ")}>
          {ArticleItems.CurrentEvents.map((item, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <Image
                  objectFit="cover"
                  layout="intrinsic"
                  src={item.imageURL}
                  height={235}
                  width={419}
                  priority
                />
                <div className="mt-2 p-2">
                  <h3 className="text-base font-bold">{item.title}</h3>
                  <div className="flex flex-row mt-2">
                    <small>{item.date}</small>
                    <a
                      className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"
                      href={`/article/${item.id}`}
                    >
                      阅读全文
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default ArticleModule;
