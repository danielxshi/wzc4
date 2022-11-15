import Image from 'next/image';
import ContactItems from './ContactItems';
import style from '../../styles/modules/_contact.module.scss';
import { HiLocationMarker } from 'react-icons/hi';
import { ImLinkedin2, ImPhone } from 'react-icons/im';
import { FaFacebookF } from 'react-icons/fa';
import { IoMdMail } from 'react-icons/io';

export default function ContactInformation() {
  return (
    <aside className="contact--information--wrapper">
      <h3 className={style['contact--information--header']}>OUR INFORMATION</h3>
      <div className="contact--information--wrapper">
        <ul className={style['contact--information']}>
          {ContactItems.ContactDetailItems.map((item, index) => {
            return (
              <li className={style['contact--information--item']} key={index}>
                <div
                  className={
                    'location' == item.name
                      ? style['active']
                      : style['inactive']
                  }
                >
                  <HiLocationMarker className="flex" />
                </div>
                <div
                  className={
                    'mail' == item.name ? style['active'] : style['inactive']
                  }
                >
                  <IoMdMail className="flex" />
                </div>
                <div
                  className={
                    'phone' == item.name ? style['active'] : style['inactive']
                  }
                >
                  <ImPhone className="flex" />
                </div>
                <caption>{item.contactInfo}</caption>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={style['social--media--information--wrapper']}>
        <div className={style['social--media--title--wrapper']}>
          <h6 className="subtitle-1">Follow Us!</h6>
        </div>
        <ul className={style['social--media--item--wrapper']}>
          {ContactItems.SocialMediaItems.map((item, index) => {
            return (
              <li className={style['social--media--item']} key={index}>
                <a href={item.href}>
                  <div
                    className={
                      'LinkedIN' == item.name
                        ? style['active']
                        : style['inactive']
                    }
                  >
                    <ImLinkedin2 />
                  </div>
                  <div
                    className={
                      'HAVEN' == item.name ? style['active'] : style['inactive']
                    }
                  >
                    <FaFacebookF />
                  </div>
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
}
