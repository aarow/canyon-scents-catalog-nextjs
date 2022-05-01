import Head from "next/head";
import { getAllProducts } from "../lib/getShopifyData";
import styles from "../styles/Home.module.css";
import Catalog from "../components/Catalog";

export default function Home({ products }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Canyon Scents Catalog</title>
        <meta
          name="description"
          content="Welcome to Canyon Scents. The gold standard in candles."
        />
      </Head>

      <Catalog products={products} />
    </div>
  );
}

export async function getStaticProps() {
  const data = await getAllProducts();
  return {
    props: {
      products: data,
    },
  };
}
