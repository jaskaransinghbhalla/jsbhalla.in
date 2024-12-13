"use client";
import pdfViewer from "../../../lib/pdfviewer";
const CVPage = ({ device }) => {
  if (device === "mobile") {
    return pdfViewer({ url: "/cv.pdf", numPages: 1, width: 320 });
  }
  return pdfViewer({ url: "/cv.pdf", numPages: 1 });
};
export default CVPage;
