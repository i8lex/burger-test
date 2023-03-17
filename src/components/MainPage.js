import React from "react";

export const Header = () => {
  return (
    <div className="main__wrapper">
      <div className="main__box">
        <h1 className="main__title">Burger Factory</h1>
        <p className="main__text">
          Your dreamed burger close to your locations!
        </p>
        <button className="main__button">Discover the ingredients</button>
      </div>
      <div className="main__logo">
        <img src="../images/logo@x2.png" alt="Logo" className="main__logo" />
      </div>
    </div>
  );
};
