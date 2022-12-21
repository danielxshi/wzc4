/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "../../styles/modules/_nav.module.scss";
import { ImPhone } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import SocialItems from "../JSON/SocialItems";
import Modal from "../contact/ContactModal";

export default function Layout({ children }) {
  const [showModal, setShowModal] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={[style["nav-grid"], style["top-bar"]].join(" ")}>
      <div className="flex col-start-12 m-auto">
        <span className="whitespace-nowrap mr-6">服务热线 604-379-9888</span>
        <Modal onClose={() => setShowModal(false)} show={showModal}>
          <h1>test</h1>
          <p>test</p>
        </Modal>
        <ul>
          <li>
            <button
              className="cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              <div className="w-6">
                <Image
                  objectFit="contain"
                  width="32"
                  height="32"
                  src={SocialItems.WeChat}
                  priority
                />{" "}
              </div>
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
