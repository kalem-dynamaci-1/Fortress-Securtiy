import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

interface props {
  center: {
    lat: number;
    lng: number;
  };
  zoom: number;
}

const Map: React.FC<props> = ({ center, zoom }) => {
  const position = [center.lat, center.lng];
  return (
    <MapContainer
      // @ts-ignore
      center={position}
      zoom={zoom}
      style={{ height: "400px", marginTop: "50px" }}
      scrollWheelZoom={false}
    >
      <TileLayer
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        // @ts-ignore
        position={position}
      >
        <Popup>Fortress Security Limited</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
