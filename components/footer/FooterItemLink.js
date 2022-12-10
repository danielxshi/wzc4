import Link from "next/link";
function FooterItemLink(props) {
  return (
    <li>
      <Link href={`/${props.link}`}>
        <a className="whitespace-nowrap mb-2 text-base">{props.children}</a>
      </Link>
    </li>
  );
}

export default FooterItemLink;
