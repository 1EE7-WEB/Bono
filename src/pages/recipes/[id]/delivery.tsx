import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Map from "~/components/recipes/Map";
import { TypographyH1 } from "~/components/typography/TypographyH1";
import { TypographyH2 } from "~/components/typography/TypographyH2";
const location2 = {
  lat: 37.42216,
  lng: -122.08427,
};
function Delivery() {
  const [location, setLocation] = useState();

  console.log(location);

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
      <TypographyH2>Order taken successfully!!</TypographyH2>{" "}
      <div className="py-2"></div>
      {location ? (
        <Map location={location} zoomLevel={17} />
      ) : (
        <div className="h-[70vh] bg-muted"> </div>
      )}
      <div className="py-2"></div>
      <Link href={"/"}>
        <Button className="mt-4">
          Done <Check />
        </Button>
      </Link>
    </div>
  );
}

export default Delivery;
