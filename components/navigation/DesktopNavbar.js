import Link from "next/link";
import React, { useState, useEffect } from "react";
import style from "../../styles/modules/_nav.module.scss";
import { debounce } from "../../utilities/helpers";
import Topbar from "./Topbar";
import DesktopMenu from "./DesktopMenu";
import MenuItems from "../JSON/MenuItems";
import Image from "next/image";

function Navbar() {
  const [visible, setVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const closeMobileMenu = () => setClick(false);
  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset;
    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 90
    );
    setPrevScrollPos(currentScrollPos);
  }, 0);
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);
  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  const navbarStyles = {
    position: "fixed",
    width: "100%",
    textAlign: "center",
    transition: "top 0.5s",
  };
  return (
    <div
      style={{ ...navbarStyles, top: visible ? "0" : "-48px" }}
      className={[style["desktop--nav--wrapper"]].join(" ")}
    >
      <Topbar />
      <nav className={[style["navbar"], style["nav-grid"]].join(" ")}>
        <Image
          objectFit="contain"
          width={36}
          height={36}
          src={MenuItems.Logo}
          priority
        />
        <Link
          passHref={true}
          href="/"
          // onClick={closeMobileMenu}
        >
          <div className="ml-neg-1 text-left whitespace-nowrap">
            {MenuItems.CompanyNameCH}
            <br />
            {MenuItems.CompanyNameEN}
          </div>
        </Link>

        <DesktopMenu />
      </nav>
    </div>
  );
}

export default Navbar;
