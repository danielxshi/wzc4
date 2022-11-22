import Head from "next/head";
import Image from "next/image";
import LargeHeader from "../components/header/largeHeader";
import NewsPreview from "../components/home/NewsPreview";
import SelfIntro from "../components/home/About";
import Carousel from "../components/header/Carousel";
import ArticleSection from "../components/article/ArticleSection";

export default function Home() {
  return (
    <>
      <Carousel />
      <ArticleSection />
      <NewsPreview />
      <SelfIntro />
    </>
  );
}
