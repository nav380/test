/**
 * MIKE Events India - Homepage
 * Theme: Crimson (#a20504) & White (#ffffff)
 * Header & Footer: Deep crimson-black (#1a0000) with white text
 * Body sections alternate between #ffffff and #f8f8f8
 */

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Users,
  Award,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
  Sparkles,
  Target,
  Zap,
  Heart,
  Phone,
  Mail,
  MessageCircle,
  MapPin,
} from "lucide-react";
import { useEffect, useState } from "react";
import ContactSection from "@/components/ContactSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import IndustryExpertise from "@/components/IndustryExpertise";
import EventProcess from "@/components/EventProcess";
import TrustSignals from "@/components/TrustSignals";
import SEOHead from "@/components/SEOHead";
import MobileMenu from "@/components/MobileMenu";
import ScrollToTop from "@/components/ScrollToTop";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ClientLogos from "@/components/ClientLogos";
import PortfolioGallery from "@/components/PortfolioGallery";
import ServicesFlipCards from "@/components/ServicesFlipCards";
import CountUp from "@/components/CountUp";

/* ── Colour tokens ─────────────────────────────────────────── */
const C = {
  crimson: "#a20504",
  crimsonHover: "#c41e1c",
  crimsonDark: "#7a0303",
  darkBg: "#1a0000",
  darkBg2: "#2a0505",
  white: "#ffffff",
  surface: "#f8f8f8",
  textDark: "#1a0000",
  textMuted: "#6b6b6b",
  border: "#e8e8e8",
};

const stats = [
  { value: "10+", label: "Years of Excellence", icon: Award },
  { value: "2573+", label: "Successful Events", icon: Calendar },
  { value: "445+", label: "Happy Clients", icon: Heart },
  { value: "50+", label: "Team Members", icon: Users },
];

