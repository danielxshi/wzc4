import style from "../../styles/modules/_nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuItems from "../JSON/MenuItems";

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
          {MenuItems.NavMenuItems2.map((items, index) => {
            return (
              <li
                onClick={handleClick}
                className={[
                  style["menu--content--item"],
                  style["mobile--menu--content--item"],
                ].join(" ")}
                key={index}
              >
                <div className={style["mobile--menu--container"]}>
                  {items.menu.map((item, index) => (
                    <div key={index} className={style[""]}>
                      <h4 className={style["link--header"]}>
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
                      </h4>
                      <ul className="">
                        {item.submenu.map((item2, index2) => {
                          return (
                            <li>
                              <Link
                                className="whitespace-nowrap"
                                href={item2.url}
                              >
                                <a
                                  key={index2}
                                  className={
                                    router.pathname == `${item2.url}`
                                      ? "superactive"
                                      : ""
                                  }
                                >
                                  {item2.subtitle}
                                </a>
                              </Link>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  ))}
                </div>
                {/* {renderSwitch(items)} */}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
