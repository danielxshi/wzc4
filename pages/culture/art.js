import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/CultureMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";

const category = "家乡的艺术和文化";

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

function Art({ ArticleItems }) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.ArtListMessages;
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

export default Art;
