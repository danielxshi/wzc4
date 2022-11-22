import React from "react";
import style from "../../styles/modules/_articles.module.scss";
import testImage from "../../public/images/article/sample-article-detail.png";
import Image from "next/image";
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
        {/* <p className="text-2xl leading-loose mr-2">
          北美新生代创业俱乐部首次⻅面会于 2022 年 4 月 9
          日下午在加拿大温州同乡总会会所顺利举行。
        </p>
        <div className={style["image--contain"]}>
          <Image
            objectFit="cover"
            // width="100%"
            // height="100%"
            src={testImage}
            layout="fill"
            priority
          />
        </div>
        <br />
        <p className="text-2xl leading-loose mr-2">
          北美新生代创业俱乐部由温州同乡总会创立，是一个支持和帮助
          新生代创业者交流发展的平台，秉承团结、互助、传承、发展和奉献的
          宗旨，希望把正在北美创业和有创业梦想的年轻人们聚集在一起，交流
          互助，共同发展。同时，也希望传承温州人的创业精神，以及加强对年轻人社会责任感的培养。{" "}
        </p> */}
        {props.children}
      </div>
    </div>
  );
}

export default ArticleDetailSection;
