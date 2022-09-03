const axios = require('axios');
const path = require('path');

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

// constants for your GraphQL Post and Author types
const POST_NODE_TYPE = `DribbbleShot`;

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

exports.onCreateWebpackConfig = ({
  stage,
  loaders,
  actions,
}) => {
  if (stage === "build-html" || stage === "develop-html") {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /canvas/,
            use: loaders.null(),
          },
          {
            test: /p5/,
            use: loaders.null(),
          },
          {
            test: /react-pdf/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
};

exports.sourceNodes = async (
  { actions, createContentDigest, createNodeId },
) => {
  /**
   * Dribbble source
   */
  const { createNode } = actions;
  const accessToken = process.env.DRIBBBLE_ACCESS_TOKEN

  if (!accessToken) {
    throw 'You need to get a DRIBBBLE_ACCESS_TOKEN. Add one in .env';
  }

  const axiosClient = axios.create({
    baseURL: 'https://api.dribbble.com/v2/user/',
  }); // Thanks to https://github.com/LeKoArts/gatsby-source-behance/blob/master/gatsby-node.js

  const rateLimit = 60;
  let lastCalled = undefined;

  const rateLimiter = (call) => {
    const now = Date.now();

    if (lastCalled) {
      lastCalled += rateLimit;
      const wait = lastCalled - now;

      if (wait > 0) {
        return new Promise((resolve) => setTimeout(() => resolve(call), wait));
      }
    }

    lastCalled = now;
    return call;
  };

  axiosClient.interceptors.request.use(rateLimiter); // build the user node

  const shotsResponse = await axiosClient.get('/shots', {
    params: {
      access_token: accessToken,
    },
  });

  if (shotsResponse.data?.length > 0) {
    shotsResponse.data.map((shot) =>
      createNode({
        ...shot,
        id: createNodeId(`${POST_NODE_TYPE}-${shot.id}`),
        internal: {
          type: POST_NODE_TYPE,
          content: JSON.stringify(shot),
          contentDigest: createContentDigest(shot),
        },
      })
    );
  }  
};

exports.onPostBuild = async ({ cache }) => {
  await cache.set(`key`, `value`);
  const cachedValue = await cache.get(`key`);
  console.log(cachedValue); // logs `value`
};
