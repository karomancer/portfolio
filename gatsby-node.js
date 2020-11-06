const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const portfolioPiece = path.resolve('./src/templates/portfolio-piece.tsx')
    resolve(
      graphql(
        `
          {
            allContentfulPortfolioPiece {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const pieces = result.data.allContentfulPortfolioPiece.edges

        pieces.forEach((piece, index) => {
          createPage({
            path: `/portfolio/${piece.node.slug}/`,
            component: portfolioPiece,
            context: {
              slug: piece.node.slug
            },
          })
        })
      })
    )
  })
}

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
