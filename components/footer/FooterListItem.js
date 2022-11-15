import style from "../../styles/modules/_footer.module.scss";

function FooterListItem(props) {
  return (
    <li className="whitespace-nowrap mb-2 text-base">
        {props.children}
    </li>
  );
}

export default FooterListItem;
