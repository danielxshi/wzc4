function FooterItemLink(props) {
  return (
    <li>
      <a
        href={props.link}
        className="whitespace-nowrap mb-2 text-base"
      >
        {props.children}
      </a>
    </li>
  );
}

export default FooterItemLink;
