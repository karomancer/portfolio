import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Piece from './Piece';

interface Props {
  showHeader?: boolean;
}

const Section = ({ showHeader }: Props) => {
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

  portfolioPieces.forEach(piece => {
    if (!portfolioTypeMap[piece.type]) {
      portfolioTypeMap[piece.type] = [piece];
    } else {
      portfolioTypeMap[piece.type].push(piece);
    }
  });

  return (
    <section className="portfolio" id="one">
      <div className="portfolio-sections">
        {showHeader && (
          <div className="section-header">
            <h1>Things I've Done</h1>
            <hr />
          </div>
        )}
        {Object.keys(portfolioTypeMap).map((type, i) => (
          <section
            data-key={type.toLowerCase()}
            className="portfolio-section"
            key={`section-${type}`}
          >
            <div>
              <h2 className="piece-type">{type}</h2>
              <ul>
                {portfolioTypeMap[type].map(piece => (
                  <Piece key={piece.title} piece={piece} />
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Section;
