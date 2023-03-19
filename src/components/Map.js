import React, { useEffect, useState } from "react";
import tt from "@tomtom-international/web-sdk-maps";
import "@tomtom-international/web-sdk-maps/dist/maps.css";

const Map = () => {
  const [mapWidth, setMapWidth] = useState("860px");
  const [mapHeight, setMapHeight] = useState("483px");

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width <= 375) {
        setMapWidth("375px");
        setMapHeight("300px");
      } else if (width <= 1080) {
        setMapWidth("600px");
        setMapHeight("450px");
      } else {
        setMapWidth("860px");
      }
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    const map = tt.map({
      key: "1bxu9E1emgwR4iJxyU68GXYpkceSijbz",
      container: "map",
      center: [6.6330401, 46.5241497],
      zoom: 14,
      basePath: "/sdk",
    });
    const hybrid = require("../data/hybrid.json");
    map.on("load", function () {
      map.setStyle(hybrid);
      map.setPitch(60);
    });
    const marker = new tt.Marker({
      element: document.createElement("div"),
    })
      .setLngLat([6.6330401, 46.5241497])
      .addTo(map);
    const iconWay = require("../images/burger.png");
    const customIcon = document.createElement("img");
    customIcon.src = iconWay;
    customIcon.classList.add("location__map__marker");

    marker._element.appendChild(customIcon);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div id="map" style={{ width: mapWidth, height: mapHeight }}>
      {/* Map container */}
    </div>
  );
};

export default Map;

// import React, { useEffect } from "react";
// import tt from "@tomtom-international/web-sdk-maps";
// import "@tomtom-international/web-sdk-maps/dist/maps.css";
//
// const Map = () => {
//   useEffect(() => {
//     const map = tt.map({
//       key: "1bxu9E1emgwR4iJxyU68GXYpkceSijbz",
//       container: "map",
//       center: [6.632034, 46.519802],
//       zoom: 14,
//       basePath: "/sdk",
//     });
//
//     const hybrid = require("../data/hybrid.json");
//     map.on("load", function () {
//       map.setStyle(hybrid);
//     });
//
//     const marker = new tt.Marker({
//       element: document.createElement("div"),
//     })
//       .setLngLat([6.632034, 46.519802])
//       .addTo(map);
//
//     const iconWay = require("../images/burger.png");
//     const customIcon = document.createElement("img");
//     customIcon.src = iconWay;
//     customIcon.classList.add("location__map__marker");
//
//     marker._element.appendChild(customIcon);
//
//     // Find way button click event handler
//     const findWayButton = document.getElementById("find-way-button");
//     findWayButton.addEventListener("click", () => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         const lngLat = [position.coords.longitude, position.coords.latitude];
//         map.flyTo({ center: lngLat, zoom: 14 });
//
//         // Add a marker at the current location
//         new tt.Marker({ element: document.createElement("div") })
//           .setLngLat(lngLat)
//           .addTo(map);
//       });
//     });
//   }, []);
//
//   return (
//     <div>
//       <div id="map" style={{ width: "860px", height: "483px" }}>
//         {/* Map container */}
//       </div>
//       <button id="find-way-button">Find way to my position</button>
//     </div>
//   );
// };
//
// export default Map;
