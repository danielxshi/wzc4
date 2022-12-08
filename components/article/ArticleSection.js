import ArticleModule from "./ArticleModule";
import CurrentNews from "./CurrentNewsModule";

function ArticleSection(props) {
  return (
    <>
      <div className="grid--container m-auto bg--primary--white">
        <ArticleModule />
        <CurrentNews />
      </div>
    </>
  );
}

export default ArticleSection;
