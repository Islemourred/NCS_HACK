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
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";

const features = [
  {
    icon: TruckIcon,
    title: "شبكة توصيل سريعة",
    description: "نقاط استلام لامركزية عبر الجزائر لتوصيل أسرع وأكثر موثوقية.",
  },
  {
    icon: BuildingStorefrontIcon,
    title: "شراكات محلية",
    description: "تمكين الشركات المحلية كنقاط ترحيل، وخلق فرص اقتصادية.",
  },
  {
    icon: ShieldCheckIcon,
    title: "آمن ومتتبع",
    description: "تتبع كامل من الاستلام إلى التسليم مع التحقق الآمن بـ PIN/QR.",
  },
  {
    icon: CurrencyDollarIcon,
    title: "فعال من حيث التكلفة",
    description: "تقليل تكاليف فشل التسليم وتحسين اللوجستيات لجميع الأطراف.",
  },
];

const steps = [
  {
    number: "01",
    title: "إنشاء الطلب",
    description: "البائعون ينشئون طلبات التوصيل ويختارون أقرب نقطة ترحيل",
    icon: IdentificationIcon,
  },
  {
    number: "02",
    title: "تخزين الطرد",
    description: "نقاط الترحيل المحلية تقبل وتخزن الطرود بأمان",
    icon: BuildingStorefrontIcon,
  },
  {
    number: "03",
    title: "إشعار العميل",
    description: "العملاء يتلقون رمز PIN/QR وتفاصيل موقع الاستلام",
    icon: PhoneIcon,
  },
  {
    number: "04",
    title: "استلام سهل",
    description:
      "استلام مناسب من نقطة الترحيل القريبة - لا مزيد من التسليمات الفائتة!",
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
    <div className="flex flex-col w-full" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20 px-4">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-end">
          <div className="flex-1 text-center lg:text-right animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary-100 to-secondary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <SparklesIcon className="w-4 h-4" />
              ثورة في شبكة التوصيل الجزائرية
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="gradient-text">وصلي</span>
              <br />
              <span className="text-neutral-800">!Wassaley</span>
            </h1>
            <p className="text-xl text-neutral-600 mb-8 max-w-2xl leading-relaxed">
              منصة لوجستية لامركزية تربط البائعين ونقاط الترحيل والعملاء.
              <span className="font-semibold text-primary-600">
                {" "}
                صفر تسليمات فاشلة.
              </span>
              <span className="font-semibold text-secondary-600">
                {" "}
                أقصى راحة.
              </span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#track" className="btn-primary gap-2 text-lg px-8 py-4">
                <TruckIcon className="w-6 h-6" />
                تتبع طردك
              </a>
              <a href="#how" className="btn-secondary gap-2 text-lg px-8 py-4">
                <GlobeAltIcon className="w-6 h-6" />
                كيف يعمل
              </a>
            </div>
          </div>

          {/* Only the card and its background are sized together */}
          <div className="flex-1 flex items-end justify-end animate-slide-up">
            <div className="relative w-[384px] h-[384px]">
              {" "}
              {/* w-96 h-96 */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-200 to-secondary-200 rounded-3xl -rotate-6 opacity-20"></div>
              <div className="w-full h-full bg-white rounded-3xl shadow-strong p-8 relative z-10 flex items-center justify-center">
                <div className="text-center">
                  <img src={logo} alt="Logo" className="w-64 h-64 mx-auto" />
                  <h3 className="text-2xl font-bold text-neutral-800 mb-2">
                    لوجستيات ذكية
                  </h3>
                  <p className="text-neutral-600">متصل. فعال. موثوق.</p>
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
              لماذا تختار نقطة؟
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              نحن نحول تجربة التوصيل عبر الجزائر بالتكنولوجيا المبتكرة والشراكات
              المحلية.
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
              كيف يعمل
            </h2>
            <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
              بسيط وفعال وموثوق - عمليتنا من أربع خطوات تضمن وصول طرودك إلى
              وجهتها.
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
              تتبع طردك
            </h2>
            <p className="text-xl text-neutral-600">
              أدخل رقم التتبع الخاص بك للحصول على تحديثات فورية لحالة التسليم.
            </p>
          </div>

          <div className="card p-8 max-w-2xl mx-auto">
            <form onSubmit={handleTrack} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-neutral-700 mb-2">
                  رقم التتبع
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم الطرد الخاص بك (مثال: DZ123456789)"
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
                    جاري البحث...
                  </div>
                ) : (
                  <>
                    <TruckIcon className="w-6 h-6 mx-2" />
                    تتبع الطرد
                  </>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 p-4 bg-error-50 border-r-4 border-error-500 rounded-l-xl">
                <p className="text-error-700 font-medium">{error}</p>
              </div>
            )}

            {result && (
              <div className="mt-8 p-8 bg-gradient-to-br from-success-50 to-primary-50 rounded-2xl border border-success-200">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircleIcon className="w-8 h-8 text-success-600" />
                  <h3 className="text-2xl font-bold text-neutral-800">
                    تم العثور على الطرد!
                  </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                      <span className="font-semibold text-neutral-700">
                        الحالة:
                      </span>
                      <span className="px-3 py-1 bg-success-100 text-success-700 rounded-full text-sm font-medium">
                        {result.status}
                      </span>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPinIcon className="w-5 h-5 text-primary-600 mt-0.5" />
                      <div>
                        <span className="font-semibold text-neutral-700">
                          نقطة الاستلام:
                        </span>
                        <p className="text-neutral-600">
                          {result.relayId
                            ? "Boutique El Amine"
                            : "لم يتم التعيين بعد"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <UserGroupIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        العميل:
                      </span>
                      <span className="text-neutral-600">{result.client}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <PhoneIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        الهاتف:
                      </span>
                      <span className="text-neutral-600">{result.phone}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <GlobeAltIcon className="w-5 h-5 text-primary-600" />
                      <span className="font-semibold text-neutral-700">
                        المنطقة:
                      </span>
                      <span className="text-neutral-600">{result.region}</span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-neutral-700 mb-4">
                      أظهر هذا عند الاستلام:
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
          <div className="flex items-center justify-center mb-6">
            <img src={logo2} alt="Logo" className="w-32 h-32 object-contain" />
          </div>
          <p className="text-neutral-400 mb-4">
            تحويل لوجستيات التوصيل عبر الجزائر، طرد واحد في كل مرة.
          </p>
          <p className="text-neutral-500 text-sm">
            &copy; {new Date().getFullYear()} ColisPoint DZ. جميع الحقوق محفوظة.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
