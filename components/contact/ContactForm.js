import EmailForm from "./EmailForm";
import style from "../../styles/modules/_contact.module.scss";
import React from "react";

export default function ContactForm() {
  return (
    <div className={style["container"]}>
      <EmailForm />
    </div>

    
  );
}
