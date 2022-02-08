import React, { Component } from "react";

import FileViewer from "react-file-viewer";
// pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const file = "https://docdro.id/Tr9Wr3l";
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
