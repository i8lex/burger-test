import React from "react";

export const Location = () => {
  return (
    <div className="locations__wrapper">
      <h4 className="location__title">Location</h4>
      <div className="location__box">
        <p className="location__box__text">123</p>
      </div>
      <div className="location__image">
        <img
          src="../images/map@2x.png"
          alt="map"
          className="location__iamge__img"
        />
      </div>
    </div>
  );
};
