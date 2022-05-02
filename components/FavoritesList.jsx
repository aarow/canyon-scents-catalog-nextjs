import { useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import ReactToPrint from "react-to-print";
import { CopyToClipboard } from "react-copy-to-clipboard";

import { removeFavorite } from "../redux/favorites/favoriteSlice";
import HeartIcon from "./HeartIcon";
import Modal from "./Modal";

const COPY = "Copy";
const COPIED = "Copy (Copied favorites to clipboard)";

export default function FavoritesList({ products }) {
  let listRef = useRef();
  const [showFavoriteList, setShowFavoriteList] = useState(false);
  const [copyToClipboardText, setCopyToClipboardText] = useState(COPY);
  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.ids);

  function toggleModal() {
    setShowFavoriteList(!showFavoriteList);
  }

  function makeTextList() {
    return products.reduce((collection, product) => {
      if (favoritesList.includes(product.id)) {
        const {
          id,
          title,
          featuredImage: { thumb },
        } = product;

        return `${collection}- ${title}\n`;
      }
      return collection;
    }, "My Canyon Scents Favorites:\n");
  }

  function productMarkup() {
    return products.reduce((collection, product) => {
      if (favoritesList.includes(product.id)) {
        const {
          id,
          title,
          featuredImage: { thumb },
        } = product;

        return [
          ...collection,
          <li key={`favorite-${id}`} className="not-prose">
            <div className="flex items-center mb-3 border border-black p-2">
              <div className="w-16 border border-black p-1 mr-3 not-prose">
                <img src={thumb} alt={title} className="" />
              </div>
              <h4 className="w-full col-span-10">{title}</h4>
              <button
                className="rounded-full text-red-600 p-2 font-bold"
                type="button"
                onClick={() => dispatch(removeFavorite(id))}
              >
                &times;
              </button>
            </div>
          </li>,
        ];
      }
      return collection;
    }, []);
  }

  function handleCopy() {
    setCopyToClipboardText(COPIED);
    setTimeout(() => {
      setCopyToClipboardText(COPY);
    }, 3000);
  }

  return (
    <>
      {showFavoriteList && (
        <Modal onClick={toggleModal} onClose={toggleModal}>
          <div
            ref={(el) => (listRef = el)}
            className="w-full h-full flex justify-center items-center"
          >
            <div className="w-96 mx-auto prose lg:prose-xl">
              <h2 className="title-font">
                <span className="pr-3">
                  <HeartIcon size={44} fillColor="#e9e9e9" />
                </span>
                Favorites
              </h2>
              <div>
                <ReactToPrint
                  trigger={() => <button type="button">Print</button>}
                  content={() => listRef}
                />
                {" | "}
                <CopyToClipboard text={makeTextList()} onCopy={handleCopy}>
                  <button>{copyToClipboardText}</button>
                </CopyToClipboard>
              </div>
              <div className="not-prose">
                <ul>{productMarkup()}</ul>
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-black text-white px-4 py-2"
                >
                  Add Favorite
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
      <button
        type="button"
        onClick={toggleModal}
        aria-label={showFavoriteList ? "Hide Favorites" : "Show Favorites"}
        className="relative"
      >
        <HeartIcon size={44} fillColor="#e9e9e9" />
        {favoritesList.length > 0 && (
          <span className="absolute top-0 left-3/4 bg-red-600 text-white text-sm rounded-full px-2">
            {favoritesList.length}
          </span>
        )}
      </button>
    </>
  );
}
