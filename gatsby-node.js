/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// exports.createPages = ({ graphql, actions }) => {
//   const { createPage } = actions

//   return new Promise((resolve, reject) => {
//     const blogPost = path.resolve('./src/templates/blog-post.js')
//     resolve(
//       graphql(
//         `
//           {
//             allContentfulBlogPost {
//               edges {
//                 node {
//                   title
//                   slug
//                 }
//               }
//             }
//           }
//           `
//       ).then(result => {
//         if (result.errors) {
//           console.log(result.errors)
//           reject(result.errors)
//         }

//         const posts = result.data.allContentfulBlogPost.edges
//         posts.forEach((post, index) => {
//           createPage({
//             path: `/blog/${post.node.slug}/`,
//             component: blogPost,
//             context: {
//               slug: post.node.slug
//             },
//           })
//         })
//       })
//     )
//   })
// }

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /p5/,
            use: loaders.null(),
          },
        ],
      },
    });
  }
};
