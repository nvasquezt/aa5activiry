import React from "react";
import arrow from "../../assets/275137.png";
import tactic from "../../assets/tactic.png";
import operative from "../../assets/operative.png";
import "./planning.css";

const Planning = () => {
  const scrollBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <div className="planningHeader">
        <h3>Planeación Táctica</h3>
        <img className="imgOrg" src={tactic} alt="Tactic" />
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
        <h3>Planeación Operativa</h3>
        <img className="imgOrg" src={operative} alt="operative" />
      </div>
    </div>
  );
};
export default Planning;
