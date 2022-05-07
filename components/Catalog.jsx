import { useEffect, useState } from "react";
import Image from "next/image";
import { Flipper, Flipped } from "react-flip-toolkit";
import CatalogItem from "./CatalogItem";
import CatalogThumb from "./CatalogThumb";
import Modal from "./Modal";
import ProductModalControls from "./ProductModalControls";
import FavoritesList from "./FavoritesList";
import Header from "./Header";
import Footer from "./Footer";
import bannerPic from "../public/banner.jpg";

export default function Catalog({ products }) {
  // return <div>fuck</div>;
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

      <div className="text-center">
        <Image src={bannerPic} alt="Canyon Scents inventory" />
      </div>

      <div className="prose lg:prose-lg m-auto mt-12 mb-6 px-3">
        <h1 className="title-font text-center ">Spring 2022 Catalog</h1>
      </div>

      <Flipper flipKey={activeProduct?.id} spring="gentle">
        <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 lg:grid-cols-6 py-4 max-w-screen-2xl m-auto">
          {products.map((product, index) => (
            <div key={product.id}>
              {activeProduct?.id !== product.id && (
                <CatalogThumb product={product} onClick={handleGoTo} />
              )}
            </div>
          ))}
        </div>
        {activeProduct && (
          <Modal onClose={() => handleGoTo(activeProduct)}>
            {products.map((product, index) => (
              <div key={product.id}>
                {activeProduct?.id === product.id && (
                  <CatalogItem currItem={activeProduct} />
                )}
              </div>
            ))}
            <ProductModalControls
              goTo={handleGoTo}
              prevItem={products[getIndex(activeProduct, products) - 1]}
              nextItem={products[getIndex(activeProduct, products) + 1]}
            />
          </Modal>
        )}
      </Flipper>
      <Footer />
    </div>
  );
}

function getIndex(item, group) {
  return group.findIndex((currItem) => {
    return currItem?.id === item?.id;
  });
}
