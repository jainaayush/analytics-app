import React from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

const Map = (props) => {
  const { lat, lng } = props;
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCfiHJbm3k-JFET-C1wFSjOl9DngfUz8sE",
  });
  if (!isLoaded) return <div>Loading</div>;
  return <MyMap lat={lat} lng={lng} />;
};
function MyMap({lat, lng}) {
  const center = ({ lat: lat, lng: lng })

  return (
    <div>
      <GoogleMap
        zoom={15}
        center={center}
        mapContainerClassName="map-container-home"
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
}

export default Map;
