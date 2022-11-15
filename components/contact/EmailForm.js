import style from '../../styles/modules/_contact.module.scss';
import style2 from '../../styles/modules/_button.module.scss';
import {useRouter} from 'next/router'

import { useState, useEffect } from 'react';

export default function EmailForm() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter()
  const [route, setRoute] = useState()

  async function handleOnSubmit(e){
    e.preventDefault();
    const formData = {}
    Array.from(e.currentTarget.elements).forEach(field => {
      if(!field.name) return;
      formData[field.name] = field.value;
    });
    fetch('/api/mail', {
      method: 'post',
      body: JSON.stringify(formData)
    })
    console.log(formData);
    router.push("contact/" + "success")
  }

  return (
    <div className={style['form--content--wrapper']}>
      <h4 className={style['contact--form--title']}>SEND A MESSAGE</h4>
      <form
        onSubmit={handleOnSubmit}
      >
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="name">
            FULL NAME
          </label>
          <input
            className={style['form--input']}
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={(e) => {
              setFullname(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            EMAIL ADDRESS
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            placeholder="Your Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="mecssage">
            MESSAGE
          </label>
          <textarea
            rows="4"
            className={[
              style['form--input'],
              style['form--message--input'],
            ].join('')}
            id="subject"
            name="message"
            placeholder="Message"
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          ></textarea>
        </div>

        <button
          className={style2['primary--btn']}
          type="submit"
          value="Your Message"
          onClick={(e) => {
          }}
        >
          ENQUIRE
        </button>
      </form>
    </div>
  );
}
