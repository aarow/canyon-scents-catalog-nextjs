import gql from "graphql-tag";
import { print } from "graphql";

const storeDomain = "canyon-scents.myshopify.com";
const storefrontToken = "82fdc26114d1db718aca35c6b674dea8";
const storefrontApiVersion = "2022-04";

export async function getShopifyData(query) {
  const URL = `https://${storeDomain}/api/${storefrontApiVersion}/graphql.json`;

  const options = {
    endpoint: URL,
    method: "POST",
    headers: {
      "X-Shopify-Storefront-Access-Token": storefrontToken,
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };
  try {
    const data = await fetch(URL, options).then((response) => {
      return response.json();
    });

    return data;
  } catch (error) {
    throw new Error("Products not fetched");
  }
}

export async function getAllProducts() {
  const query = gql`
    query welcomeContent($language: LanguageCode)
    @inContext(language: $language) {
      collections(first: 5) {
        edges {
          node {
            title
            products(first: 30, sortKey: TITLE) {
              edges {
                node {
                  totalInventory
                  title
                  handle
                  id
                  title
                  description
                  featuredImage {
                    hd: url(
                      transform: { maxWidth: 720, preferredContentType: JPG }
                    )
                    thumb: url(
                      transform: { maxWidth: 400, preferredContentType: JPG }
                    )
                  }
                  priceRange {
                    maxVariantPrice {
                      amount
                    }
                    minVariantPrice {
                      amount
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `;

  const response = await getShopifyData(print(query));

  // reformat data
  const allProducts = response.data.collections.edges
    ? response.data.collections.edges
        .map(({ node }) => [...node.products.edges])
        .flat()
        .map(({ node }) => ({ ...node }))
    : [];

  return allProducts;
}
