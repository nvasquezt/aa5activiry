import React from "react";
import { NavLink } from "react-router-dom";
import {
  HOME,
  ORGANIZATION,
  PLANNING,
  GANTT,
  INDICATORS,
  REFERENCES,
} from "../../constants";
import "./navigator.css";

const NavigationBar = () => {
  return (
    <nav className="navigator">
      <NavLink to={HOME}>Revista</NavLink>
      <NavLink to={ORGANIZATION}>Organización</NavLink>
      <NavLink to={PLANNING}>Planificación</NavLink>
      <NavLink to={GANTT}>Gantt</NavLink>
      <NavLink to={INDICATORS}>Indicadores</NavLink>
      <NavLink to={REFERENCES}>Referencias</NavLink>
    </nav>
  );
};

export default NavigationBar;
