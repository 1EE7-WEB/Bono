import React, { useEffect, useState } from "react";
import Map from "~/components/recipes/Map";
const location2 = {
  lat: 37.42216,
  lng: -122.08427,
}; // our location object from earlier

function Delivery() {
  const [location, setLocation] = useState();

  useEffect(() => {
    if ("geolocation" in navigator) {
      // Retrieve latitude & longitude coordinates from `navigator.geolocation` Web API
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setLocation({ lat: latitude, lng: longitude });
      });
    }
  }, []);

  return (
    <div>
      {" "}
      {location && location.latitude ? (
        <Map location={location} zoomLevel={17} />
      ) : null}
    </div>
  );
}

export default Delivery;
