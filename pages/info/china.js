import NewsLayout from "../../components/layouts/NewsLayout";
import ArticleMessages from "../../components/JSON/Articles/info/ChinaMessages";
import React, { useState, useEffect } from "react";
import Paginate from "../../components/article/PaginateItems";
import SideNews from "../../components/organisms/SideNews";
import MenuItems from "../../components/JSON/MenuItems";
import { useRouter } from "next/router";
import Link from "next/link";
import style from "../../styles/modules/_nav.module.scss";

const category = "中国新闻";

export const renderSwitch = (params) => {
  const router = useRouter();
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];

  switch (keys[0]) {
    case "info":
      return (
        <div>
          {value.map((obj, index) => (
            <div className={style["menu--item--container"]}>
              <Link href={obj.url}>
                <a
                  key={index}
                  className={router.pathname == `${obj.url}` ? "subactive" : ""}
                >
                  {obj.subtitle}
                </a>
              </Link>
            </div>
          ))}
        </div>
      );

    default:
      return "";
  }
};

function China() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = ArticleMessages.ChinaListMessages;
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
      <SideNews category={category}>
        <ul>
          {MenuItems.SideNavMenuItems.map((items, index) => {
            return <div key={index}>{renderSwitch(items)}</div>;
          })}
        </ul>
      </SideNews>
    </NewsLayout>
  );
}

export default China;
