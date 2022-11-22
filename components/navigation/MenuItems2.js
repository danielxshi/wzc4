import { useState } from "react";
import Dropdown from "./DropMenu";
import Link from "next/link";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a
            type="button"
            className="desktopNavButton"
            aria-haspopup="menu"
            href={items.url}
            aria-expanded={dropdown ? "true" : "false"}
            onMouseOver={() => setDropdown((prev) => !prev)}
          >
            {items.title}{" "}
          </a>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <a className="solo-nav" href={items.url}>
          {items.title}
        </a>
      )}
    </li>
  );
};

export default MenuItems;
