import React from "react";
import indicadores from "../../assets/indicadores.png";
import "./indicators.css";

const indicators = () => {
  return (
    <div className="App">
      <div className="indicadoresContainer">
        <h3>Indicadores</h3>
        <img className="imgOrg" src={indicadores} alt="indocadores" />
      </div>
    </div>
  );
};

export default indicators;
