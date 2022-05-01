import { useEffect, useState } from "react";
import { Flipper, Flipped } from "react-flip-toolkit";
import CatalogItem from "./CatalogItem";
import CatalogThumb from "./CatalogThumb";
import ModalControls from "./ModalControls";
import FavoritesList from "./FavoritesList";
import Header from "./Header";

export default function Catalog({ products }) {
  const [activeProduct, setActiveProduct] = useState(null);

  function handleGoTo(newProduct) {
    // set as null if same id as before
    setActiveProduct(newProduct?.id === activeProduct?.id ? null : newProduct);
  }

  return (
    <div className="pt-20">
      <Header>
        <FavoritesList products={products} />
      </Header>

      <div>
        <img src="/banner.jpg" alt="" />
      </div>

      <Flipper flipKey={activeProduct?.id} spring="gentle">
        {activeProduct && (
          <>
            <div className="z-10 fixed top-0 left-0 right-0 bottom-0  bg-white fade-in"></div>
            <div className="z-40 relative">
              <ModalControls
                currItem={activeProduct}
                goTo={handleGoTo}
                prevItem={products[getIndex(activeProduct, products) - 1]}
                nextItem={products[getIndex(activeProduct, products) + 1]}
              />
            </div>
          </>
        )}

        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-6 p-4">
          {products.sort(sortString).map((product, index) => (
            <div key={product.id}>
              {activeProduct?.id !== product.id ? (
                <CatalogThumb product={product} onClick={handleGoTo} />
              ) : (
                <div>
                  <div className="z-10 fixed top-0 left-0 right-0 bottom-0">
                    <CatalogItem currItem={activeProduct} />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </Flipper>
    </div>
  );
}

function getIndex(item, group) {
  return group.findIndex((currItem) => {
    return currItem?.id === item?.id;
  });
}

function sortString(a, b) {
  if (a.title > b.title) return 1;
  return -1;
}
