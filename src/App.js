import React from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "./constants/index";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainPage } from "./components/MainPage";
import { Ingredients } from "./components/Ingredients";
import { Location } from "./components/Location";
import { Burgers } from "./components/Burgers";
import { Story } from "./components/Story";

export const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<MainPage />} path={"/"} />
        <Route element={<Ingredients />} path={ROUTES.ingredients} />
        <Route element={<Story />} path={ROUTES.story} />
        <Route element={<Burgers />} path={ROUTES.burgers} />
        <Route element={<Location />} path={ROUTES.location} />
      </Routes>
      <Footer />
    </>
  );
};
