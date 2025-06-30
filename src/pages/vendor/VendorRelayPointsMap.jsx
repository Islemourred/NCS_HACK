import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";

// Static coords + info for demo
const relayPointsData = [
  {
    id: "1",
    name: "متجر الأمين",
    coords: { lat: 36.7538, lng: 3.0588 },
    address: "شارع ديدوش مراد، الجزائر",
    hours: "9 صباحاً – 8 مساءً",
    contact: "021-123456",
  },
  {
    id: "2",
    name: "سوبر ماركت النور",
    coords: { lat: 35.6971, lng: -0.6308 },
    address: "طريق وهران، وهران",
    hours: "8 صباحاً – 9 مساءً",
    contact: "041-654321",
  },
];

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "1rem",
};
const center = { lat: 36.5, lng: 4.5 };
const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;

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
      {relayPointsData.map((pt) => (
        <Marker
          key={pt.id}
          position={pt.coords}
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
