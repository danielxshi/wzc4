import ArticleModule from "./ArticleModule";
import ArticleModuleLarge from "./ArticleModuleLarge";
import CurrentNews from "./CurrentNewsModule";
import style from "../../styles/modules/_articles.module.scss"

function ArticleSection(props) {
  return (
    <>
      <div className="grid--container m-auto">
        <ArticleModule/>

        <CurrentNews/>

      </div>
    </>
  );
}

export default ArticleSection;