const whyChooseUs = [
  {
    title: "End-to-End Solutions",
    description:
      "From conception to post-event reporting, we handle every detail of your event journey.",
    icon: CheckCircle2,
  },
  {
    title: "Technology-Driven",
    description:
      "Leveraging cutting-edge event management platforms for seamless execution.",
    icon: Zap,
  },
  {
    title: "Transparent Communication",
    description:
      "Real-time updates and clear communication throughout your event lifecycle.",
    icon: MessageCircle,
  },
  {
    title: "24/7 Dedicated Support",
    description: "Our team is always available to ensure your event runs flawlessly.",
    icon: Phone,
  },
  {
    title: "Pan-India Presence",
    description:
      "Offices and vendor networks across major Indian cities for seamless on-ground delivery.",
    icon: MapPin,
  },
  {
    title: "Measurable ROI",
    description:
      "Data-driven event strategies that demonstrate clear return on investment for every rupee spent.",
    icon: TrendingUp,
  },
  {
    title: "Creative Excellence",
    description:
      "Award-winning creative team that transforms ordinary briefs into extraordinary experiences.",
    icon: Sparkles,
  },
  {
    title: "Strategic Partnerships",
    description:
      "Deep relationships with top venues, AV companies, and hospitality partners for best-in-class pricing.",
    icon: Target,
  },
];

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const statsSection = document.getElementById("stats-section");
      if (statsSection) {
        const rect = statsSection.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) setStatsVisible(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const images = [
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&h=1080&fit=crop", // conference
    "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1920&h=1080&fit=crop", // corporate event
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=1920&h=1080&fit=crop", // luxury event
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 4000); // 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen" style={{ background: C.white, color: C.textDark }}>
      <SEOHead />

      {/* ── Floating WhatsApp ── */}
      <FloatingWhatsApp />

      {/* ══════════════════════════════════════════════════
          HEADER  — dark crimson background, white text
      ══════════════════════════════════════════════════ */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? `${C.darkBg}f5`
            : C.darkBg,
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? `1px solid ${C.darkBg2}` : "none",
          boxShadow: scrolled ? "0 2px 20px rgba(162,5,4,0.15)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div
                className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-xl text-white shadow-lg"
                style={{ background: C.crimson }}
              >
                M
              </div>
              <div>
                <h1 className="text-lg font-bold text-white leading-none">MIKE Events</h1>
                <p className="text-xs" style={{ color: "#f87171" }}>
                  Together We Make Magic
                </p>
              </div>
            </div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {["Services", "About", "Why Us", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-sm font-medium text-gray-300 transition-colors hover:text-white"
                  style={{ textDecoration: "none" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#fca5a5")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#d1d5db")}
                >
                  {item}
                </a>
              ))}
            </div>

            {/* CTA + mobile menu */}
            <div className="flex items-center gap-3">
              <button
                className="hidden md:block btn-crimson text-sm"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Enter the Experience
              </button>
              <MobileMenu />
            </div>
          </nav>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════
          HERO
      ══════════════════════════════════════════════════ */}
      <section
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
        style={{ background: C.darkBg }}
      >
        {/* Background image */}
        {/* Background Slider */}
        <div className="absolute inset-0 z-0">
          {images.map((img, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
                }`}
              style={{
                backgroundImage: `url(${img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          ))}
        </div>
        {/* Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: `linear-gradient(135deg, ${C.darkBg}e8 0%, ${C.darkBg}b0 50%, rgba(162,5,4,0.55) 100%)`,
          }}
        />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-5 py-2 rounded-full mb-6"
              style={{ background: "rgba(162,5,4,0.85)", color: "#fff", backdropFilter: "blur(8px)" }}
            >
              Together, We Create Magic
            </span>

            <h1 className="text-white mb-6 text-4xl md:text-6xl font-bold leading-tight">
              India's Premier MICE &amp;{" "}
              <span className="text-gradient-crimson">Event Management</span> Company
            </h1>

            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              From intimate meetings to grand conferences, we transform your vision into unforgettable
              experiences.{" "}
              <strong style={{ color: "#fca5a5" }}>10+ years of excellence</strong>,{" "}
              <strong style={{ color: "#fca5a5" }}>2573+ successful events</strong>, and counting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-14">
              <button
                className="btn-crimson inline-flex items-center justify-center gap-2 text-base px-8 py-3"
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Enter the Experience <ArrowRight className="w-4 h-4" />
              </button>
              <button
                className="inline-flex items-center justify-center gap-2 text-base px-8 py-3 rounded-lg font-semibold text-white border-2 transition-all"
                style={{ borderColor: "rgba(255,255,255,0.4)", background: "rgba(255,255,255,0.08)" }}
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.18)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.08)";
                }}
              >
                View Our Services
              </button>
            </div>

            {/* Trust bar */}


          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-1.5">
            <div className="w-1 h-3 bg-white/70 rounded-full" />
          </div>
        </div>
      </section>



      {/* ══════════════════════════════════════════════════
          ABOUT  — white background
      ══════════════════════════════════════════════════ */}
      <section id="about" className="py-20" style={{ background: C.white }}>
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-14 items-center">
            <div>
              <span
                className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5"
                style={{ background: "#fef2f2", color: C.crimson }}
              >
                About MIKE Events
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.textDark }}>
                We Do Magic to{" "}
                <span className="text-gradient-crimson">Create Connect</span>
              </h2>
              <div className="section-divider" style={{ margin: "0 0 1.5rem 0" }} />
              <p className="text-lg mb-5 leading-relaxed" style={{ color: C.textMuted }}>
                MIKE has emerged as one of the most competitive, unique, and successful professional
                conference organisers and event management companies in India. We are passionate,
                engaged, and committed to supporting our clients' objectives and delivering the best
                possible outcomes.
              </p>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: C.textMuted }}>
                Our comprehensive approach covers every aspect of event management — from initial
                conception through budgeting, design, and development, to marketing, execution, and
                post-event analysis. We don't just organise events; we create experiences that resonate
                and inspire.
              </p>
              <button
                className="btn-crimson inline-flex items-center gap-2"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Explore Our Services <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            <div className="relative">
              <div
                className="rounded-2xl overflow-hidden shadow-2xl"
                style={{ border: `1px solid ${C.border}` }}
              >
                <img
                  src="https://images.unsplash.com/photo-1511578314322-379afb476865?w=900&h=650&fit=crop"
                  alt="MIKE Events team collaboration at a professional conference"
                  className="w-full h-auto"
                />
              </div>
              {/* Floating badge */}
              <div
                className="absolute -bottom-5 -left-5 px-5 py-3 rounded-xl shadow-xl"
                style={{ background: C.crimson }}
              >
                <p className="text-white font-bold text-lg">2573+ Events</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.8)" }}>
                  Successfully Delivered
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════
          STATS  — crimson background
      ══════════════════════════════════════════════════ */}
      <section id="stats-section" className="py-20 bg-red-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-900 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;

              const numericValue = parseInt(stat.value); // extract number
              const suffix = stat.value.includes("+") ? "+" : "";

              return (
                <div
                  key={index}
                  className="text-center transform transition-all duration-500"
                  style={{
                    opacity: statsVisible ? 1 : 0,
                    transform: statsVisible ? "translateY(0)" : "translateY(20px)",
                    transitionDelay: `${index * 100}ms`,
                  }}
                >


                  <div className="text-4xl md:text-5xl font-bold mb-2">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <CountUp
                      end={numericValue}
                      duration={2000}
                      suffix={suffix}
                      start={statsVisible}

                    />
                  </div>

                  <div className="text-white/80 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* ── Client Logos ── */}
      <ClientLogos />

      {/* ══════════════════════════════════════════════════
          SERVICES  — flip cards (surface background)
      ══════════════════════════════════════════════════ */}
      <ServicesFlipCards />

      {/* ── Portfolio Gallery ── */}
      <PortfolioGallery />

      {/* ── Industry Expertise ── */}
      <IndustryExpertise />

      {/* ── Event Planning Process ── */}
      <EventProcess />

      {/* ══════════════════════════════════════════════════
          WHY CHOOSE US  — white background
      ══════════════════════════════════════════════════ */}
      <section id="why-us" className="py-20" style={{ background: C.white }}>
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span
              className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
              style={{ background: "#fef2f2", color: C.crimson }}
            >
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: C.textDark }}>
              Why Choose{" "}
              <span className="text-gradient-crimson">MIKE Events</span>?
            </h2>
            <div className="section-divider" />
            <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: C.textMuted }}>
              We combine expertise, technology, and passion to deliver exceptional event experiences
              that exceed expectations every time.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {whyChooseUs.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="site-card site-card-hover flex flex-col gap-3"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "#fef2f2" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: C.crimson }} />
                  </div>
                  <h4 className="font-bold text-base" style={{ color: C.textDark }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: C.textMuted }}>
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <TestimonialsSection />

      {/* ── Trust Signals ── */}
      <TrustSignals />

      {/* ── FAQ ── */}
      <FAQSection />

      {/* ── Contact ── */}
      <ContactSection />

      {/* ══════════════════════════════════════════════════
          CTA BANNER  — crimson background
      ══════════════════════════════════════════════════ */}
      <section className="py-20 relative overflow-hidden" style={{ background: C.crimson }}>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-3xl" style={{ background: C.crimsonDark }} />
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-5">
            Ready to Create Magic Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ color: "rgba(255,255,255,0.9)" }}>
            Let's discuss your next event and transform your vision into an unforgettable experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-base transition-all"
              style={{ background: C.white, color: C.crimson }}
              onClick={() =>
                document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
              }
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "#f8f8f8")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = C.white)}
            >
              <Phone className="w-4 h-4" /> Get Free Consultation
            </button>
            <button
              className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg font-semibold text-base border-2 text-white transition-all"
              style={{ borderColor: "rgba(255,255,255,0.5)", background: "rgba(255,255,255,0.1)" }}
              onClick={() => (window.location.href = "mailto:info@mikevents.in")}
              onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.2)")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.background = "rgba(255,255,255,0.1)")}
            >
              <Mail className="w-4 h-4" /> Email Us
            </button>
          </div>
        </div>
      </section>

      {/* ── Scroll to Top ── */}
      <ScrollToTop />

      {/* ══════════════════════════════════════════════════
          FOOTER  — same dark crimson-black as header
      ══════════════════════════════════════════════════ */}
      <footer style={{ background: C.darkBg, borderTop: `1px solid ${C.darkBg2}` }}>
        <div className="container mx-auto px-4 py-14">
          <div className="grid md:grid-cols-4 gap-10 mb-10">
            {/* Brand */}
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center font-bold text-xl text-white"
                  style={{ background: C.crimson }}
                >
                  M
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white leading-none">MIKE Events</h3>
                  <p className="text-xs" style={{ color: "#f87171" }}>
                    Together We Make Magic
                  </p>
                </div>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#9ca3af" }}>
                India's premier MICE &amp; event management company delivering extraordinary
                experiences since 2015.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-white mb-4 text-md uppercase tracking-wide">
                Quick Links
              </h4>
              <ul className="space-y-2.5">
                {[
                  ["About Us", "#about"],
                  ["Services", "#services"],
                  ["Why Choose Us", "#why-us"],
                  ["Portfolio", "#portfolio"],
                  ["Contact", "#contact"],
                ].map(([label, href]) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-md transition-colors"
                      style={{ color: "#9ca3af", textDecoration: "none" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#fca5a5")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#9ca3af")}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="font-bold text-white mb-4 text-md uppercase tracking-wide">
                Our Services
              </h4>
              <ul className="space-y-2.5">
                {[
                  "Association Management",
                  "Conference Management",
                  "Awards & Gala Evenings",
                  "Exhibition Management",
                  "Incentive Travel",
                  "Corporate Events",
                ].map((s) => (
                  <li key={s} className="text-md" style={{ color: "#9ca3af" }}>
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-white mb-4 text-md uppercase tracking-wide">
                Contact Info
              </h4>
              <ul className="space-y-3">
                {[
                  { icon: Phone, text: "+91 8586877073" },
                  { icon: Mail, text: "info@mikevents.in" },
                  { icon: MessageCircle, text: "WhatsApp Support" },
                  { icon: MapPin, text: "India (Pan-India Operations)" },
                ].map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-start gap-2 text-md" style={{ color: "#9ca3af" }}>
                    <Icon className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f87171" }} />
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div
            className="pt-8 text-center text-xs"
            style={{ borderTop: `1px solid ${C.darkBg2}`, color: "#6b7280" }}
          >
            <p>
              &copy; {new Date().getFullYear()} MIKE Events India. All rights reserved.
              &nbsp;|&nbsp; Privacy Policy &nbsp;|&nbsp; Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
