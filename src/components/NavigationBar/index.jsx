import React from "react";
import { NavLink } from "react-router-dom";
import {
  HOME,
  ORGANIZATION,
  PLANNING,
  GANTT,
  INDICATORS,
  REFERENCES,
  ABOUT,
} from "../../constants";
import "./navigator.css";

const NavigationBar = () => {
  return (
    <nav className="navigator">
      <NavLink to={HOME}>Revista</NavLink>
      <NavLink to={ORGANIZATION}>Organización</NavLink>
      <NavLink to={PLANNING}>Planeaciones</NavLink>
      <NavLink to={GANTT}>Plan Operativo</NavLink>
      <NavLink to={INDICATORS}>Indicadores</NavLink>
      <NavLink to={REFERENCES}>Referencias</NavLink>
      <NavLink to={ABOUT}>Video</NavLink>
    </nav>
  );
};

export default NavigationBar;
