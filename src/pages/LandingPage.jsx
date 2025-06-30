import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getParcel } from "../utils/api";

const mockSections = [
  {
    title: "How It Works",
    steps: [
      "Sellers create delivery orders and select a relay point.",
      "Relay points (local shops) accept and store parcels.",
      "Customers receive a PIN/QR and pick up from the relay point.",
      "No failed deliveries, more convenience for everyone!",
    ],
  },
  {
    title: "Why ColisPoint DZ?",
    benefits: [
      "Reduce failed deliveries and costs",
      "Empower local businesses as relay points",
      "Faster, more reliable parcel pickup",
      "Easy tracking and notifications",
    ],
  },
];

const LandingPage = () => {
  const [parcelId, setParcelId] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleTrack = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);
    try {
      const parcel = await getParcel(parcelId.trim());
      setResult(parcel);
    } catch (err) {
      setError("Parcel not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-br from-blue-100 to-white py-16 px-4 flex flex-col items-center">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4 text-center">ColisPoint DZ</h1>
        <p className="text-xl text-gray-700 mb-6 max-w-2xl text-center">
          Decentralized logistics for Algeria. Community pickup points, less failed deliveries, more convenience for all.
        </p>
        <div className="flex flex-col md:flex-row gap-4 mt-4">
          <a href="#track" className="bg-blue-600 text-white px-8 py-3 rounded font-semibold shadow hover:bg-blue-700 transition">Track Your Parcel</a>
          <a href="#how" className="bg-white border border-blue-600 text-blue-700 px-8 py-3 rounded font-semibold shadow hover:bg-blue-50 transition">How It Works</a>
        </div>
      </section>

      {/* How It Works */}
      <section id="how" className="w-full max-w-4xl py-16 px-4 flex flex-col items-center">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">How It Works</h2>
        <ol className="list-decimal list-inside text-lg text-gray-700 space-y-2">
          {mockSections[0].steps.map((step, i) => (
            <li key={i}>{step}</li>
          ))}
        </ol>
      </section>

      {/* Benefits */}
      <section className="w-full max-w-4xl py-16 px-4 flex flex-col items-center bg-blue-50 rounded-xl shadow">
        <h2 className="text-3xl font-bold text-blue-700 mb-6">Why ColisPoint DZ?</h2>
        <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
          {mockSections[1].benefits.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </section>

      {/* Track Parcel */}
      <section id="track" className="w-full max-w-2xl py-16 px-4 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Track Your Parcel</h2>
        <form onSubmit={handleTrack} className="w-full max-w-md flex flex-col items-center gap-4 mb-8">
          <input
            type="text"
            placeholder="Enter your Parcel ID (e.g. DZ123456789)"
            value={parcelId}
            onChange={e => setParcelId(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition" disabled={loading}>{loading ? "Searching..." : "Track Parcel"}</button>
        </form>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        {result && (
          <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-lg flex flex-col items-center">
            <h2 className="text-xl font-bold text-blue-700 mb-2">Parcel Status: <span className="text-gray-800">{result.status}</span></h2>
            <div className="mb-2 text-gray-700">
              <div><span className="font-semibold">Pickup Point:</span> {result.relayId ? "Boutique El Amine" : "-"}</div>
              <div><span className="font-semibold">Client:</span> {result.client}</div>
              <div><span className="font-semibold">Phone:</span> {result.phone}</div>
              <div><span className="font-semibold">Region:</span> {result.region}</div>
            </div>
            <div className="flex flex-col items-center mt-4">
              <span className="font-semibold text-gray-700 mb-1">Show this QR or PIN at pickup:</span>
              <QRCodeSVG value={result.id + result.pin} size={96} className="mb-2" />
              <span className="text-lg font-mono bg-gray-100 px-3 py-1 rounded">PIN: {result.pin}</span>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-400 text-xs bg-white border-t mt-8">&copy; {new Date().getFullYear()} ColisPoint DZ. All rights reserved.</footer>
    </div>
  );
};

export default LandingPage; 