import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Image from "../components/image";
import SEO from "../components/seo";
import BackgroundSection from "../components/Globals/BackgroundSection";
import Info from "../components/Home/Info";
import Menu from "../components/Home/Menu";
import Products from "../components/Home/Products";
import Contact from "../components/Home/Contact";

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="regular joe's"
      styleClass="default-background"
    />
            <button className="snipcart-customer-signin">My account</button>

    <Info />
    <Menu items={data.menu}/>
    <Products />
    <Contact />
  </Layout>
);

export const query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }

    
      menu: allContentfulCoffeeItemExample {
        edges {
          node {
            title
            id
            price
            category
            description {
              description
            }
            image {
              fixed(width: 50, height: 50) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    
    

  }
`;

export default IndexPage;
