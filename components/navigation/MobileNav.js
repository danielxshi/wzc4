import style from "../../styles/modules/_nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuItems from "../JSON/MenuItems";

export const renderSwitch = (params) => {
  const router = useRouter();
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
            <div key={index} className="dropdown">
              <Link href={item.url}>
                <a
                  // key={index}
                  className={
                    router.pathname == `${item.url}` ||
                    router.pathname == `${item.p1}` ||
                    router.pathname == `${item.p2}` ||
                    router.pathname == `${item.p3}` ||
                    router.pathname == `${item.p4}`
                      ? "active"
                      : ""
                  }
                >
                  {item.title}
                </a>
              </Link>
              <ul className="dropdown-content">
                {item.submenu.map((item2, index2) => {
                  return (
                    <Link className="whitespace-nowrap" href={item2.url}>
                      <a
                        key={index2}
                        className={
                          router.pathname == `${item2.url}` ? "superactive" : ""
                        }
                      >
                        {item2.subtitle}
                      </a>
                    </Link>
                  );
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

export default function MobileMenu() {
  const [click, setClick] = useState(false);
  const router = useRouter();
  const closeMobileMenu = () => setClick(false);
  const handleClick = () => setClick(!click);

  return (
    <nav className={[style[""], style["nav-menu"]].join(" ")}>
      <div
        className={[style["burger"], style["menu-icon"]].join(" ")}
        onClick={handleClick}
      >
        {click ? (
          <div
            className={[style["strip"], style["burger-strip-4-active"]].join(
              " "
            )}
          >
            <div></div>
            <div></div>
            <div></div>
          </div>
        ) : (
          <div className={[style["strip"], style["burger-strip-4"]].join(" ")}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
      </div>
      <div
        className={
          click
            ? [style["mobile-nav-menu-wrapper"], style["active-menu"]].join(" ")
            : style["mobile-nav-menu-wrapper"]
        }
      >
        <ul className={style["mobile-nav-menu"]}>
          {MenuItems.NavMenuItems.map((item, index) => {
            return (
              <li onClick={closeMobileMenu} key={index}>
                <div
                  className={
                    router.pathname == item.pName
                      ? style["active-link"]
                      : style["mobile-nav--wrapper"]
                  }
                >
                  <Link
                    href={item.url}
                    passHref={true}
                    smooth={true}
                    spy={true}
                  >
                    <a
                      key={index}
                      className={
                        router.pathname == `${item.url}` ? "mobile--active" : ""
                      }
                    >
                      {item.title}
                    </a>
                  </Link>
                </div>
              </li>
            );
          })}
          {/* {MenuItems.NavMenuItems2.map((items, index) => {
            return (
              <div
                className={[style["menu--content--item"]].join(" ")}
                key={index}
              >
                {renderSwitch(items)}
              </div>
            );
          })} */}
        </ul>
      </div>
    </nav>
  );
}