/* eslint-disable @next/next/link-passhref */
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import style from "../../styles/modules/_nav.module.scss";
import { ImPhone } from "react-icons/im";
import { IoMdMail } from "react-icons/io";
import SocialItems from "../JSON/SocialItems";


export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <nav className={[style["nav-grid"], style["top-bar"]].join(" ")}>
      <div className="flex col-start-12 m-auto">
        <span className="whitespace-nowrap mr-6">服务热线 604-379-9888</span>
        <ul>
          <li>
            <a className="cursor-pointer" href="">
              <div className="w-6">
                <Image
                  objectFit="contain"
                  width="32"
                  height="32"
                  src={SocialItems.WeChat}
                  priority
                />{" "}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
