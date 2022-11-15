import style from '../../styles/modules/_contact.module.scss';
import { useState, useEffect } from 'react';

export default function QuoteForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const [success, setSuccess] = useState(false);
  useEffect(() => {
    if (window.location.search.includes('success=true')) {
      setSuccess(true);
    }
  }, []);

  const handleSubmit = (e) => {
    // e.preventDefault();
    console.log('Sending');

    let data = {
      name,
      email,
      message,
    };

    fetch('api/contact', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    }).then((res) => {
      console.log('Response received');
      if (res.status === 200) {
        console.log('Response succeeded!');
        setSubmitted(true);
        setName('');
        setEmail('');
        setMessage('');
      }
    });
  };

  //   Show form
  const [toggleShow, setToggleShowed] = useState(true);

  return (
    <div className={style['form--content--wrapper']}>
      <h4 className={style['contact--form--title']}>GET A QUOTE</h4>
      {success && (
        <p style={{ color: '#13ff13' }}>Successfully submitted form!</p>
      )}
      <form
        name="contact"
        method="POST"
        action="contact/?success=true"
        // data-netlify="true"
      >
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="name">
            Full Name
          </label>
          <input
            className={style['form--input']}
            type="text"
            name="name"
            placeholder="Your Full Name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            Email
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Email Address"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            Phone
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Phone Number"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            Location
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Location"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            Type of Project
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Project Type"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div id={style['email']} className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="email">
            Project Start Date
          </label>
          <input
            className={style['form--input']}
            type="email"
            name="email"
            // pattern=".+@globex\.com"
            placeholder="Your Start Date"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className={style['label--input--wrapper']}>
          <label className={style['form--label']} htmlFor="message">
            Message
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
          className="primary--btn"
          type="submit"
          value="Your Message"
          onClick={(e) => {
            handleSubmit(e);
          }}
        >
          EQUIRE
        </button>
      </form>
    </div>
  );
}
