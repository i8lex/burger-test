import React from "react";
import { images } from "../data/data";
import { Link } from "react-scroll";
import { ROUTES } from "../constants";

export const MainPage = () => {
  return (
    <section className="main">
      <div className="main__background">
        <img
          src={
            window.innerWidth <= 780 ? images.background : images.background2x
          }
          alt=""
          className="main__background__image"
        />
      </div>
      <div className="container">
        <div className="main__wrapper">
          <div className="main__box">
            <h1 className="main__title">Burger Factory</h1>
            <p className="main__text">
              Your dreamed burger close to your locations!
            </p>
            <Link
              className="main__button"
              to={ROUTES.ingredients}
              spy={true}
              smooth={true}
              offset={-150}
              duration={800}
            >
              Discover the ingredients
            </Link>
          </div>
          <div className="main__logo">
            <img
              src={window.innerWidth <= 780 ? images.logo : images.logo2x}
              alt="Logo"
              className="main__logo__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
