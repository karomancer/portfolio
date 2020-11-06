import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Img from 'gatsby-image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS } from '@contentful/rich-text-types';

import { PortfolioPiece } from '../types';

import './styles.scss';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

interface Props {
  piece: PortfolioPiece;
}

const PortfolioPiecePage = ({ piece }: Props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const renderAsset = asset => {
    let Asset;
    switch (asset.file.contentType) {
      case 'application/pdf':
        const pdfUrl = `https:${asset.file.url}`;
        Asset = (
          <>
            <Document
            className="pdf-document"
              file={pdfUrl}
              onLoadError={console.error}
              onLoadSuccess={onDocumentLoadSuccess}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </>
        );
        break;
      case 'image/jpeg':
      case 'image/png':
      case 'image/gif':
        Asset = <Img alt={asset.title} fluid={asset.fluid} />;
        break;
      default:
        return null;
    }
    return <li key={asset.title}>{Asset}</li>;
  };

  //   const H3 = ({ children }) => <h3 style={{ color: piece.hex }}>{children}</h3>;
  const options = {
    // renderMark: {
    //   [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    // },
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: ({ data }, children) => {
        const file = data?.target?.fields?.file['en-US'];
        switch (file.contentType) {
          case 'image/jpeg':
            return <img src={file.url} />;
        }
      },
    },
  };

  const H2 = ({ children }) => <h2 style={{ color: piece.hex }}>{children}</h2>;

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
          {documentToReactComponents(piece.description.json, options)}
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
