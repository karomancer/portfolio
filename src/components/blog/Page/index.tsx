import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby'

import Asset from '../../richtext/Asset';
import RichText from '../../richtext';

import { PortfolioPiece } from '../types';

import './styles.scss';

interface Props {
  piece: PortfolioPiece;
}

const Page = ({ piece }: Props) => {
  const H2 = ({ children }) => <h2 style={{ color: piece.hex }}>{children}</h2>;

  const renderAsset = assetType => asset => (
    <li key={`${assetType}-${asset.title}`}>
      {asset.description && <p>{asset.description}</p>}
      <Asset asset={asset} />
    </li>
  );

  const title = `${piece.title} | Karina Chow`
  debugger

  return (
    <>
      <Helmet
        title={title}
        meta={[
          {
            name: 'description',
            content: `Explore Karina's "${piece.title}" project.`,
          },
          {
            name: 'og:title',
            content: title,
          },
          { name: 'og:url', content: `http://www.karinachowtime.com/portfolio/${piece.slug}` },
          {
            name: 'og:image',
            content: piece.thumbnail.file.url,
          },
        ]}
      >
        <title>{title}</title>
      </Helmet>
      <div className="porfolio-piece-full">
        {piece.hero ? (
          <div className="hero">
            {/* Need to fix this image */}
            <img src={piece.hero.url} alt={`${piece.hero.title} cover image`} />
          </div>
        ) : (
          <hr style={{ borderColor: piece.hex }} />
        )}
        <div className="inner">
          <Link
            className="back-button"
            to="/portfolio"
          >
            Back
          </Link>
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
              <ul className="process-photos">
                {piece.images.map(renderAsset('image'))}
              </ul>
            </>
          )}
          <br />
          {piece.deliverables && (
            <>
              <H2>Final deliverables</H2>
              <ul className="deliverables">
                {piece.deliverables.map(renderAsset('deliverable'))}
              </ul>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Page;