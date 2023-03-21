/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const CONTENT_TYPE = {
  COURSE: 'course',
};

const showDraft = process.env.SHOW_DRAFT;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent);
    createNodeField({
      node,
      name: 'draft',
      value: showDraft ? false : Boolean(node.frontmatter.draft),
    });

    if (
      fileNode.dir.indexOf('courses') !== -1 &&
      node.frontmatter &&
      node.frontmatter.slug
    ) {
      createNodeField({
        node,
        name: 'path',
        value: `/courses/${node.frontmatter.slug}/`,
      });
      createNodeField({
        node,
        name: 'type',
        value: CONTENT_TYPE.COURSE,
      });
    }
  }
};

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions;

  deletePage(page);
  createPage({
    ...page,
    context: {
      ...page.context,
      currentTimestamp: Date.now(),
    },
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const pageMapping = {
    [CONTENT_TYPE.COURSE]: path.resolve('src/templates/courseTemplate.js'),
  };

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              draft
              path
              type
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    result.data.allMarkdownRemark.edges.forEach(({ node }) => {
      if (node.draft) return;
      if (!pageMapping[node.fields.type]) return;

      createPage({
        path: node.fields.path,
        component: pageMapping[node.fields.type],
        context: {
          currentTimestamp: Date.now(),
          type: node.fields.type,
        },
      });
    });
  });
};
