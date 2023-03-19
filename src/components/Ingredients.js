import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ingredients } from "../data/data";

const Card = ({ name, image, maxWidth }) => {
  return (
    <div className="ingredients__box__card">
      <div className="ingredients__image-box">
        <img
          style={{ maxWidth: maxWidth }}
          src={image}
          alt={name[0].toUpperCase() + name.slice(1)}
          className="ingredients__image-box__image"
        />
      </div>
      <h5 className="ingredients__box__card-title">
        {name[0].toUpperCase() + name.slice(1)}
      </h5>
    </div>
  );
};

export const Ingredients = () => {
  const responsive = {
    0: {
      items: 1,
    },
    768: {
      items: 2,
    },
    1024: {
      items: 4,
    },
  };

  return (
    <section className="ingredients">
      <div className="container">
        <div className="ingredients__wrapper">
          <h4 className="ingredients__title">Ingredients</h4>
          <h6 className="ingredients__title__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            mollis id arcu vel maximus.
          </h6>
          <AliceCarousel
            mouseTracking
            dotsDisabled={false}
            buttonsDisabled={false}
            mouseTrackingEnabled={true}
            items={Object.values(ingredients).map(
              ({ name, image2x, maxWidth }) => {
                return (
                  <Card
                    key={name}
                    name={name}
                    image={image2x}
                    maxWidth={maxWidth}
                  />
                );
              }
            )}
            responsive={responsive}
            infinite
          />
          <p className="ingredients__text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris eget
            consequat lorem. Ut nec placerat purus. Fusce vitae faucibus augue,
            non commodo elit. Integer risus orci, ultricies ac dapibus sed,
            dignissim interdum quam. Proin quis dignissim diam. Donec id magna
            placerat, fringilla odio et, efficitur lacus. Vivamus eu ultricies
            erat, eu lobortis nunc. Sed nec dignissim libero. Integer cursus leo
            nunc. Nulla mattis interdum nunc, sed semper turpis. Cras elit
            lorem, mollis ut feugiat ac, ultricies eu dolor.
          </p>
        </div>
      </div>
    </section>
  );
};
