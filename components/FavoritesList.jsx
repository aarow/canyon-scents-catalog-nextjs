import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../redux/favorites/favoriteSlice";
import HeartIcon from "./HeartIcon";

export default function FavoritesList({ products }) {
  const [showFavoriteList, setShowFavoriteList] = useState(false);

  const dispatch = useDispatch();
  const favoritesList = useSelector((state) => state.favorites.ids);

  function toggleModal() {
    setShowFavoriteList(!showFavoriteList);
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

  return (
    <>
      {showFavoriteList && (
        <div className="fixed z-30 top-0 bottom-0 left-0 right-0 flex items-center h-screen bg-white">
          <div className="w-96 mx-auto prose lg:prose-xl">
            <h2 className="title-font">Favorites</h2>
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
