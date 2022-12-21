import NewsPreview from "../components/home/NewsPreview";
import SelfIntro from "../components/home/About";
import Carousel from "../components/header/Carousel";
import ArticleSection from "../components/article/ArticleSection";
import DeviceDetector from "../components/DeviceDetector";
import React from "react";
import President from "../components/home/President";

export default function Home() {
  return (
    <>
      {/* <DeviceDetector> */}
      <Carousel />
      <President />
      <ArticleSection />
      <NewsPreview />
      <SelfIntro />
      {/* </DeviceDetector> */}
    </>
  );
}
