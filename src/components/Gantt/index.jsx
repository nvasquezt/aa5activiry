import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import gantt from "../../assets/gantt.pdf";
import "./gantt.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Gantt = () => {
  const [numPages, setNumPages] = React.useState(null);
  const [pageNumber, setPageNumber] = React.useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
  const PreviousPage = () => {
    if (pageNumber === 1) return;
    setPageNumber(pageNumber - 1);
  };
  const nextPage = () => {
    if (pageNumber === numPages) return;
    setPageNumber(pageNumber + 1);
  };
  const firstPage = () => {
    setPageNumber(1);
  };
  const lastPage = () => {
    setPageNumber(numPages);
  };
  return (
    <div className="App">
      <header className="homeHeader">
        <div>
          <button onClick={firstPage}>Primera Página</button>
          <button onClick={PreviousPage}>Página Anterior</button>
          <button onClick={nextPage}>Siguiente Página</button>
          <button onClick={lastPage}>Última Página</button>
        </div>
        <Document file={gantt} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
        <p>
          Página {pageNumber} of {numPages}
          <br />
          Observa nuestro grado de compromiso
        </p>
      </header>
    </div>
  );
};
export default Gantt;
