import style from "../../styles/modules/_footer.module.scss";
import FooterMenuTitle from "./FooterMenuTitle";

function FooterMenuItems(props) {
  return (
    <div className="mr-16">
      <FooterMenuTitle 
        title={props.title}
      />
      <div className={style["footer--links"]}>{props.children}</div>
    </div>
  );
}

export default FooterMenuItems;
