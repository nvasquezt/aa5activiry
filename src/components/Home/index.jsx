import React from "react";
import { Document, Page, pdfjs } from "react-pdf";
import revista from "../../assets/revista.pdf";
import "./home.css";
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Home = () => {
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
        <Document file={revista} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={pageNumber} renderTextLayer={false} />
        </Document>
        <p>
          Página {pageNumber} of {numPages}
          <br />
          Ingresa a nuestra revista digital para conocer más sobre el proyecto
        </p>
      </header>
    </div>
  );
};

export default Home;
