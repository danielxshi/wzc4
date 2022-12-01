import Carousel from "../../components/header/Carousel";
import CouncilMessages from "../../components/JSON/CouncilMessages";
// import Image from "next/image";
import style from "../../styles/modules/_nav.module.scss";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../../components/organisms/sectionHeader";
import LargeLayout from "../../components/layouts/LargeLayout";
import MenuItems from "../../components/JSON/ArticleMessages";
import MenuMessages from "../JSON/MenuItems";

export const renderSwitch = (params) => {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];
  const test = params[keys[1]];

  switch (keys[0]) {
    case "menu":
      return (
        <div className="menu--container">
          {value.map((item, index) => (
            <div className="dropdown">
              <a href={item.url} className="dropbtn">{item.title}</a>
              <ul className="dropdown-content">
                {item.submenu.map((item, index) => {
                  return <a className="whitespace-nowrap" href={item.url}>{item.subtitle}</a>;
                })}
              </ul>
            </div>
          ))}
        </div>
      );

    default:
      return "";
  }
};

export default function MenuItems3(props) {
  return (
    <>
      {MenuMessages.NavMenuItems2.map((items, index) => {
        return (
          <div className={[style["menu--content--item"]].join(" ")} key={index}>
            {renderSwitch(items)}
          </div>
        );
      })}
    </>
  );
}
