"use client";
import { Document, Page, pdfjs } from "react-pdf";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;
const pdfViewer = ({ url, numPages }) => {
  return (
    <div className="flex flex-col items-center">
      <Document
        file={url}
        options={{
          cMapUrl: "https://unpkg.com/pdfjs-dist@2.9.359/cmaps/",
          cMapPacked: true,
        }}
      >
        {Array.from(new Array(numPages), (el, index) => (
          <div className="border my-2">
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              renderTextLayer={false}
              renderAnnotationLayer={false}
              width={900}
            />
          </div>
        ))}
      </Document>
    </div>
  );
};
export default pdfViewer;
