import Messages from "../../components/JSON/ArticleMessages";
import CurrentNews from "../../components/article/CurrentNewsModule";
import ArticleDetailSection from "../../components/article/ArticleDetailSection";
import style from "../../styles/modules/_articles.module.scss";
import Carousel from "../../components/header/Carousel";
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

export const renderSwitch = (params) => {
  if (!params) {
    return "";
  }
  const keys = Object.keys(params);
  if (keys.length !== 1) {
    throw new Error("err");
  }
  const value = params[keys[0]];
  switch (keys[0]) {
    case "paragraph":
      return <p className="text-2xl leading-loose mr-2">{value["text"]}</p>;
    case "bParagraph":
      return (
        <p className="text-2xl leading-loose mr-2">
          <strong>{value["text"]}</strong>
        </p>
      );
    case "pMid":
      return (
        <p className="text-2xl leading-loose mr-2 text-center">
          {value["text"]}
        </p>
      );
    case "pMidBold":
      return (
        <p className="text-2xl leading-loose mr-2 text-center">
          <strong>{value["text"]}</strong>
        </p>
      );
    case "paragraphRight":
      return (
        <p className="text-2xl leading-loose mr-2 text-right">
          {value["text"]}
        </p>
      );
    case "bList":
      return (
        // <p className="text-2xl leading-loose mr-2 text-right">
        //   {value["text"]}
        // </p>
        <ul>
          {value.map((obj, index) => (
            <li className="text-2xl circle-list" key={index}>
              <strong>{obj.text}</strong>
            </li>
          ))}
        </ul>
      );
    case "image":
      return (
        <div className={style["unset-img"]}>
          <Image
            className={style["custom-img"]}
            src={"" + value["imageSRC"]}
            layout="fill"
            objectFit="contain"
          />
        </div>
      );
    case "video":
      return (
        <video width="100%" height="500" controls>
          <source src={"" + value["videoURL"]} type="video/mp4" />
        </video>
      );
    case "citeMid":
      return (
        <p className="text-center text-2xl leading-loose mr-2 text-gray-400">
          {value["text"]}
        </p>
      );
    case "cite":
      return (
        <p className="text-2xl leading-loose mr-2 text-gray-400">
          {value["text"]}
        </p>
      );
    case "link":
      return (
        <a className="text-red-800 text-2xl" href={value["linkURL"]}>
          {value["linkText"]}
        </a>
      );
    case "linkMid":
      return (
        <a
          className="text-red-800 text-2xl text-center"
          href={value["linkURL"]}
        >
          {value["linkText"]}
        </a>
      );
    case "plink":
      return (
        <p className="text-2xl leading-loose mr-2">
          {value["text"]}{" "}
          <a className="text-red-800" href={value["href"]}>
            {value["link"]}
          </a>
        </p>
      );
    case "iframe":
      return (
        <iframe
          src={"" + value["videoURL"]}
          width="100%"
          height="480"
          allow="autoplay"
        ></iframe>
      );
    case "space":
      return <br></br>;
    default:
      return "";
  }
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
          {/* {JSON.stringify((currentItem.article.content)[0])} */}
          {currentItem.article.content.map((items, index) => {
            return (
              <div className={style["article--content--item"]} key={index}>
                {renderSwitch(items)}
              </div>
            );
          })}
        </ArticleDetailSection>
        <CurrentNews />
      </div>
    </div>
  </div>
);
