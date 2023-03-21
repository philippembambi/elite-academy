import { graphql } from "gatsby";
import * as React from "react";
import Home from "../components/pages/Home";

const IndexPage = ({ data }) => {
  const carouselItems = data.allCarouselJson.edges.map((edge) => edge.node);
  const GoogleMap = data.staticMap;
  //console.log('courses: ', courses);
  return <Home carouselItems={carouselItems} map={GoogleMap.mapUrl} />;
};

export const pageQuery = graphql`
  query {
    allCarouselJson {
      edges {
        node {
          title
          subtitle
          desc
          buttontext
          buttonUrl
          students
          image {
            childImageSharp {
              gatsbyImageData(
                placeholder: DOMINANT_COLOR
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    }

    staticMap {
      mapUrl
    }
  }
`;
export default IndexPage;
