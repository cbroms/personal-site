const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const { fmImagesToRelative } = require("gatsby-remark-relative-images");

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const blogPostTemplate = path.resolve(`src/templates/projectTemplate.js`);

  return graphql(`
    {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___disp_order] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      return Promise.reject(result.errors);
    }

    const projects = result.data.allMarkdownRemark.edges;
    projects.forEach(({ node }, index) => {
      createPage({
        path: node.frontmatter.path,
        component: blogPostTemplate,
        context: {
          next:
            index === projects.length - 1
              ? projects[0].node.frontmatter.path
              : projects[index + 1].node.frontmatter.path
        } // additional data can be passed via context
      });
    });
  });
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  fmImagesToRelative(node); // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value
    });
  }
};
