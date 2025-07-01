import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { RELAY_POINTS } from "../../utils/relayPointsData";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1rem",
};
const center = { lat: 36.5, lng: 4.5 };
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
console.log(RELAY_POINTS);
export default function VendorRelayPointsMap() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
    language: "ar",
    region: "DZ",
  });
  const [selectedPoint, setSelectedPoint] = useState(null);

  if (!isLoaded) return <div>...جاري تحميل الخريطة</div>;

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={6}
      onClick={() => setSelectedPoint(null)} // close info on map click
    >
      {RELAY_POINTS.map((pt) => (
        <Marker
          key={pt.id}
          position={{ lat: Number(pt.latitude), lng: Number(pt.longitude) }}
          label={{
            text: pt.name,
            fontWeight: "bold",
            fontSize: "14px",
          }}
          onClick={() => setSelectedPoint(pt)}
        />
      ))}

      {selectedPoint && (
        <InfoWindow
          position={selectedPoint.coords}
          onCloseClick={() => setSelectedPoint(null)}
        >
          <div style={{ maxWidth: 200, lineHeight: "1.4" }}>
            <h3 style={{ margin: 0, fontSize: "1.1rem" }}>
              {selectedPoint.name}
            </h3>
            <p style={{ margin: "0.4em 0" }}>
              <strong>العنوان:</strong> {selectedPoint.address}
              <br />
              <strong>ساعات العمل:</strong> {selectedPoint.hours}
              <br />
              <strong>تواصل:</strong> {selectedPoint.contact}
            </p>
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  );
}
