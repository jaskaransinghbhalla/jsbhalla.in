"use client";
import pdfViewer from "../../../lib/pdfviewer";
const CVPage = () => {
  return pdfViewer({ url: "/cv.pdf", numPages: 2 });
};
export default CVPage;
