import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboutme from "./pages/Aboutme";
import Contact from "./pages/Contact";

const Router = () => {
  return (
    <>
      <BrowserRouter basename="/projet_portfolio">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Portfolio" element={<Home />} />
          <Route exact path="/Aboutme" element={<Aboutme />} />
          <Route exact path="/Contact" element={<Contact />} />
          <Route exact path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default Router;
