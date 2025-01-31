import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

// Dynamically import Leaflet components (to avoid SSR issues)
const MapContainer = dynamic(() => import("react-leaflet").then((mod) => mod.MapContainer), { ssr: false });
const TileLayer = dynamic(() => import("react-leaflet").then((mod) => mod.TileLayer), { ssr: false });
const Marker = dynamic(() => import("react-leaflet").then((mod) => mod.Marker), { ssr: false });
const Popup = dynamic(() => import("react-leaflet").then((mod) => mod.Popup), { ssr: false });

const Map = ({ position, zoomLevel }) => {
  const [leafletLoaded, setLeafletLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      import("leaflet").then(() => setLeafletLoaded(true)); // Only load Leaflet on client side
    }
  }, []);

  if (!leafletLoaded) return <div>Loading Map...</div>; // Loading message until map is ready

  return (
    <MapContainer center={position} zoom={zoomLevel} style={{ width: "100%", height: "500px" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>Hyderabad: Dengue Cases - 150</Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
