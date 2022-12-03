import ArticleModule from "./ArticleModule";
import CurrentNews from "./CurrentNewsModule";
import SideNav from "../navigation/SideNav";

function ArticleSection(props) {
  return (
    <>
      <div className="grid--container m-auto">
        <ArticleModule />
        <CurrentNews />
        {/* <SideNav/> */}
      </div>
    </>
  );
}

export default ArticleSection;
