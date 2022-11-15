import React from "react";
import Carousel from "../components/header/Carousel";
import CurrentNews from "../components/article/CurrentNewsModule";
import style from "../styles/modules/_articles.module.scss"
import ArticleDetailSection from "../components/article/ArticleDetailSection";

function ArticleDetail(props) {
  return (
    <div className={style["article--detail--page"]}>
      <Carousel />
      <div className="grid--container">
        <ArticleDetailSection/>
        <CurrentNews />
      </div>
    </div>
  );
}

export default ArticleDetail;
