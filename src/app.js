import React from 'react';
import { Page, Document } from 'react-pdf/dist/entry.webpack'

function App() {
  return (
    <div className="App">
      <Document file="http://localhost:3000/pdfs/sample.pdf">
        <Page pageNumber={1}></Page>
      </Document>
    </div>
  );
}

export default App;
