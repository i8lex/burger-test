import React from "react";
import { adress } from "../data/data";
import Map from "./Map";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

//google map api
//  AIzaSyAuox7M10M5GbPaThfM9jYWSCIN0NaICzE

//AIzaSyCKcSQas1ejRJMFGxmg25s14t-yNewjJt0

//HERE map api
// tbDkIihY04Jmt0qauQcev4cPBn1w8AngqjlpDttkSPs

//TomTom
//A0aRNQFZGIrGLcAtqoPIvxecr1i7cHqv

export const Location = () => {
  return (
    <section className="location">
      <div className="location__wrapper">
        <h4 className="location__title">Location</h4>
        <div className="location__box">
          <p className="location__box__text">{adress.name}</p>
          <p className="location__box__text">{adress.street}</p>
          <p className="location__box__text">{adress.city}</p>
          <p className="location__box__text">{adress.phone}</p>
        </div>
        <div className="location__map">
          <Map />
          {/*<iframe*/}
          {/*  title="Burger Factory"*/}
          {/*  width="860"*/}
          {/*  height="483"*/}
          {/*  frameBorder="0"*/}
          {/*  scrolling="no"*/}
          {/*  marginHeight="0"*/}
          {/*  marginWidth="0"*/}
          {/*  id="gmap_canvas"*/}
          {/*  src="https://maps.google.com/maps?width=860&amp;height=483&amp;hl=en&amp;q=Pl.%20de%20la%20Riponne%2010%20Lausanne+(Burger%20Factory)&amp;t=k&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"*/}
          {/*/>*/}
        </div>
      </div>
    </section>
  );
};
