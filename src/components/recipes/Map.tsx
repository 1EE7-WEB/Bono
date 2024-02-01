import React from "react";
import GoogleMapReact from "google-map-react";
import { LocateIcon } from "lucide-react";

const LocationPin = ({ text }) => (
  <div className="pin">
    <LocateIcon />
    <p className="pin-text">{text}</p>
  </div>
);

const Map = ({
  location,
  zoomLevel,
}: {
  location: { latitude: number; longitude: number };
  zoomLevel: number;
}) => (
  <div className="map h-full flex-1">
    <div className="google-map  h-[70vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBazAVVKd00X5T9Jb28s1SQax9bRhiNg9w" }}
        defaultCenter={location}
        defaultZoom={zoomLevel}
      >
        <LocationPin lat={location.lat} lng={location.lng} />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
