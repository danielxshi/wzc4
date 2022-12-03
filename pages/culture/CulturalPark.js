import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/CultureMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";

const category = "文化园地";

function Culture({ ArticleItems }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.ArticleListMessages;
    setImages(response);
  }, []);
  return (
    <NewsLayout>
      <div className="row-start-1 col-span-8">
        <h3 className="text-2xl">{category}</h3>
        <div>
          <Paginate data={images} />
        </div>
      </div>
    </NewsLayout>
  );
}

export default Culture;
