import React from 'react';
import Img from 'gatsby-image';

import Asset from '../../richtext/Asset';
import RichText from '../../richtext';

import { PortfolioPiece } from '../types';

import './styles.scss';

interface Props {
  piece: PortfolioPiece;
}

const Page = ({ piece }: Props) => {
  const H2 = ({ children }) => <h2 style={{ color: piece.hex }}>{children}</h2>;

  const renderAsset = asset => (
    <li key={asset.title}>
      {asset.description && <p>{asset.description}</p>}
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
        <button
          className="back-button"
          onClick={() => typeof window !== 'undefined' && window.history.back()}
        >
          Back
        </button>
        <h4 className="type-role">
          {piece.type}, {piece.date}
        </h4>
        <h1>{piece.title}</h1>
        {piece.description && (
          <>
            <div className="portfolio-description">
              <H2>Project Description</H2>
              <RichText document={piece.description} color={piece.hex} />
            </div>
          </>
        )}
        {piece.images && (
          <>
            <H2>Process pictures</H2>
            <ul className="process-photos">{piece.images.map(renderAsset)}</ul>
          </>
        )}
        <br />
        {piece.deliverables && (
          <>
            <H2>Final deliverables</H2>
            <ul className="deliverables">
              {piece.deliverables.map(renderAsset)}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
