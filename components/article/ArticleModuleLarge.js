import ArticleItems from "../JSON/ArticleMessages";
import Image from "next/image";
import style from "../../styles/modules/_articles.module.scss";

function ArticleModuleLarge(props) {
  console.log(ArticleItems);

  return (
    <div className={[style["current--news--section--container"], style["large--module"]].join(" ")}>
      {ArticleItems.BigNews.map((item, index) => {
        return (
          <div className="flex flex-col" key={index}>
            <Image
              objectFit="contain"
              width=""
              src={ArticleItems.testImage}
              priority
            />
            <div className="mt-2 p-3">
              <h3 className="text-base mb-2 font-bold">{item.Title}</h3>

              <p>{item.Text}</p>
              <div className="flex flex-row mt-2">
                <small>{item.date}</small>
                <a
                  className="whitespace-nowrap mb-2 text-base text-blue-500 ml-auto mr-0"
                  href={item.URL}
                >
                  阅读全文
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ArticleModuleLarge;