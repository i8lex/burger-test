import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { adress, images } from "../data/data";
import { ROUTES } from "../constants";

export const Footer = () => {
  const [logo, setLogo] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setLogo(images.logo_header);
      } else {
        setLogo(images.logo_header2x);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <Link
            className="footer__logo"
            to={ROUTES.main}
            offset={-150}
            spy={true}
            smooth={"easeInOutQuint"}
            delay={100}
            duration={700}
          >
            <img className="footer__logo__image" src={logo} alt="Burger logo" />
          </Link>
          <div className="footer__box">
            <h6 className="footer__text">{adress.name}</h6>
            <p className="footer__text">{adress.street}</p>
            <p className="footer__text">{adress.city}</p>
            <p className="footer__text">{adress.phone}</p>
          </div>
        </div>
      </div>
    </footer>
  );
};
