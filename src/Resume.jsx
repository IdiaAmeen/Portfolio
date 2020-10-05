import React, { Component } from "react";

import FileViewer from "react-file-viewer";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const file = "https://cors-anywhere.herokuapp.com/docdro.id/Mf6zXED";
const type = "pdf";
export default class Resume extends Component {
  render() {
    return (
      <div>
        <FileViewer
          fileType={type}
          filePath={file}
          // errorComponent={CustomErrorComponent}
          // onError={this.onError}
        />
      </div>
    );
  }
}
