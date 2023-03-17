import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header__wrapper">
      <Link className="header__logo" to={"/"}>
        <img
          src="../images/logo_header.png"
          alt="Burger logo"
          className="header__logo__image"
        />
      </Link>
      <Link className="header__link" to={"/"}>
        INGREDIENT
      </Link>
      <Link className="header__link" to={"/"}>
        STORY
      </Link>
      <Link className="header__link" to={"/"}>
        BURGERS
      </Link>
      <Link className="header__link" to={"/"}>
        LOCATION
      </Link>
      <button className="header__button">Order now</button>
    </div>
  );
};
