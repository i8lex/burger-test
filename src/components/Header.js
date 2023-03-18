import React from "react";
import logo from "../images/logo_header@2x.png";
// import { Link } from "react-router-dom";
import { Link, animateScroll as scroll } from "react-scroll";
import { ROUTES } from "../constants/index";

export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <Link
            className="header__logo"
            to={ROUTES.main}
            spy={true}
            offset={-150}
            smooth={"easeInOutQuint"}
            delay={100}
            duration={800}
          >
            <img src={logo} alt="Burger logo" className="header__logo__image" />
          </Link>
          <div className="header__box">
            <Link
              className="header__link"
              activeClass="header__link__active"
              to={ROUTES.ingredients}
              spy={true}
              smooth={"easeInOutQuint"}
              offset={-150}
              delay={100}
              duration={800}
            >
              INGREDIENT
            </Link>
            <Link
              className="header__link"
              activeClass="header__link__active"
              to={ROUTES.story}
              spy={true}
              smooth={"easeInOutQuint"}
              offset={-150}
              delay={100}
              duration={800}
            >
              STORY
            </Link>
            <Link
              className="header__link"
              activeClass="header__link__active"
              to={ROUTES.burgers}
              spy={true}
              smooth={"easeInOutQuint"}
              offset={-150}
              delay={100}
              duration={800}
            >
              BURGERS
            </Link>
            <Link
              className="header__link"
              activeClass="header__link__active"
              to={ROUTES.location}
              spy={true}
              smooth={"easeInOutQuint"}
              offset={-150}
              delay={100}
              duration={800}
            >
              LOCATION
            </Link>
          </div>
          <Link
            className="header__button"
            to={ROUTES.burgers}
            spy={true}
            smooth={"easeInOutQuint"}
            offset={-150}
            delay={100}
            duration={300}
          >
            Order now
          </Link>
        </div>
      </div>
    </header>
  );
};
