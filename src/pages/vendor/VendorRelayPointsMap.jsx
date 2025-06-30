import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";

// Example static coordinates for relay points (replace with real ones if available)
const relayPointsCoords = {
  "متجر الأمين": { lat: 36.7538, lng: 3.0588 }, // Algiers
  "سوبر ماركت النور": { lat: 35.6971, lng: -0.6308 }, // Oran
  "مكتبة المعرفة": { lat: 36.3650, lng: 6.6147 }, // Constantine
  "صيدلية الشفاء": { lat: 36.9063, lng: 7.7558 }, // Annaba
};

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1rem",
};

const center = { lat: 36.5, lng: 4.5 }; // Center of Algeria

// IMPORTANT: Set your Google Maps API key in a .env file as VITE_GOOGLE_MAPS_API_KEY
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

const VendorRelayPointsMap = ({ relayPoints }) => {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    language: "ar",
    region: "DZ",
  });

  if (!isLoaded) return <div>...جاري تحميل الخريطة</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={6}>
      {relayPoints.map((point) => {
        const coords = relayPointsCoords[point.name];
        if (!coords) return null;
        return (
          <Marker
            key={point.id}
            position={coords}
            label={{ text: point.name, fontWeight: "bold", fontSize: "14px" }}
          />
        );
      })}
    </GoogleMap>
  );
};

export default VendorRelayPointsMap; 