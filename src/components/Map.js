// import React, { Component } from "react";
// import pic from "../images/favicon.ico";
// import H from "@here/maps-api-for-javascript";
//
// class Map extends Component {
//   componentDidMount() {
//     const platform = new H.service.Platform({
//       apikey: "tbDkIihY04Jmt0qauQcev4cPBn1w8AngqjlpDttkSPs",
//     });
//     const defaultLayers = platform.createDefaultLayers();
//     const map = new H.Map(
//       document.getElementById("mapContainer"),
//       defaultLayers.vector.normal.map,
//       {
//         center: { lat: 37.773972, lng: -122.431297 },
//         zoom: 14,
//       }
//     );
//     const icon = new H.map.Icon(`${pic}`, {
//       size: { w: 32, h: 32 },
//     });
//     const marker = new H.map.Marker(
//       { lat: 37.773972, lng: -122.431297 },
//       { icon }
//     );
//     map.addObject(marker);
//   }
//
//   render() {
//     return <div id="mapContainer" style={{ height: "400px" }} />;
//   }
// }
//
// export default Map;

import React, { useRef, useEffect } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import pic from "../images/favicon.ico";

import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = () => {
  const mapElement = useRef(null);

  useEffect(() => {
    const center = [51.509865, -0.118092]; // London coordinates
    const map = tt.map({
      key: "A0aRNQFZGIrGLcAtqoPIvxecr1i7cHqv",
      container: mapElement.current,
      center: center,
      zoom: 12,
    });

    const marker = new tt.Marker({
      element: createMarkerElement(),
      anchor: "bottom",
    }).setLngLat(center);
    marker.addTo(map);

    return () => {
      map.remove();
    };
  }, []);

  const createMarkerElement = () => {
    const markerElement = document.createElement("div");
    markerElement.innerHTML = '<img src="../images/favicon.ico" />';
    return markerElement;
  };

  return <div ref={mapElement} className="map" />;
};

export default Map;
