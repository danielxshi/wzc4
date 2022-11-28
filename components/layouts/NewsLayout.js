import React from "react";
import Carousel from "../header/Carousel";
import CurrentNews from "../article/CurrentNewsModule";

export default function Events(props) {
  return (
    <>
      <Carousel />
      <div className="grid--container">
        {props.children}
        <CurrentNews />
      </div>
    </>
  );
}
