import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/info/CanadaMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";

const category = "加拿大新闻";

function Canada() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.CanadaListMessages;
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

export default Canada;
