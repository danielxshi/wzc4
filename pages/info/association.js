import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/info/AssociationMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";

const category = "家乡协会";

function Association() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.AssociationListMessages;
    setData(response);
  }, []);

  return (
    <NewsLayout>
      <div className="row-start-1 col-span-8">
        <h3 className="text-2xl">{category}</h3>
        <div>
          <Paginate data={data} />
        </div>
      </div>
    </NewsLayout>
  );
}

export default Association;
