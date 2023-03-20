import React, { useRef } from "react";
import Swiper from "swiper";

import { ingredients } from "../data/data";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

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
  const swiper = useRef(null);

  const initSwiper = () => {
    const getWindowWidth = () =>
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;
    swiper.current = new Swiper(".swiper-container", {
      loop: false,
      spaceBetween: 10,
      slidesPerView: getWindowWidth() >= 768 ? 4 : 3,
      centeredSlides: true,
      grabCursor: true,
      autoplay: true,
      initialSlide: 1,
    });
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
          <div className="ingredients__box">
            <div className="ingredients__shadow">{}</div>
            <div className="ingredients__shadow-right">{}</div>
            <div
              className="swiper-container ingredients__swiper-container"
              onLoad={initSwiper}
            >
              <div className="swiper-wrapper">
                {Object.values(ingredients).map(
                  ({ id, name, image2x, maxWidth }) => {
                    return (
                      <div
                        className="swiper-slide ingredients__swiper-slide"
                        key={id}
                      >
                        <Card name={name} image={image2x} maxWidth={maxWidth} />
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </div>

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
