import NewsPreview from "../components/home/NewsPreview";
import SelfIntro from "../components/home/About";
import Carousel from "../components/header/Carousel";
import ArticleSection from "../components/article/ArticleSection";
import DeviceDetector from "../components/DeviceDetector";

export default function Home() {
  return (
    <>
      <DeviceDetector>
        <Carousel />
        {/* <ArticleSection />
        <NewsPreview />
        <SelfIntro /> */}
      </DeviceDetector>
    </>
  );
}
