import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';

import { PortfolioPiece } from './types';

interface Props {
  piece: PortfolioPiece;
}

const Piece = ({ piece }: Props) => {
  return (
    <li className="portfolio-piece">
      <Link to={`/portfolio/${piece.slug}`}>
        <img src={piece.thumbnail.file.url} />
        <div
          className="title"
          style={{
            backgroundColor: piece.hex,
            // background: `linear-gradient(${piece.hex} 0%, ${piece.hex} 10%, transparent 100%)`,
          }}
        >
          <h4>
            {piece.title} <span>({piece.date})</span>
          </h4>
        </div>
      </Link>
    </li>
  );
};

export default Piece;
