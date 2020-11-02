// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     devtool: "eval-source-map"
//   });
// };


exports.onCreatePage = ({ page, actions }) => {
    if (page.path.match(/^\/product/)) {
      page.matchPath = '/product/*';
      actions.createPage(page);
    }
  };
