import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/info/LocalMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateLocalSponsorItems";

const category = "当地生活信息";

function Local() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.LocalListMessages;
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

export default Local;
