import { graphql } from "gatsby";
import React from "react";
import CoursePage from "../components/pages/CoursePage";
import NotFoundPage from "../pages/404";

const courseMarkdownRemark = ({ frontmatter }) => ({
  title: frontmatter.title,
  timeline: frontmatter.timeline,
  description: frontmatter.description,
  shortDescription: frontmatter.shortDescription,
  outcomes: frontmatter.outcomes,
  slug: frontmatter.slug,
  image: frontmatter.image ? frontmatter.image.childImageSharp : null,
  img2: frontmatter.img2 ? frontmatter.img2.childImageSharp : null,
  icon1: frontmatter.icon1 ? frontmatter.icon1.childImageSharp : null,
  icon2: frontmatter.icon2 ? frontmatter.icon2.childImageSharp : null,
  path: frontmatter.path,
  price: frontmatter.price,
});

const CourseTemplate = ({ data }) => {
  //console.log(data);
  const { markdownRemark, allMarkdownRemark } = data;
  if (allMarkdownRemark && markdownRemark) {
    const course = courseMarkdownRemark(markdownRemark);
    const allCourses = allMarkdownRemark.edges.map((edge) =>
      courseMarkdownRemark(edge.node)
    );
    return <CoursePage course={course} otherCourses={allCourses} />;
  }
  return <NotFoundPage />;
};

export default CourseTemplate;

export const pageQuery = graphql`
  query CourseByPath($path: String!, $type: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      fields {
        path
      }
      frontmatter {
        title
        timeline
        description
        outcomes
        slug
        price
        videoUrl
        shortDescription
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        img2 {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        icon1 {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        icon2 {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: {
        fields: {
          path: { ne: $path }
          type: { eq: $type }
          draft: { eq: false }
        }
      }
    ) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            timeline
            description
            shortDescription
            outcomes
            price
            slug
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            img2 {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            icon1 {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            icon2 {
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
    }
  }
`;
