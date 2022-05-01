import { Flipped } from "react-flip-toolkit";
import { preloadImage } from "../utils";
import FavoriteButton from "./FavoriteButton";

export default function CatalogThumb({ product, onClick }) {
  const { id, title, featuredImage } = product;
  const { hd: hdImage } = featuredImage;
  const backgroundStyle = {
    backgroundImage: `url("${featuredImage?.thumb}")`,
  };

  function handleClick() {
    if (onClick) onClick(product);
  }

  return (
    <div className="relative group">
      <button
        type="button"
        className="w-full h-full p-4"
        onClick={handleClick}
        onMouseEnter={() => preloadImage(hdImage)}
      >
        <div className="bg-white duration-200 scale-90 group-hover:scale-100  group-hover:shadow-xl">
          <Flipped flipId={`${id}-productBackground`}>
            <div className="w-full h-full p-3 border border-black ">
              <div
                style={backgroundStyle}
                className="bg-center bg-cover aspect-square relative "
              >
                <div className="w-full h-full flex justify-center items-center scale-50 group-hover:scale-100 group-hover:opacity-100 opacity-0 duration-200 ">
                  <Flipped flipId={`${id}-productTitle`}>
                    <h3 className="title-font bg-white p-2 m-1 border-gray-300">
                      {title}
                    </h3>
                  </Flipped>
                </div>
              </div>
            </div>
          </Flipped>
        </div>
      </button>
      <div className="absolute bottom-8 right-8 ">
        <Flipped flipId={`${id}-productFavorite`}>
          <FavoriteButton id={id} />
        </Flipped>
      </div>
    </div>
  );
}
