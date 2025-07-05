import React, { useState, useEffect } from "react";
import { QRCodeSVG } from "qrcode.react";
import { getParcel } from "../utils/api";
import {
  Truck,
  Store,
  Users,
  Clock,
  CheckCircle,
  MapPin,
  Phone,
  CreditCard,
  Shield,
  DollarSign,
  Sparkles,
  Globe,
  Star,
  ArrowRight,
  Play,
  Award,
  TrendingUp,
  MessageCircle,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  ChevronDown,
} from "lucide-react";
import logo from "../assets/logo.png";
import logoWhite from "../assets/logo2.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroIMG from '../assets/heroIMG.jpg'
import Spline from '@splinetool/react-spline';

const features = [
  {
    icon: Truck,
    title: "شبكة توصيل سريعة",
    description: "نقاط استلام لامركزية عبر الجزائر لتوصيل أسرع وأكثر موثوقية.",
  },
  {
    icon: Store,
    title: "شراكات محلية",
    description: "تمكين الشركات المحلية كنقاط ترحيل، وخلق فرص اقتصادية.",
  },
  {
    icon: Shield,
    title: "آمن ومتتبع",
    description: "تتبع كامل من الاستلام إلى التسليم مع التحقق الآمن بـ PIN/QR.",
  },
  {
    icon: DollarSign,
    title: "فعال من حيث التكلفة",
    description: "تقليل تكاليف فشل التسليم وتحسين اللوجستيات لجميع الأطراف.",
  },
];

const steps = [
  {
    number: "01",
    title: "إنشاء الطلب",
    description: "البائعون ينشئون طلبات التوصيل ويختارون أقرب نقطة ترحيل",
    icon: CreditCard,
  },
  {
    number: "02",
    title: "تخزين الطرد",
    description: "نقاط الترحيل المحلية تقبل وتخزن الطرود بأمان",
    icon: Store,
  },
  {
    number: "03",
    title: "إشعار العميل",
    description: "العملاء يتلقون رمز PIN/QR وتفاصيل موقع الاستلام",
    icon: Phone,
  },
  {
    number: "04",
    title: "استلام سهل",
    description:
      "استلام مناسب من نقطة الترحيل القريبة - لا مزيد من التسليمات الفائتة!",
    icon: CheckCircle,
  },
];

const stats = [
  { number: "50,000+", label: "طرد مُسلّم" },
  { number: "200+", label: "نقطة ترحيل" },
  { number: "25+", label: "ولاية مغطاة" },
  { number: "98%", label: "معدل رضا العملاء" },
];

