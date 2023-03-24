import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  HOME,
  ORGANIZATION,
  PLANNING,
  GANTT,
  INDICATORS,
  REFERENCES,
} from "../../constants";
import NavigationBar from "../NavigationBar";
import Home from "../Home";
import Organization from "../Organization";
import Planning from "../Planning";
import Gantt from "../Gantt";
import Indicators from "../Indicators";
import References from "../References";

const MainRouter = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ORGANIZATION} element={<Organization />} />
        <Route path={PLANNING} element={<Planning />} />
        <Route path={GANTT} element={<Gantt />} />
        <Route path={INDICATORS} element={<Indicators />} />
        <Route path={REFERENCES} element={<References />} />
      </Routes>
    </BrowserRouter>
  );
};

export default MainRouter;
