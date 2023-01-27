import NewsPreview from "../components/home/NewsPreview";
import SelfIntro from "../components/home/About";
import ArticleSection from "../components/article/ArticleSection";
import React from "react";
import President from "../components/home/President";

export default function Home() {
  return (
    <>
      <President />
      <ArticleSection />
      <NewsPreview />
      <SelfIntro />
    </>
  );
}
