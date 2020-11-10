import React, { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';

const isWindowDefined = typeof window !== 'undefined'

if (isWindowDefined) {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
}

interface Props {
  pdfUrl: string;
}

const PDFViewer = ({ pdfUrl }: Props) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return isWindowDefined && (
    <div className="pdf-viewer">
      <Document
        className="pdf-document"
        file={pdfUrl}
        onLoadError={console.error}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <div className="page-controls">
        
        {pageNumber > 1 && (
          <button
          className="previous-page"
            onClick={() => setPageNumber(pageNumber - 1)}
            aria-label="Previous page"
          >
            ‹
          </button>
        )}
        {pageNumber < numPages && (
          <button
            className="next-page"
            onClick={() => setPageNumber(pageNumber + 1)}
            aria-label="Next page"
          >
            ›
          </button>
        )}
      </div>
      <span className="slide-numbers">Slide {pageNumber} of {numPages}</span>
      <p>
      </p>
    </div>
  );
};

export default PDFViewer;
