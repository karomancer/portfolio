import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

import Carousel from '../../Carousel';

import Post from './Post';

interface Props {
  showHeader?: boolean;
  pieces?: object[]
}

const Section = ({ showHeader, pieces }: Props) => {
  const {
    allContentfulPortfolioPiece: { nodes: portfolioPieces },
  } = useStaticQuery(graphql`
    query BlogSectionQuery {
      allContentfulPortfolioPiece(
        limit: 8
        sort: { fields: [date, title], order: [DESC, ASC] }
      ) {
        nodes {
          ...App__PortfolioPieceFragment
        }
      }
    }
  `);

  return (
    <section className="blog">
      <div className="blog-section section-two-pane">
        {showHeader && <div className="section-description">
          <h2>Maker Journal</h2>
          <p>
            A collection of things I've been working on. I work on a lot of
            disparate projects and have decided to chronicle the process &
            learnings from each.
          </p>
          <Link to="/portfolio">View all posts</Link>
        </div>}
        <ul className={`blog-desktop ${!showHeader && 'full-width'}`}>
          {(pieces || portfolioPieces).map(piece => (
            <Post key={`desktop-piece-${piece.title}`} piece={piece} />
          ))}
        </ul>
        <Carousel>
          {(pieces || portfolioPieces).map(piece => (
            <Post key={`mobile-piece-${piece.title}`} piece={piece} />
          ))}
        </Carousel>
      </div>
    </section>
  );
};

export default Section;
