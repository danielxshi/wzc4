import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import CurrentNewsItem from "../article/CurrentNewsItem"
import ArticleItems from "../JSON/ArticleMessages";
import style from "../../styles/modules/_articles.module.scss";

function CurrentNews(props) {
  return (
    <div className="col-start-9 row-start-1 col-span-4">
      <h2 className="text-2xl font-bold mb-4">加拿大新闻</h2>
      <div>
        {
          ArticleItems.SponsoredNews.map((item, index) => {
            return(
              <CurrentNewsItem
                key={index}
                title={item.Title}
                date={item.date}
                src={ArticleItems.sponsorImage1}
              ></CurrentNewsItem>
            )
          })
        }
      </div>
    </div>
  );
}

export default CurrentNews;
