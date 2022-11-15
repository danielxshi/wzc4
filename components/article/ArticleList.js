import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import ArticleListItem from "./ArticleListItem";
import ArticleItems from "../JSON/ArticleMessages";
import style from "../../styles/modules/_articles.module.scss";

function ArticleList(props) {
  return (
    <div className="row-start-1 col-span-8">
      <h3 className="text-2xl">信息资讯</h3>
      <div>
        {
          ArticleItems.ArticleListItems.map((item, index) => {
            return(
              <ArticleListItem
                title={item.Title}
                date={item.date}
                src={ArticleItems.sponsorImage1}
                textPreview={item.TextPreview}
                URL={item.URL}
              ></ArticleListItem>
            )
          })
        }
      </div>
    </div>
  );
}

export default ArticleList;
