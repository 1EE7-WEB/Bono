import React from "react";
import GoogleMapReact from "google-map-react";
import { LocateIcon } from "lucide-react";

const LocationPin = () => (
  <div className="pin">
    <LocateIcon />
  </div>
);

const Map = ({
  location,
  zoomLevel,
}: {
  location: { lat: number; lng: number };
  zoomLevel: number;
}) => (
  <div className="map h-full flex-1">
    <div className="google-map  h-[70vh]">
      <GoogleMapReact
        defaultCenter={location}
        bootstrapURLKeys={{ key: "AIzaSyBazAVVKd00X5T9Jb28s1SQax9bRhiNg9w" }}
        defaultZoom={zoomLevel}
      >
        <LocationPin />
      </GoogleMapReact>
    </div>
  </div>
);
export default Map;
