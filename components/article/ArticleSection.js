import ArticleModule from "./ArticleModule";
import CurrentNews from "./CurrentNewsModule";

function ArticleSection(props) {
  return (
    <>
      <div className="grid--container m-auto">
        <ArticleModule />
        <CurrentNews />
      </div>
    </>
  );
}

export default ArticleSection;
