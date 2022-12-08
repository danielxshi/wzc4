import style from "../../styles/modules/_nav.module.scss";
import MenuMessages from "../JSON/MenuItems";
import { useRouter } from "next/router";
import Link from "next/link";

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
            <div className="dropdown">
              <Link href={item.url}>
                <a
                  key={index}
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
                {item.submenu.map((item2, index) => {
                  return (
                    <Link className="whitespace-nowrap" href={item2.url}>
                      <a
                        key={index}
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
