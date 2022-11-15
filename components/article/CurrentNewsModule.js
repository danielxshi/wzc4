import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import CurrentNewsItem from "../article/CurrentNewsItem"
import ArticleItems from "../JSON/ArticleMessages";
import style from "../../styles/modules/_articles.module.scss";

function CurrentNews(props) {
  return (
    <div className="col-start-9 row-start-1 col-span-4">
      <h3 className="text-2xl">加拿大新闻</h3>
      <div>
        {
          ArticleItems.SponsoredNews.map((item, index) => {
            return(
              <CurrentNewsItem
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
