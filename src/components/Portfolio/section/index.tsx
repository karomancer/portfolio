import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Piece from './Piece';

const Portfolio = () => {
  const {
    allContentfulPortfolioPiece: { nodes: portfolioPieces },
  } = useStaticQuery(graphql`
    query PortfolioIndexQuery {
      allContentfulPortfolioPiece(
        sort: { fields: [date, title], order: [DESC, ASC] }
      ) {
        nodes {
          ...App__PortfolioPieceFragment
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
      <h2>Things I've done</h2>
      {Object.keys(portfolioTypeMap).map(type => (
        <section data-key={type.toLowerCase()} className="__portfolio-section" key={`section-${type}`}>
          <div className="__piece-type">
            <h3>{type}</h3>
          </div>
          <ul>
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
