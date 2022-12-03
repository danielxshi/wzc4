import React from "react";
import Carousel from "../header/Carousel";
import CurrentNews from "../article/CurrentNewsModule";
import SideNav from "../navigation/SideNav";

export default function Events(props) {
  return (
    <>
      <Carousel />
      <div className="grid--container">
        {props.children}
        <CurrentNews />
        {/* <SideNav/> */}
      </div>
    </>
  );
}
