import React from "react";
import { Link } from "react-router-dom";
import { adress } from "../data/data";
import logo from "../images/logo_header@2x.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <Link className="footer__logo" to={"/"}>
          <img className="footer__logo__image" src={logo} alt="Burger logo" />
        </Link>
        <div className="footer__box">
          <h6 className="footer__title">{adress.name}</h6>
          <p className="footer__text">{adress.street}</p>
          <p className="footer__text">{adress.city}</p>
          <p className="footer__text">{adress.phone}</p>
        </div>
      </div>
    </footer>
  );
};
