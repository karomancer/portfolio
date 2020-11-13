import React from 'react';
import AniLink from "gatsby-plugin-transition-link/AniLink"

import './styles.scss';

import { PortfolioPiece } from './types';

interface Props {
  piece: PortfolioPiece;
}

const Piece = ({ piece }: Props) => {
  console.log(piece.hex)
  return (
    <li className="portfolio-piece">
      <AniLink paintDrip direction="right" duration={0.5} hex={piece.hex} to={`/portfolio/${piece.slug}`}>
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
      </AniLink>
    </li>
  );
};

export default Piece;
