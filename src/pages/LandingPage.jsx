import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getParcel } from "../utils/api";
import {
  TruckIcon,
  BuildingStorefrontIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  MapPinIcon,
  PhoneIcon,
  IdentificationIcon,
  ShieldCheckIcon,
  CurrencyDollarIcon,
  SparklesIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    icon: TruckIcon,
    title: "Fast Delivery Network",
    description:
      "Decentralized pickup points across Algeria for faster, more reliable deliveries.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "Local Partnerships",
    description:
      "Empowering local businesses as relay points, creating economic opportunities.",
  },
  {
    icon: ShieldCheckIcon,
    title: "Secure & Tracked",
    description:
      "Complete tracking from pickup to delivery with secure PIN/QR verification.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "Cost Effective",
    description:
      "Reduce failed delivery costs and optimize logistics for all parties.",
  },
];

const steps = [
  {
    number: "01",
    title: "Create Order",
    description:
      "Sellers create delivery orders and select the nearest relay point",
    icon: IdentificationIcon,
  },
  {
    number: "02",
    title: "Store Package",
    description: "Local relay points accept and safely store parcels",
    icon: BuildingStorefrontIcon,
  },
  {
    number: "03",
    title: "Notify Customer",
    description: "Customers receive PIN/QR code and pickup location details",
    icon: PhoneIcon,
  },
  {
    number: "04",
    title: "Easy Pickup",
    description:
      "Convenient pickup from nearby relay point - no missed deliveries!",
    icon: CheckCircleIcon,
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
    } catch {
      setError("Parcel not found - please check your tracking ID");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col w-full">
      /* Hero Section */
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <SparklesIcon className="w-4 h-4" />
              Revolutionizing Algeria's Delivery Network
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">ColisPoint</span>
              <br />
              <span className="text-neutral-800">DZ</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl leading-relaxed">
              Decentralized logistics platform connecting sellers, relay points,
              and customers.
              <span className="font-semibold text-primary-600">
                {" "}
                Zero failed deliveries.
              </span>
              <span className="font-semibold text-secondary-600">
                {" "}
                Maximum convenience.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#track" className="btn-primary gap-2 text-lg px-8 py-4">
                <TruckIcon className="w-6 h-6" />
                Track Your Package
              </a>
              <a href="#how" className="btn-secondary gap-2 text-lg px-8 py-4">
                <GlobeAltIcon className="w-6 h-6" />
                How It Works
              </a>
            </div>
          </div>

          {/* Only the card and its background are sized together */}
          <div className="flex-1 flex items-start justify-end animate-slide-up">
            <div className="relative w-[384px] h-[384px]">
              {" "}
              {/* w-96 h-96 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl rotate-6 opacity-20"></div>
              <div className="w-full h-full bg-white rounded-3xl shadow-strong p-8 relative z-10 flex items-center justify-center">
                <div className="text-center">
                  <TruckIcon className="w-32 h-32 text-primary-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                    Smart Logistics
                  </h3>
                  <p className="text-neutral-600">
                    Connected. Efficient. Reliable.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Why Choose ColisPoint DZ?
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              We're transforming the delivery experience across Algeria with
              innovative technology and local partnerships.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card p-8 text-center group hover:scale-105 transition-all duration-300"
              >
                <div className="inline-flex p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-6 group-hover:from-primary-200 group-hover:to-secondary-200 transition-all duration-300">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-neutral-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-neutral-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* How It Works */}
      <section
        id="how"
        className="py-20 px-4 bg-gradient-to-br from-neutral-50 to-primary-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              Simple, efficient, and reliable - our four-step process ensures
              your packages reach their destination.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="card p-8 text-center h-full group hover:shadow-strong transition-all duration-300">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white rounded-2xl mx-auto mb-6 text-2xl font-bold shadow-medium group-hover:scale-110 transition-all duration-300">
                    {step.number}
                  </div>
                  <step.icon className="w-8 h-8 text-primary-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-neutral-800 mb-4">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary-300 to-secondary-300 transform -translate-y-1/2 z-10"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Track Parcel Section */}
      <section id="track" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-neutral-800 mb-4">
              Track Your Package
            </h2>
            <p className="text-xl text-neutral-600">
              Enter your tracking ID to get real-time updates on your delivery
              status.
            </p>
          </div>

          <div className="card p-8 max-w-2xl mx-auto">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  Tracking ID
                </label>
                <input
                  type="text"
                  placeholder="Enter your Parcel ID (e.g. DZ123456789)"
                  value={parcelId}
                  onChange={(e) => setParcelId(e.target.value)}
                  className="input-field"
                  required
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full text-lg py-4"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Searching...
                  </div>
                ) : (
                  <>
                    <TruckIcon className="w-6 h-6" />
                    Track Package
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-error-50 border-l-4 border-error-500 rounded-r-xl">
                <p className="text-error-700 font-medium">{error}</p>
              </div>
            )}

            {result && (
              <div className="mt-8 p-8 bg-gradient-to-br from-success-50 to-primary-50 rounded-2xl border border-success-200">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-success-600" />
                  <h3 className="text-2xl font-bold text-neutral-800">
                    Package Found!
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                      <span className="font-semibold text-neutral-700">
                        Status:
                      </span>
                      <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                        {result.status}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-5 h-5 text-primary-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-700">
                          Pickup Point:
                        </span>
                        <p className="text-neutral-600">
                          {result.relayId
                            ? "Boutique El Amine"
                            : "Not assigned yet"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <UserGroupIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        Customer:
                      </span>
                      <span className="text-neutral-600">{result.client}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        Phone:
                      </span>
                      <span className="text-neutral-600">{result.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GlobeAltIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        Region:
                      </span>
                      <span className="text-neutral-600">{result.region}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-neutral-700 mb-4">
                      Show this at pickup:
                    </p>
                    <div className="inline-block p-4 bg-white rounded-2xl shadow-medium">
                      <QRCodeSVG
                        value={result.id + result.pin}
                        size={120}
                        className="mb-3"
                      />
                      <div className="px-4 py-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white rounded-xl font-mono font-bold">
                        PIN: {result.pin}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="bg-neutral-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="p-2 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-xl">
              <TruckIcon className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold">ColisPoint DZ</span>
          </div>
          <p className="text-neutral-400 mb-4">
            Transforming delivery logistics across Algeria, one package at a
            time.
          </p>
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} ColisPoint DZ. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
