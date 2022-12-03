import style from "../../styles/modules/_nav.module.scss";
import MenuMessages from "../JSON/MenuItems";
// import { a } from "react-router-dom";
// // // import { BrowserRouter as Router } from "react-router-dom";

export const renderSwitch = (params) => {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];
  const test = params[keys[1]];

  // Testing
  let activeStyle = {
    textDecoration: "underline",
  };

  let activeClassName = "underline";

  switch (keys[0]) {
    case "menu":
      return (
        <div className="menu--container">
          {value.map((item, index) => (
            <div className="dropdown">
              {/* <Router> */}
                <a
                  // style={({ isActive }) => (isActive ? activeStyle : undefined)}
                  key={index}
                  href={item.url}
                  className="dropbtn"
                >
                  {item.title}
                </a>
                <ul className="dropdown-content">
                  {item.submenu.map((item2, index) => {
                    return (
                      <a
                        key={index}
                        className="whitespace-nowrap"
                        href={item2.url}
                        // style={({ isActive }) =>
                        //   isActive ? activeStyle : undefined
                        // }
                      >
                        {item2.subtitle}
                      </a>
                    );
                  })}
                </ul>
              {/* </Router> */}
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
