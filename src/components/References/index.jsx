import React from "react";
import references from "../../assets/references.jpg";
import "./references.css";

const References = () => {
  return (
    <div className="App">
      <div className="references">
        <h3>Indicadores</h3>
        <img className="imgOrg" src={references} alt="references" />
      </div>
    </div>
  );
};

export default References;
