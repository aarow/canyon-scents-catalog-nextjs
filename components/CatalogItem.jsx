import { Flipped } from "react-flip-toolkit";
import FavoriteButton from "./FavoriteButton";

export default function CatalogItem({ currItem }) {
  const {
    id,
    title,
    featuredImage: { hd: imageSrc },
    description,
    priceRange: {
      maxVariantPrice: { amount: maxPrice },
      minVariantPrice: { amount: minPrice },
    },
  } = currItem;
  const backgroundStyle = {
    backgroundImage: `url("${imageSrc}")`,
  };

  function Copy() {
    return (
      <Flipped flipId={`${id}-productTitle`}>
        <div className="text-sm">
          <div className="relative prose lg:prose-xl">
            <h2 className="text-center">{title}</h2>
            <span className="block m-auto mb-5 w-32 border-t border-black" />
            <div>{description}</div>
            <div className="grid grid-cols-3 mt-3">
              <div className="font-serif italic">
                {maxPrice === minPrice && <span>${maxPrice}</span>}
                {maxPrice !== minPrice && (
                  <>
                    <span className="line-through">${maxPrice}</span>{" "}
                    <span className="text-red-700">${minPrice}</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </Flipped>
    );
  }

  function Image() {
    return (
      <Flipped flipId={`${id}-productBackground`}>
        <div className="aspect-square p-5 border border-black relative">
          <div
            style={backgroundStyle}
            className="bg-center bg-cover aspect-square"
          />
          <div className="w-8 m-auto absolute text-center left-0 right-0 -bottom-4 bg-white">
            <img src="/logo-cs.svg" alt="" />
          </div>
        </div>
      </Flipped>
    );
  }

  return (
    <div className="flex items-center">
      <div className="grid sm:grid-cols-2 gap-8 w-5/6 lg:w-2/3 mx-auto mt-20 sm:mt-0">
        <div className="pt-6 order-2 sm:order-1">
          <Copy />
          <Flipped flipId={`${id}-productFavorite`}>
            <FavoriteButton id={id} />
          </Flipped>
        </div>
        <div className="order-1 sm:order-2">
          <Image />
        </div>
      </div>
    </div>
  );
}
