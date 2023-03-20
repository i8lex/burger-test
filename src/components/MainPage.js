import React from "react";
import logo from "../images/logo@x2.png";
import background from "../images/background@2x.png";
// import {Link} from "react-router-dom";
import { Link } from "react-scroll";
import { ROUTES } from "../constants";
import { useMediaQuery } from "@material-ui/core";

export const MainPage = () => {
  return (
    <section className="main">
      <div className="main__background">
        <img src={background} alt="" className="main__background__image" />
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
            <img src={logo} alt="Logo" className="main__logo__image" />
          </div>
        </div>
      </div>
    </section>
  );
};
