import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MediumLayout from "../layouts/MediumLayout";
import MenuItems from "../JSON/MenuItems";
import FooterMenuItems from "./FooterMenuItems";
import FooterItemLink from "./FooterItemLink";
import FooterListItem from "./FooterListItem";
import FooterMenuTitle from "./FooterMenuTitle";
import style from "../../styles/modules/_footer.module.scss"
import ImageWithFallback from "../ImageWithFallBack";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const openMenu = () => setIsOpen(!isOpen);
  return (
    <MediumLayout className2="footer--container">
      <div className={style["footer--container"]}>
        <FooterMenuItems title={MenuItems.FooterC1Title}>
          <ul>
            {MenuItems.FooterC1MenuItems.map((item, index) => {
              return <FooterItemLink link={item.Link} key={index}>{item.Item}</FooterItemLink>;
            })}
          </ul>
        </FooterMenuItems>
        <FooterMenuItems title={MenuItems.FooterC2Title}>
          <ul>
            {MenuItems.FooterC2MenuItems.map((item, index) => {
              return <FooterItemLink link={item.Link} key={index}>{item.Item}</FooterItemLink>;
            })}
          </ul>
        </FooterMenuItems>
        <FooterMenuItems title={MenuItems.FooterC3Title}>
          <ul>
            {MenuItems.FooterC3MenuItems.map((item, index) => {
              return <FooterItemLink link={item.Link} key={index}>{item.Item}</FooterItemLink>;
            })}
          </ul>
        </FooterMenuItems>
        <FooterMenuItems title={MenuItems.FooterC4Title}>
          <ul>
            {MenuItems.FooterC4MenuItems.map((item, index) => {
              return <FooterItemLink link={item.Link} key={index}>{item.Item}</FooterItemLink>;
            })}
          </ul>
        </FooterMenuItems>
      </div>

      {/* Right section */}
      <div className="flex flex-wrap">
        <div className="flex flex-wrap ml-16 w-max flex-col ">
          <FooterMenuTitle title={MenuItems.FooterC5Title} />
          <ImageWithFallback
            objectFit="cover"
            width={180}
            height={180}
            src={MenuItems.QRCode}
            fallbackSrc={MenuItems.QRFallBack}
            priority
          />
        </div>

        <div className="flex-wrap flex ml-16">
          <div className={style["operation--info"]}>
            <FooterMenuTitle title={MenuItems.FooterC6Title} />
            <ul>
              <FooterListItem>{MenuItems.BusinessHours}</FooterListItem>
              <FooterListItem>{MenuItems.FooterPhone}</FooterListItem>
            </ul>
          </div>
        </div>
      </div>
    </MediumLayout>
  );
}
