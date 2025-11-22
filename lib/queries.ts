// GraphQL queries for WooCommerce products

export const GET_PRODUCTS = `
  query GetProducts($first: Int = 10) {
    products(first: $first, where: { status: "publish" }) {
      nodes {
        id
        databaseId
        name
        slug
        type
        description
        shortDescription
        ... on SimpleProduct {
          price
          regularPrice
          salePrice
          stockQuantity
          stockStatus
        }
        image {
          sourceUrl
          altText
        }
        productCategories {
          nodes {
            name
            slug
          }
        }
        ... on SimpleProduct {
          attributes {
            nodes {
              name
              options
            }
          }
        }
      }
    }
  }
`;

export const GET_PRODUCT_BY_SLUG = `
  query GetProductBySlug($slug: ID!) {
    product(id: $slug, idType: SLUG) {
      id
      databaseId
      name
      slug
      type
      description
      shortDescription
      ... on SimpleProduct {
        price
        regularPrice
        salePrice
        stockQuantity
        stockStatus
      }
      image {
        sourceUrl
        altText
      }
      galleryImages {
        nodes {
          sourceUrl
          altText
        }
      }
      productCategories {
        nodes {
          name
          slug
        }
      }
      ... on SimpleProduct {
        attributes {
          nodes {
            name
            options
          }
        }
      }
    }
  }
`;
