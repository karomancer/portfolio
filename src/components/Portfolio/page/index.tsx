import React from 'react';
import Img from 'gatsby-image';

import Asset from '../../richtext/Asset';
import RichText from '../../richtext';

import { PortfolioPiece } from '../types';

import './styles.scss';

interface Props {
  piece: PortfolioPiece;
}

const PortfolioPiecePage = ({ piece }: Props) => {
  const H2 = ({ children }) => <h2 style={{ color: piece.hex }}>{children}</h2>;

  const renderAsset = asset => (
    <li key={asset.title}>
      <Asset asset={asset} />
    </li>
  );

  return (
    <div className="porfolio-piece-full">
      {piece.hero && (
        <div className="hero">
          <Img fluid={piece.hero.fluid} />
        </div>
      )}
      <div className="inner">
        {piece.date}
        <h1>{piece.title}</h1>
        <div className="portfolio-description">
          <H2>Project Description</H2>
          <RichText document={piece.description} />
        </div>
        {piece.images && (
          <>
            <H2>Process pictures</H2>
            <ul className="process-photos">{piece.images.map(renderAsset)}</ul>
          </>
        )}
        {piece.deliverables && (
          <>
            <H2>Final deliverables</H2>
            <ul className="process-photos">
              {piece.deliverables.map(renderAsset)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default PortfolioPiecePage;
