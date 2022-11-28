import style from "../../styles/modules/_nav.module.scss";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import MenuItems from "../JSON/MenuItems";

function MobileMenu() {
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
                    {item.title}
                  </Link>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

export default MobileMenu;
