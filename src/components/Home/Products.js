import React from "react";
import Product from "./Product";
import { StaticQuery, graphql } from "gatsby";
import Title from "../Globals/Title";

const getProducts = graphql`
  {
    products:  allContentfulCoffeeProduct {
        edges {
          node {
            id
            price
            title
            image {
              fluid {
                src
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
  }
`;

export default function Products() {
  return (
    <div>
      <StaticQuery
        query={getProducts}
        render={(data) => {
          return (
            <section className="py-5">
              <div className="container">
                <Title title="our products" />
                <div className="row">
                  {data.products.edges.map(({ node: product }) => {
                    return <Product key={product.id} product={product} />;
                  })}
                </div>
              </div>
            </section>
          );
        }}
      />
    </div>
  );
}
