import SideNavItems from "../JSON/MenuItems";
import style from "../../styles/modules/_nav.module.scss";

export const renderSwitch = (params) => {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  const value = params[keys[0]];
  const test = params[keys[1]];

  switch (keys[0]) {
    case "paragraphLink2":
      return (
        <p className="text-2xl leading-loose mr-2">
          {value.map((obj, index) => (
            <span className="text-2xl leading-loose" key={index}>
              {obj.text}
              <strong>{obj.bold}</strong>
              <a className="m-0 text--link--red">{obj.link}</a>
            </span>
          ))}
        </p>
      );
  }
};

export default function SideNav(props) {
  const value = params[keys[0]];
  return (
    <div className="col-start-9 row-start-1 col-span-4">
      <div className="side-nav--container">
        <h3>{props.category}</h3>
        <ul>
          {/* Add map */}
          {test.map((item, index) => {
            return (
              <div key={index} className={style["side-nav--item"]}>
                <Link href={item.url}>{item.link}</Link>
              </div>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
