import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer__wrapper">
      <Link to={"/"}>
        <img
          src="../images/logo_header@2x.png"
          alt="Burger logo"
          className="footer__img"
        />
      </Link>
      <div className="footer__box">
        <p className="footer__text">123</p>
      </div>
    </div>
  );
};
