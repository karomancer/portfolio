import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';

import { PortfolioPiece } from './types';

interface Props {
  piece: PortfolioPiece;
}

const Piece = ({ piece }: Props) => {
  return (
    <li className="__portfolio-piece">
      <Link to={`/portfolio/${piece.slug}`}>
        <img
          src={piece.thumbnail.file.url}
        />
        <div className="__title" style={{ backgroundColor: piece.hex }}>
          <h4>
            {piece.title} <span>({piece.date})</span>
          </h4>
        </div>
      </Link>
    </li>
  );
};

export default Piece;
