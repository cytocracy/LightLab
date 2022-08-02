import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack5";

const options = {
  cMapUrl: "cmaps/",
  cMapPacked: true,
  standardFontDataUrl: "standard_fonts/",
};

export default function Script() {
  const [numPages, setNumPages] = useState(null);
  const [file, setFile] = useState("./small-script.pdf");

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  function onFileChange(event) {
    setFile(event.target.files[0]);
  }

  return (
    <div className="script-container">
      <div className="script-load">
        <label htmlFor="file">Load from file:</label>{" "}
        <input onChange={onFileChange} type="file" />
      </div>
      <div className="Example__container__document">
        <Document
          file={file}
          onLoadSuccess={onDocumentLoadSuccess}
          options={options}
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page key={`page_${index + 1}`} pageNumber={index + 1} />
          ))}
        </Document>
      </div>
    </div>
  );
}
