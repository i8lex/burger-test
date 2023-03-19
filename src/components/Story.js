import React from "react";
import image from "../images/rectangle10@2x.png";

export const Story = () => {
  return (
    <section className="story">
      <div className="container">
        <div className="story__wrapper">
          <div className="story__card">
            <h4 className="story__card__title">The story</h4>
            <h6 className="story__card__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              mollis id arcu vel maximus.
            </h6>
            <p className="story__text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              eget consequat lorem. Ut nec placerat purus. Fusce vitae faucibus
              augue, non commodo elit. Integer risus orci, ultricies ac dapibus
              sed, dignissim interdum quam. Proin quis dignissim diam. Donec id
              magna placerat, fringilla odio et, efficitur lacus. Vivamus eu
              ultricies erat, eu lobortis nunc. Sed nec dignissim libero.
              Integer cursus leo nunc. Nulla mattis interdum nunc, sed semper
              turpis. Cras elit lorem, mollis ut feugiat ac, ultricies eu dolor.
            </p>
          </div>
          <div className="story__image">
            <img
              className="story__image__img"
              src={image}
              alt="Burger with potatoes"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
