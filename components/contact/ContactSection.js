import ExtendableLayout from "../layouts/ExtendableLayout";
import ContactInformation from "./ContactInformation";
import ContactForm from "../contact/ContactForm";
import style from "../../styles/modules/_contact.module.scss";

export default function ContactSection() {
  return (
    <div className={style["contact--container"]}>
      <ExtendableLayout>
        <div className={style["contact--section--information--gc"]}>
          <ContactInformation />
        </div>
        <div className={style["contact--section--form--gc"]}>
          <ContactForm />
        </div>
      </ExtendableLayout>
    </div>
  );
}
