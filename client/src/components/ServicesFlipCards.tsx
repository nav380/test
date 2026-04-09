/**
 * ServicesFlipCards Component
 * Theme: Crimson (#a20504) & White (#ffffff)
 * Feature: 3D flip card — front shows service overview, back shows detail on "Learn More" click
 */

import { useState } from "react";
import { RotateCcw } from "lucide-react";

interface Service {
  id: number;
  icon: string;
  title: string;
  tagline: string;
  frontHighlights: string[];
  backDescription: string;
  backPoints: string[];
}

const services: Service[] = [
  {
    id: 1,
    icon: "🏛️",
    title: "Association Management",
    tagline: "Empowering professional communities",
    frontHighlights: ["Membership management", "Governance support", "Annual general meetings"],
    backDescription:
      "We provide end-to-end association management services — from membership drives and governance frameworks to annual general meetings and board retreats. Our team acts as an extension of your secretariat, handling communications, compliance, and community engagement so your association thrives year-round.",
    backPoints: [
      "Membership database & renewals",
      "AGM & EGM planning",
      "Board & committee support",
      "Newsletter & communications",
    ],
  },
  {
    id: 2,
    icon: "🎤",
    title: "Conference Management",
    tagline: "Seamless conferences, lasting impact",
    frontHighlights: ["International & National conferences", "Hybrid & virtual formats", "Speaker management"],
    backDescription:
      "From intimate symposia to large-scale international congresses, we manage every detail — venue selection, abstract management, speaker coordination, AV production, and delegate registration — ensuring a flawless experience that elevates your brand and delivers measurable outcomes.",
    backPoints: [
      "Abstract & programme management",
      "Delegate registration portal",
      "Hybrid & virtual streaming",
      "Post-event analytics & reporting",
    ],
  },
  {
    id: 3,
    icon: "🏆",
    title: "Awards & Gala Evenings",
    tagline: "Celebrating excellence in style",
    frontHighlights: ["Award ceremony design", "Gala dinner production", "Entertainment & décor"],
    backDescription:
      "We craft award ceremonies and gala evenings that leave audiences inspired. Our creative team handles everything from theme conceptualisation and stage design to entertainment curation, gourmet dining experiences, and live broadcast production — creating unforgettable moments of recognition.",
    backPoints: [
      "Theme & concept design",
      "Stage & AV production",
      "Entertainment & celebrity management",
      "Live streaming & photography",
    ],
  },
  {
    id: 4,
    icon: "✈️",
    title: "Incentive Travel",
    tagline: "Reward your best, inspire the rest",
    frontHighlights: ["Domestic & international travel", "Group experiences", "Customised itineraries"],
    backDescription:
      "Our incentive travel programmes are designed to motivate, reward, and retain top performers. We curate bespoke group travel experiences — from luxury retreats and adventure expeditions to cultural immersions — handling every logistical detail so your team focuses on the experience.",
    backPoints: [
      "Destination research & selection",
      "Group air & hotel contracting",
      "Activity & experience curation",
      "On-ground concierge support",
    ],
  },
  {
    id: 5,
    icon: "🏗️",
    title: "Exhibition Management",
    tagline: "Booths that attract, spaces that convert",
    frontHighlights: ["Exhibition stand design", "Trade show management", "Visitor engagement"],
    backDescription:
      "We design and manage exhibition spaces that command attention and drive footfall. Our services span booth concept and fabrication, floor-plan coordination, exhibitor services, and visitor engagement strategies — ensuring your brand stands out in a crowded exhibition hall.",
    backPoints: [
      "Stand design & fabrication",
      "Floor plan & logistics",
      "Exhibitor services portal",
      "Lead capture & follow-up systems",
    ],
  },
  {
    id: 6,
    icon: "🤝",
    title: "Corporate Events",
    tagline: "Experiences that align and inspire teams",
    frontHighlights: ["Town halls & offsites", "Product launches", "Team-building programmes"],
    backDescription:
      "Whether it's an internal town hall, a high-stakes product launch, or a team-building retreat, we bring creativity and operational precision to every corporate event. We work closely with your stakeholders to ensure the event reflects your culture, communicates your message, and energises your people.",
    backPoints: [
      "Strategic event planning",
      "Brand-aligned production",
      "Interactive team activities",
      "Budget management & reporting",
    ],
  },
];

function FlipCard({ service }: { service: Service }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={`flip-card h-80${flipped ? " flipped" : ""}`} style={{ height: "22rem" }}>
      <div className="flip-card-inner">
        {/* ── FRONT ── */}
        <div className="flip-card-front bg-white border border-[#e8e8e8] shadow-sm flex flex-col p-6">
          {/* Icon */}
          <div
            className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0"
            style={{ background: "#fef2f2" }}
          >
            {service.icon}
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold mb-1" style={{ color: "#1a0000" }}>
            {service.title}
          </h3>
          <p className="text-sm mb-4" style={{ color: "#6b6b6b" }}>
            {service.tagline}
          </p>

          {/* Highlights */}
          <ul className="space-y-1 flex-1">
            {service.frontHighlights.map((h, i) => (
              <li key={i} className="flex items-center gap-2 text-sm" style={{ color: "#1a0000" }}>
                <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#a20504" }} />
                {h}
              </li>
            ))}
          </ul>

          {/* Learn More */}
          <button
            onClick={() => setFlipped(true)}
            className="mt-4 flex items-center gap-1 text-sm font-semibold transition-colors"
            style={{ color: "#a20504" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#c41e1c")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#a20504")}
          >
            Learn More
            <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* ── BACK ── */}
        <div
          className="flip-card-back flex flex-col p-6"
          style={{ background: "#a20504" }}
        >
          {/* Header row */}
          <div className="flex items-start justify-between mb-3">
            <h3 className="text-base font-bold text-white leading-tight pr-2">{service.title}</h3>
            <button
              onClick={() => setFlipped(false)}
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
              style={{ background: "rgba(255,255,255,0.2)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.2)")}
              aria-label="Flip back"
            >
              <RotateCcw className="w-3.5 h-3.5 text-white" />
            </button>
          </div>

          {/* Description */}
          <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.88)" }}>
            {service.backDescription}
          </p>

          {/* Key points */}
          <ul className="space-y-1.5">
            {service.backPoints.map((pt, i) => (
              <li key={i} className="flex items-center gap-2 text-xs text-white">
                <span
                  className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: "rgba(255,255,255,0.7)" }}
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function ServicesFlipCards() {
  return (
    <section id="services" className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#fef2f2", color: "#a20504" }}
          >
            What We Do
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a0000" }}>
            Comprehensive Event{" "}
            <span className="text-gradient-crimson">Solutions</span>
          </h2>
          <div className="section-divider" />
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: "#6b6b6b" }}>
            Six specialised service lines, each crafted to deliver exceptional experiences. Click{" "}
            <strong style={{ color: "#a20504" }}>Learn More</strong> on any card to discover what we bring to the table.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <FlipCard key={s.id} service={s} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center">
          <button
            className="btn-crimson inline-flex items-center gap-2 text-base px-8 py-3"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Discuss Your Event Requirements
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
