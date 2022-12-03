import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/EventMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";

const category = "2020年活动";

// export const renderSwitch = (params) => {
//   if (!params) {
//     return "";
//   }
//   const keys = Object.keys(params);
//   const value = params[keys[0]];
//   const test = params[keys[1]];

//   switch (keys[0]) {
//     case "two":
//       return (
//         <div>
//           <Paginate data={images} />
//         </div>
//       );

//     default:
//       return "";
//   }
// };

function Events2020({ ArticleItems }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.Events20;
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

export default Events2020;
