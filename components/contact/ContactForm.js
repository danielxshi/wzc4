import EmailForm from './EmailForm';
import QuoteForm from './QuoteForm';
import style from '../../styles/modules/_contact.module.scss';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactForm() {
  const [show, setShow] = React.useState('email');
  const handleChange = (event) => {
    setShow((show = 'quote'));
    console.log(event.target.value);
  };
  const handleChangeEmail = (event) => {
    setShow((show = 'email'));
    console.log(event.target.value);
  };

  return (
    <div
      className={style['container']}
    >
      {/* On change */}
      {/* <div className={style['container-radiobox']}>
        <ul>
          <li>
            <input type="radio" id="email" name="selector" defaultChecked />
            <label onClick={handleChangeEmail} for="email">
              Email
            </label>
            <div className={style['check']}>
              <div className={style['inside']}></div>
            </div>
          </li>

          <li>
            <input type="radio" id="quote" name="selector" />
            <label onClick={handleChange} for="quote">
              Quote
            </label>

            <div className={style['check']}>
              <div className={style['inside']}></div>
            </div>
          </li>
        </ul>
      </div> */}

      <AnimatePresence>
        {show === 'email' ? (
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{
            //   ease: [0, 0.55, 0.45, 1],
            //   duration: 0.5,
            // }}
          >
            <EmailForm />
          </motion.div>
        ) : null}
        {/* Swap */}
      </AnimatePresence>

      <AnimatePresence>
        {show === 'quote' ? (
          <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // exit={{ opacity: 0 }}
            // transition={{
            //   ease: [0, 0.55, 0.45, 1],
            //   duration: 0.5,
            // }}
          >
            <QuoteForm />
          </motion.div>
        ) : null}
        {/* Swap */}
      </AnimatePresence>
    </div>
  );
}
