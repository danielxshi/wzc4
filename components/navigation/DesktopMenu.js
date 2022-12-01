import style from "../../styles/modules/_nav.module.scss";
import React, { useState, useEffect } from "react";
import MenuItems2 from "./MenuItems2";
import MenuItems from "../JSON/MenuItems";
import MenuItems3 from "./MenuItems3"
import { useRouter } from "next/router";
import Link from "next/link";

function DesktopMenu() {
  const [click, setClick] = useState(false);
  const closeMobileMenu = () => setClick(false);
  const router = useRouter();

  return (
    <div
      className={
        click
          ? [style["nav-menu-wrapper"], style["active"]].join(" ")
          : [style["desktop-nav-menu-wrapper"], style["nav-menu-wrapper"]].join(
              " "
            )
      }
    >
      <ul className={style["nav-menu"]}>
        {/* {MenuItems.NavMenuItems.map((menu, index) => {
          return <MenuItems2 items={menu} key={index} />;
        })} */}
        <MenuItems3/>
      </ul>
    </div>
  );
}

export default DesktopMenu;
