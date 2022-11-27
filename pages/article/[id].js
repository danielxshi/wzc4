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
  // if (keys.length !== 1) {
  //   throw new Error("err");
  // }
  const value = params[keys[0]];
  const test = params[keys[1]];

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
    case "paragraphRightBold":
      return (
        <p className="text-2xl leading-loose mr-2 text-right">
          <strong>{value["text"]}</strong>
        </p>
      );

    case "paragraphLink":
      return (
        <p className="text-2xl leading-loose mr-2">
          {value["text"]}{" "}
          <a className="mb-0 text--link--red" href={value["link1URL"]}>
            {value["text1link"]}
          </a>
          <strong>{value["text1bold"]}</strong>
          {value["text1Cont"]}
        </p>
      );

    case "paragraphLink2":
      return (
        <p className="text-2xl leading-loose mr-2">
          {value.map((obj, index) => (
            <span className="text-2xl leading-loose" key={index}>
              {obj.text}
              <strong>{obj.bold}</strong>
              <a className="m-0 text--link--red">{obj.link}</a>
            </span>
          ))}
        </p>
      );

    case "paragraphContainsBold":
      return (
        <p className="leading-loose">
          {value.map((obj, index) => (
            <span className="text-2xl leading-loose" key={index}>
              {obj.text}
              <strong>{obj.bold}</strong>
              <a href={obj.linkURL} className="m-0 text--link--red">{obj.link}</a>
            </span>
          ))}
        </p>
      );
    case "listNoStyle":
      return (
        <ul>
          {value.map((obj, index) => (
            <li className="indent-8 text-2xl" key={index}>
              {obj.text}
            </li>
          ))}
        </ul>
      );
    case "list":
      return (
        <ul>
          {value.map((obj, index) => (
            <li className="ml-8 text-2xl circle-list" key={index}>
              {obj.text}
            </li>
          ))}
        </ul>
      );
    case "listWithSub2":
      return (
        <div>
          {value.map((obj, index) => (
            <ul className="text-2xl ml-8" key={index}>
              <div>
                <li className="circle-list">
                  {obj.text1}
                  <a href={obj.text1linkURL} className="text--link--red">
                    {obj.text1link}
                  </a>
                  {obj.text1Cont}
                  {obj.content1.map((obj, index) => (
                    <li className="ml-8 text-2xl circle-list" key={index}>
                      {obj.text}
                    </li>
                  ))}
                </li>
              </div>

              <div>
                <li className="circle-list">
                  {obj.text2}
                  <a href={obj.text2linkURL} className="text--link--red">
                    {obj.text2link}
                  </a>
                  {obj.text2Cont}
                  {obj.content2.map((obj, index) => (
                    <li className="ml-8 text-2xl circle-list" key={index}>
                      {obj.text}
                    </li>
                  ))}
                </li>
              </div>
            </ul>
          ))}
        </div>
      );

    case "listWithSub3":
      return (
        <div>
          {value.map((obj, index) => (
            <ul className="text-2xl ml-8" key={index}>
              <div>
                <li className="circle-list">
                  {obj.text1}
                  <strong>{obj.text1bold}</strong>
                  <a href={obj.text1linkURL} className="text--link--red">
                    {obj.text1link}
                  </a>
                  {obj.text1Cont}
                  {/* <div>
                    {obj.content1.map((obj, index) => (
                      <li className="ml-8 text-2xl circle-list" key={index}>
                        {obj.text}
                      </li>
                    ))}
                  </div> */}
                </li>
                <div>
                  {obj.content1.map((obj, index) => (
                    <li className="ml-8 text-2xl circle-list" key={index}>
                      {obj.text}
                      <strong>{obj.bold}</strong>
                    </li>
                  ))}
                </div>
              </div>
            </ul>
          ))}
        </div>
      );

    case "listWithSub":
      return (
        <div>
          <ul>
            <li className="ml-8 text-2xl circle-list">
              {value}
              {test.map((obj, index) => (
                <li className="ml-8 text-2xl circle-list" key={index}>
                  {obj.text}
                </li>
              ))}
            </li>
          </ul>
        </div>
      );
    case "bList":
      return (
        <ul>
          {value.map((obj, index) => (
            <li className="ml-8 text-2xl circle-list" key={index}>
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

    case "citeRight":
      return (
        <p className="text-right text-2xl leading-loose mr-2 text-gray-400">
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
