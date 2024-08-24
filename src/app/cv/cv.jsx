"use client";
import pdfViewer from "../../../lib/pdfviewer";
const CVPage = ({ device }) => {
  if (device === "mobile") {
    return pdfViewer({ url: "/cv.pdf", numPages: 2, width: 320 });
  }
  return pdfViewer({ url: "/cv.pdf", numPages: 2 });
};
export default CVPage;
