import React from "react";
import style from "../../styles/modules/_articles.module.scss";
function ArticleDetailSection(props) {
  return (
    <div className={style["article--detail--section"]}>
      <div className={style["margin-realign"]}>
        <div className="flex">
          <h2 className="text-2xl font-bold">{props.category}</h2>
          <small className="mr-2 ml-auto text-base">
            当前位置: 
            {/* home */}
            <a className="text-link-black" href="/">&nbsp;首页</a>
            &nbsp; &gt; &nbsp;
            <a className="text-link-black" href={`/${props.parentDirectory}/${props.categoryClass}`}>{props.category}</a>
            &nbsp; &gt; &nbsp;
            <a className="text-link-black" href={`/${props.parentDirectory}/${props.subCategoryClass}`}>{props.subCategory}</a>
          </small>
        </div>
        <h1 className="text-6xl font-bold mt-12 leading-loose">
          {props.articleTitle}
        </h1>
        {props.children}
      </div>
    </div>
  );
}

export default ArticleDetailSection;
