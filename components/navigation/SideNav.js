import style from "../../styles/modules/_nav.module.scss";
import MenuItems from "../JSON/MenuItems";
import { useRouter } from "next/router";

/*

Get current path if path is as follows ie: /info 
pass info arrayItems or use previous method of switch case for culture | info | events
retrieve messages from info:
pass infoMessages object into currentItem and return sidenav with respective menuItems 

*/

// export const getCurrentItem = {};

// export const renderSwitch = (params) => {
//   const router = useRouter();
//   if (!params) {
//     return "";
//   }
//   const keys = Object.keys(params);
//   const value = params[keys[0]];

//   switch (keys[0]) {
//     case "culture":
//       return (
//         <div>
//           {value.map((obj, index) => (
//             <div className={style["menu--item--container"]}>
//               <Link href={obj.url}>
//                 <a
//                   className={router.pathname == `${obj.url}` ? "subactive" : ""}
//                 >
//                   {obj.subtitle}
//                 </a>
//               </Link>
//             </div>
//           ))}
//         </div>
//       );

//     default:
//       return "";
//   }
// };
export default function SideNav(props) {
  return (
    <>
      <div className={style["side-nav--container"]}>
        <div className={style["header--container"]}>
          <h4 className="text-xl">{props.category}</h4>
        </div>
        <div className={style["side-nav--menu--container"]}>
          {/* <ul>
              {currentItem.SideNavMenuItems.map((items, index) => {
                return <div key={index}>{renderSwitch(items)}</div>;
              })}
            </ul> */}
          {props.children}
        </div>
      </div>
    </>
  );
}
