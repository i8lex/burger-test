import React from "react";
import logo from "../images/logo_header@2x.png";
import { Link } from "react-router-dom";
import { ROUTES } from "../constants/index";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link className="header__logo" to={"/"}>
            <img src={logo} alt="Burger logo" className="header__logo__image" />
          </Link>
          <div className="header__box">
            <Link className="header__link" to={ROUTES.ingredients}>
              INGREDIENT
            </Link>
            <Link className="header__link" to={ROUTES.story}>
              STORY
            </Link>
            <Link className="header__link" to={ROUTES.burgers}>
              BURGERS
            </Link>
            <Link className="header__link" to={ROUTES.location}>
              LOCATION
            </Link>
          </div>
          <button className="header__button">Order now</button>
        </div>
      </div>
    </header>
  );
};
