import ArticleMessages from "../JSON/ArticleMessages";
import React, { useState, useEffect } from "react";
import Images from "./PaginateItems";

function ArticleList() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.ArticleListMessages;
    setImages(response);
  }, []);

  return (
    <div className="row-start-1 col-span-8">
      <h3 className="text-2xl">信息资讯</h3>
      <div>
        <Images data={images} />
      </div>
    </div>
  );
}

export default ArticleList;
