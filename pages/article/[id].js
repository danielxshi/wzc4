// import { playlist } from '../../data';
// import { Box, Heading, Text, Button } from '@chakra-ui/core';
import NextLink from "next/link";
import Messages from "../../components/JSON/ArticleMessages";
import CurrentNews from "../../components/article/CurrentNewsModule";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";
import style from "../../styles/modules/_articles.module.scss";
import Carousel from "../../components/header/Carousel";
import { imageConfigDefault } from "next/dist/server/image-config";
import Image from "next/image";

export const getStaticProps = async ({ params }) => {
  const playlistList = Messages.ArticleListMessages.filter(
    (p) => p.id.toString() === params.id
  );
  return {
    props: {
      currentItem: playlistList[0],
    },
  };
};

export const getStaticPaths = async () => {
  const paths = Messages.ArticleListMessages.map((currentItem) => ({
    params: { id: currentItem.id.toString() },
  }));

  return { paths, fallback: false };
};

export default ({ currentItem }) => (
  <div>
    <div className={style["article--detail--page"]}>
      <Carousel />
      <div className="grid--container">
        <ArticleDetailSection
          categoryClass={currentItem.categoryClass}
          subCategoryClass={currentItem.subCategoryClass}
          category={currentItem.category}
          parentDirectory={currentItem.parentDirectory}
          subCategory={currentItem.subcategory}
          articleTitle={currentItem.article.title}
        >
          {/* Map items */}
          {currentItem.article.content.map((currentItems) => {
            return (
              <>
                {currentItems.paragraph ? (
                  <>
                    <p className="text-2xl leading-loose mr-2">
                      {currentItems.paragraph.text}
                    </p>
                  </>
                ) : (
                  <div className={style["image--contain"]}>
                    <Image
                      objectFit="cover"
                      // width="100%"
                      // height="100%"
                      src={currentItems.image.imageSRC}
                      layout="fill"
                      priority
                    />
                  </div>
                )}
              </>
            );
          })}

          {/* Ternary operator for image | text | video */}
        </ArticleDetailSection>
        <CurrentNews />
      </div>
    </div>
  </div>
);