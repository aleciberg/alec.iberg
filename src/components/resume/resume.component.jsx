import React, { useState } from 'react';

import resume from './alecibergresume.pdf';

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = ({ isMobile }) => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div
      style={{
        margin: isMobile ? '35px' : '',
        padding: isMobile ? '20px' : '',
      }}
    >
      {/* <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
      <br />
      <br />
      <br />
      <br />
      <br />
      Not currently job hunting, resume available upon{' '}
      <a
        href="mailto: ibergalec@icloud.com"
        style={{ color: '#65946a', fontWeight: 'bold' }}
      >
        request.
      </a>
    </div>
  );
};

export default Resume;
