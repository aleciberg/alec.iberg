import React, { useState } from 'react';

import resume from './alecibergresume.pdf';

import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Resume = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber] = useState(1);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div>
      {/* <Document file={resume} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document> */}
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
