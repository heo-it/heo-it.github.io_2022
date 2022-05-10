const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const output = getConfig().output || {};

  actions.setWebpackConfig({
    output,
    resolve:{
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        utils: path.resolve(__dirname, 'src/utils'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        styles: path.resolve(__dirname, 'src/styles'),
        types: path.resolve(__dirname, 'src/types'),
      }
    }
  })
};

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode });

    createNodeField({ node, name: 'slug', value: slug });
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  // Markdown 페이지 전체 쿼리
  const queryAllMarkdownData = await graphql(
    `
      {
        allMarkdownRemark (
          sort: {
            order: DESC
            fields: [frontmatter___date, frontmatter___title]
          }
        ) {
          edges {
            node {
              fields {
                slug
              }
            }
          }
        }
        categoryGroup: allMarkdownRemark {
          group(field: frontmatter___categories) {
            fieldValue
            totalCount
          }
        }
      }
    `
  );

  // Error
  if (queryAllMarkdownData.errors) {
    reporter.panicOnBuild(`Error while running query`);
    return
  }

  // category Template
  const CategoryTemplateComponent = path.resolve(
    __dirname,
    'src/template/category_template.tsx',
  );

  const categoryListPage = ({ fieldValue, totalCount }) => {
    const CategoryOptions = {
      path: `/category/${fieldValue}/`,
      component: CategoryTemplateComponent,
      context: { 
        fieldValue: fieldValue, 
        totalCount: totalCount 
      }
    };

    createPage(CategoryOptions);
  };

  queryAllMarkdownData.data.categoryGroup.group.forEach(categoryListPage);
}