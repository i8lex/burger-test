import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { adress } from "../data/data";

const containerStyle = {
  width: "860px",
  height: "483px",
  borderRadius: "30px",
};

const center = {
  lat: -3.745,
  lng: -38.523,
};
//google map api
//  AIzaSyAuox7M10M5GbPaThfM9jYWSCIN0NaICzE

export const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyAuox7M10M5GbPaThfM9jYWSCIN0NaICzE",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
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
          {isLoaded ? (
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={center}
              zoom={50}
              onLoad={onLoad}
              onUnmount={onUnmount}
            >
              {/* Child components, such as markers, info windows, etc. */}
              <></>
            </GoogleMap>
          ) : (
            <></>
          )}
          {/*<img*/}
          {/*  src="../images/map@2x.png"*/}
          {/*  alt="map"*/}
          {/*  className="location__iamge__img"*/}
          {/*/>*/}
        </div>
      </div>
    </section>
  );
};
