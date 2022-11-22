import ArticleListItem from "./ArticleListItem";
import ArticleMessages from "../JSON/ArticleMessages";
import React, { useState } from "react";
import ReactPaginate from "react-paginate";

export const getStaticProps = async () => {
  return {
    props: {
      ArticleItems: ArticleMessages,
    },
  };
};

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    // <>
    //   {currentItems &&
    //     currentItems.map((item) => (
    //       <div>
    //         <h3>Item #{item}</h3>
    //       </div>
    //     ))}
    // </>
    <div>
      {ArticleMessages.ArticleListMessages.map((currentItems, index) => {
        return (
          <div key={index}>
            <ArticleListItem
              title={currentItems.article.title}
              date={currentItems.article.date}
              imgSRC={currentItems.article.imageURL}
              textPreview={currentItems.article.previewText}
              URL={`/article/${currentItems.id}`}
            ></ArticleListItem>
          </div>
        );
      })}
    </div>
  );
}

function PaginatedItems({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
    </>
  );
}

function ArticleList({ ArticleItems }) {
  return (
    <div className="row-start-1 col-span-8">
      <h3 className="text-2xl">信息资讯</h3>
      <div>
        <PaginatedItems itemsPerPage={4} />
        {/* {ArticleMessages.ArticleListMessages.map(item => {
          return (
            <div>
              <ArticleListItem
                title={item.article.title}
                date={item.article.date}
                imgSRC={item.article.imageURL}
                textPreview={item.article.previewText}
                URL={`/article/${item.id}`}
              ></ArticleListItem>
            </div>
            
          );
        })} */}
      </div>
      {/* <div>
        {ArticleItems.ArticleItems.map((item, index) => {
          return <p>{item.Events.article.title}</p>;
        })}
      </div> */}
    </div>
  );
}

export default ArticleList;