const testimonials = [
  {
    name: "أحمد بن علي",
    role: "صاحب متجر إلكتروني",
    content:
      "نقطة غيّرت طريقة عملي تماماً. الآن عملائي يتلقون طرودهم دون أي مشاكل والتكلفة أقل بكثير.",
    avatar:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  },
  {
    name: "فاطمة زهراء",
    role: "عميلة",
    content:
      "خدمة ممتازة! أحب أنني يمكنني استلام طردي في أي وقت يناسبني من المتجر القريب من بيتي.",
    avatar:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
  },
  {
    name: "محمد الطاهر",
    role: "شريك نقطة ترحيل",
    content:
      "الشراكة مع نقطة أضافت دخلاً إضافياً لمتجري. العملية بسيطة والدعم ممتاز.",
    avatar:
      "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=2",
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

  useEffect(() => {
    AOS.init({ once: true, duration: 900, easing: "ease-in-out" });
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen bg-white" dir="rtl">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-pink-50 pt-16 sm:pt-20 pb-16 sm:pb-32 min-h-screen w-full flex items-center" data-aos="fade-up">
        <div className="absolute inset-0 w-full h-full z-0">
          <Spline scene="https://prod.spline.design/THIT3jrNnhkas2fa/scene.splinecode" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="text-center lg:text-right order-2 lg:order-1">
              <div className="bg-white/30 backdrop-blur-lg rounded-2xl sm:rounded-3xl border border-white/40 shadow-2xl p-6 sm:p-8 lg:p-10 m-2 sm:m-4 relative z-20" style={{boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)', transform: 'perspective(800px) rotateY(-8deg)'}}>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-semibold mb-6 sm:mb-8 animate-bounce" data-aos="fade-right">
                  <Sparkles className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="hidden sm:inline">ثورة في شبكة التوصيل الجزائرية</span>
                  <span className="sm:hidden">ثورة في التوصيل</span>
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-6 sm:mb-8 leading-tight" data-aos="fade-right">
                  <span className="bg-gradient-to-r from-red-600 to-pink-600 bg-clip-text text-transparent">
                    وصلي
                  </span>
                  <br />
                  <span className="text-gray-900">تسليم ذكي</span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-gray-600 mb-8 sm:mb-10 max-w-2xl leading-relaxed" data-aos="fade-right">
                  منصة لوجستية لامركزية تربط البائعين ونقاط الترحيل والعملاء.
                  <span className="font-semibold text-red-600"> صفر تسليمات فاشلة.</span>
                  <span className="font-semibold text-pink-600"> أقصى راحة.</span>
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-12" data-aos="fade-right">
                  <a href="#track" className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                    تتبع طردك
                  </a>
                  <a href="#demo" className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-gray-300 text-gray-700 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:border-red-500 hover:text-red-600 transition-all duration-300">
                    <Play className="w-5 h-5 sm:w-6 sm:h-6" />
                    <span className="hidden sm:inline">شاهد العرض التوضيحي</span>
                    <span className="sm:hidden">العرض التوضيحي</span>
                  </a>
                </div>
                {/* Stats */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8" data-aos="fade-right">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">{stat.number}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 sm:py-20 lg:py-24 bg-white" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              لماذا تختار وصلي؟
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              نحن نحول تجربة التوصيل عبر الجزائر بالتكنولوجيا المبتكرة والشراكات
              المحلية
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="inline-flex p-3 sm:p-4 bg-gradient-to-br from-red-100 to-pink-100 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:from-red-200 group-hover:to-pink-200 transition-all duration-300">
                  <feature.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section
        id="how"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-gray-50 to-red-50"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              كيف يعمل
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              بسيط وفعال وموثوق - عمليتنا من أربع خطوات تضمن وصول طرودك إلى
              وجهتها
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative z-10">
                  <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-red-600 to-pink-600 text-white rounded-xl sm:rounded-2xl mx-auto mb-4 sm:mb-6 text-lg sm:text-2xl font-bold shadow-lg">
                    {step.number}
                  </div>
                  <step.icon className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-3 sm:mb-4" />
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Track Parcel Section */}
      <section id="track" className="py-16 sm:py-20 lg:py-24 bg-white" data-aos="fade-up">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              تتبع طردك
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              أدخل رقم التتبع الخاص بك للحصول على تحديثات فورية لحالة التسليم
            </p>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl border border-gray-100 max-w-2xl mx-auto">
            <form onSubmit={handleTrack} className="space-y-4 sm:space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2 sm:mb-3">
                  رقم التتبع
                </label>
                <input
                  type="text"
                  placeholder="أدخل رقم الطرد الخاص بك (مثال: DZ123456789)"
                  value={parcelId}
                  onChange={(e) => setParcelId(e.target.value)}
                  className="w-full px-3 sm:px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 text-base sm:text-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    جاري البحث...
                  </div>
                ) : (
                  <div className="flex items-center justify-center gap-2 sm:gap-3">
                    <Truck className="w-5 h-5 sm:w-6 sm:h-6" />
                    تتبع الطرد
                  </div>
                )}
              </button>
            </form>

            {error && (
              <div className="mt-6 sm:mt-8 p-4 sm:p-6 bg-red-50 border-r-4 border-red-500 rounded-xl">
                <p className="text-red-700 font-medium text-sm sm:text-base">{error}</p>
              </div>
            )}

            {result && (
              <div className="mt-6 sm:mt-8 p-6 sm:p-8 bg-gradient-to-br from-green-50 to-red-50 rounded-xl sm:rounded-2xl border-2 border-green-200">
                <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8">
                  <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    تم العثور على الطرد!
                  </h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"></div>
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        الحالة:
                      </span>
                      <span className="px-2 sm:px-4 py-1 sm:py-2 bg-green-100 text-green-700 rounded-full text-xs sm:text-sm font-medium">
                        {result.status}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-600 mt-1" />
                      <div>
                        <span className="font-semibold text-gray-700 text-sm sm:text-base">
                          نقطة الاستلام:
                        </span>
                        <p className="text-gray-600 mt-1 text-sm sm:text-base">
                          {result.order.relay_point}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        العميل:
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base">
                        {result.order.client_name}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        الهاتف:
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base">
                        {result.order.client_phone}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-red-600" />
                      <span className="font-semibold text-gray-700 text-sm sm:text-base">
                        المنطقة:
                      </span>
                      <span className="text-gray-600 text-sm sm:text-base">
                        {result.order.client_address}
                      </span>
                    </div>
                  </div>

                  <div className="text-center">
                    <p className="font-semibold text-gray-700 mb-4 sm:mb-6 text-sm sm:text-base">
                      أظهر هذا عند الاستلام:
                    </p>
                    <div className="inline-block p-4 sm:p-6 bg-white rounded-xl sm:rounded-2xl shadow-lg">
                      <QRCodeSVG
                        value={result.id + result.pin}
                        size={100}
                        className="mb-3 sm:mb-4"
                      />
                      <div className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg sm:rounded-xl font-mono font-bold text-base sm:text-lg">
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

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-red-50 to-pink-50"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              ماذا يقول عملاؤنا
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
              آلاف العملاء يثقون بنا يومياً لتوصيل طرودهم بأمان وسرعة
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-4 sm:mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center gap-3 sm:gap-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs sm:text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-red-600 to-pink-600"
        data-aos="fade-up"
      >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            جاهز لتطوير أعمالك؟
          </h2>
          <p className="text-lg sm:text-xl text-red-100 mb-8 sm:mb-10 leading-relaxed px-4">
            انضم إلى آلاف التجار والعملاء الذين يثقون بوصلي لحلول التوصيل الذكية
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
            <button className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-red-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <Award className="w-5 h-5 sm:w-6 sm:h-6" />
              ابدأ مجاناً
            </button>
            <button className="inline-flex items-center justify-center gap-2 sm:gap-3 border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-white hover:text-red-600 transition-all duration-300">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />
              تحدث معنا
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="sm:col-span-2">
              <div className="flex items-center justify-center sm:justify-start mb-6">
                <img
                  src={logoWhite}
                  alt="Logo"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-contain"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed max-w-md text-center sm:text-right">
                تحويل لوجستيات التوصيل عبر الجزائر، طرد واحد في كل مرة. نربط
                البائعين والعملاء بشبكة ذكية من نقاط الترحيل المحلية.
              </p>
              <div className="flex justify-center sm:justify-start space-x-4 space-x-reverse">
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
                <a
                  href="#"
                  className="w-8 h-8 sm:w-10 sm:h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-red-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>

            <div className="text-center sm:text-right">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">روابط سريعة</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <a
                    href="#features"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    الميزات
                  </a>
                </li>
                <li>
                  <a
                    href="#how"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    كيف يعمل
                  </a>
                </li>
                <li>
                  <a
                    href="#track"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    تتبع الطرد
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonials"
                    className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base"
                  >
                    آراء العملاء
                  </a>
                </li>
              </ul>
            </div>

            <div className="text-center sm:text-right">
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">تواصل معنا</h3>
              <ul className="space-y-2 sm:space-y-3">
                <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-gray-400">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span dir="ltr" className="text-sm sm:text-base">+213 (0)6-62-66-54-22</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-gray-400">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">info@wassaley.dz</span>
                </li>
                <li className="flex items-center justify-center sm:justify-start gap-2 sm:gap-3 text-gray-400">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">الجزائر، الجزائر العاصمة</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
            <p className="text-gray-400 text-sm sm:text-base">
              &copy; {new Date().getFullYear()} وصلي. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
