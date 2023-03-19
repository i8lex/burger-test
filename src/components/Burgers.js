import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Swiper from "swiper";
import { burgers } from "../data/data";
import SwiperCore, { Navigation, Pagination } from "swiper";
import "swiper/swiper.min.css";
import "swiper/swiper-bundle.css";

SwiperCore.use([Navigation, Pagination]);

const Card = ({ name, image, link }) => {
  return (
    <div className="burgers__box">
      <h6 className="burgers__box__title">{name}</h6>
      <div className="burgers__image">
        <img src={image} alt={name} className="burgers__image__img" />
      </div>
      <Link to={link} className="burgers__link">
        Details
      </Link>
    </div>
  );
};

export const Burgers = () => {
  const swiper = useRef(null);

  const initSwiper = () => {
    swiper.current = new Swiper(".burger__swiper-container", {
      loop: true,
      spaceBetween: 16,
      centeredSlides: true,
      slidesPerView: "3",
      slidesPerGroup: 1,
      grabCursor: true,
      autoplay: true,
      initialSlide: 1,
    });
  };
  return (
    <section className="burgers">
      <h4 className="burgers__title">Burgers</h4>
      <div className="burgers__wrapper">
        <div
          className="burger__swiper-container burgers__swiper-container"
          onLoad={initSwiper}
        >
          <div className="swiper-wrapper">
            {Object.values(burgers).map((burger) => {
              return (
                <div
                  className="swiper-slide burgers__swiper-slide"
                  key={burger.id}
                >
                  <Card
                    key={burger.name}
                    name={burger.name}
                    image={burger.image2x}
                    link={burger.link}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button className="burgers__btn">Order now</button>
    </section>
  );
};
