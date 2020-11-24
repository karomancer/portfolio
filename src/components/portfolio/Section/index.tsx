import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import Carousel from '../../Carousel'

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
            <hr />
            <h1>Things I've Done</h1>
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
              <ul className="pieces-desktop">
              {portfolioTypeMap[type].map(piece => (
                  <Piece key={piece.title} piece={piece} />
                ))}
              </ul>
              <Carousel>
                {portfolioTypeMap[type].map(piece => (
                  <Piece key={piece.title} piece={piece} />
                ))}
              </Carousel>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
};

export default Section;
