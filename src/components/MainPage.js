import React, { useEffect, useState } from "react";
import { images } from "../data/data";
import { Link } from "react-scroll";
import { ROUTES } from "../constants";

export const MainPage = () => {
  const [logo, setLogo] = useState("");
  const [background, setBackground] = useState("");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 780) {
        setLogo(images.logo);
        setBackground(images.background);
      } else {
        setLogo(images.logo2x);
        setBackground(images.background2x);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
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
