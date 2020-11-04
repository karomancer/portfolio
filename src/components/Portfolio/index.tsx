import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Piece from './Piece';

const Portfolio = () => {
  const {
    allContentfulPortfolioPiece: { nodes: portfolioPieces },
  } = useStaticQuery(graphql`
    query PortfolioIndexQuery {
      allContentfulPortfolioPiece(sort: { fields: type, order: ASC }) {
        nodes {
          hero {
            description
            title
          }
          date(formatString: "YYYY")
          deliverables {
            title
            description
            file {
              contentType
              url
            }
            fixed {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
          }
          description {
            description
          }
          images {
            file {
              url
            }
            title
            description
          }
          thumbnail {
            file {
              url
            }
            fixed {
              src
              srcSet
              srcSetWebp
              srcWebp
              width
              height
              base64
              aspectRatio
            }
            title
            description
          }
          hex
          type
          title
          slug
          role
        }
      }
    }
  `);

  const portfolioTypeMap = {};
  /* <Piece piece={piece} /> */
  portfolioPieces.forEach(piece => {
    if (!portfolioTypeMap[piece.type]) {
      portfolioTypeMap[piece.type] = [piece];
    } else {
      portfolioTypeMap[piece.type].push(piece);
    }
  });

  return (
    <section className="__portfolio">
      <h2>My work</h2>
      {Object.keys(portfolioTypeMap).map(type => (
        <section className="__portfolio-section" key={`section-${type}`}>
          <h3>{type}</h3>
          <ul className="__portfolio-pieces">
            {portfolioTypeMap[type].map(piece => (
              <Piece piece={piece} />
            ))}
          </ul>
        </section>
      ))}
    </section>
  );
};

export default Portfolio;
