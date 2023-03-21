/**
 * @type {import('gatsby').GatsbyConfig}
 */
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  siteMetadata: {
    title: `Elite`,
    siteUrl: `https://www.elite.cd`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-netlify-cms",
    "gatsby-transformer-json",
    {
      resolve: "gatsby-plugin-sass",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
        additionalData: `@import "./src/assets/styles/main.scss";`,
        //additionalData: `@import "${__dirname}/src/assets/styles/main.scss";`,
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: `./src/assets/images/logo.png`,
      },
    },
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `./src/assets/images/`,
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: `./src/pages/`,
      },
      __key: "pages",
    },
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-intl",
      options: {
        //path: `${__dirname}/src/locales`,
        path: `./src/locales`,
        languages: ["fr"],
        defaultLanguage: "fr",
        redirect: false,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `./data/pages/home`,
        //path: `${__dirname}/data/pages/home`,
        name: "carousel",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "courses",
        //path: `${__dirname}/data/courses`,
        path: `./data/courses`,
      },
    },
    {
      resolve: `@ccalamos/gatsby-source-googlemaps-static`,
      options: {
        key: `dkjhsdjh`,
        center: `-4.345037,15.289549`,
      },
    },
  ],
};
