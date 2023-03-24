import React from "react";
import mapaEstrategicoEmpresa from "../../assets/mapa_estrategico_empresa.png";
import mapaEstrategicoDepartamento from "../../assets/mapa_estrategico_departamento.png";
import arrow from "../../assets/275137.png";
import "./organization.css";

const Organization = () => {
  const scrollBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="containerOrg">
        <h3>Mapa estratégico de la empresa GYR Colombia</h3>
        <img
          className="imgOrg"
          src={mapaEstrategicoEmpresa}
          alt="mapa estrategico empresa"
        />
      </div>
      <div>
        <div>
          <img
            className="arrow"
            onClick={scrollBottom}
            src={arrow}
            alt="Get Down"
          />
        </div>
      </div>
      <div className="containerOrg">
        <h3>
          Mapa estratégivo del departamento de Tecnología de la Información
        </h3>
        <img
          className="imgOrg"
          src={mapaEstrategicoDepartamento}
          alt="mapa estrategico depto"
        />
      </div>
    </div>
  );
};

export default Organization;
