/**
 * Testimonials Section
 * Theme: Crimson (#a20504) & White (#ffffff)
 */

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Mr. Kinjal Shah",
    role: "Chief Marketing Officer (CMO)",
    company: "Kotak Mutual Fund",
    content:
      "MIKE Events transformed our annual medical conference into an unforgettable experience. Their attention to detail and seamless coordination made our 1000+ attendee event run flawlessly. Highly recommended!",
    rating: 5,
  },
  {
    name: "Dr. Shoaib Padaria",
    role: "Head of Department (HOD)",
    company: "Jaslok Hospital",
    content:
      "The incentive travel programme organised by MIKE Events exceeded all expectations. Our team had an amazing experience, and the event truly motivated everyone. Professional service from start to finish.",
    rating: 5,
  },
  {
    name: "Parveen Sharma",
    role: "Ex-Dean",
    company: "AIIMS Jodhpur",
    content:
      "We've worked with MIKE Events on multiple exhibitions and conferences. Their technology-driven approach and transparent communication make them stand out. They truly understand our industry needs.",
    rating: 5,
  },
  {
    name: "Niket Mehra",
    role: "",
    company: "DNB",
    content:
      "MIKE Events handled our international conference in Delhi with exceptional professionalism. From speaker coordination to delegate management, everything was perfect. They made magic happen!",
    rating: 5,
  },
  {
    name: "Savio",
    role: "",
    company: "DNB",
    content:
      "MIKE Events handled our international conference in Delhi with exceptional professionalism. From speaker coordination to delegate management, everything was perfect. They made magic happen!",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setCurrent((p) => (p + 1) % testimonials.length), 5500);
    return () => clearInterval(t);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((p) => (p + 1) % testimonials.length);
  const t = testimonials[current];

  return (
    <section className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-14">
          <span
            className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4"
            style={{ background: "#fef2f2", color: "#a20504" }}
          >
            Client Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: "#1a0000" }}>
            What Our Clients Say
          </h2>
          <div className="section-divider" />
          <p className="mt-5 text-lg max-w-2xl mx-auto" style={{ color: "#6b6b6b" }}>
            Don't just take our word for it — hear from the clients who've experienced the MIKE
            Events magic.
          </p>
        </div>

        {/* Card */}
        <div className="max-w-3xl mx-auto">
          <div
            className="bg-white rounded-2xl p-8 md:p-12 relative"
            style={{ border: "1px solid #e8e8e8", boxShadow: "0 4px 24px rgba(162,5,4,0.08)" }}
          >
            {/* Quote icon */}
            <Quote className="w-12 h-12 mb-6 opacity-20" style={{ color: "#a20504" }} />

            {/* Stars */}
            <div className="flex gap-1 mb-5">
              {[...Array(t.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-lg md:text-xl leading-relaxed mb-8 italic" style={{ color: "#3d1a1a" }}>
              "{t.content}"
            </p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div
                className="w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white flex-shrink-0"
                style={{ background: "#a20504" }}
              >
                {t.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-base" style={{ color: "#1a0000" }}>
                  {t.name}
                </p>
                <p className="text-sm" style={{ color: "#6b6b6b" }}>
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: "#e8e8e8", color: "#a20504" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#a20504";
                (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#a20504";
              }}
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className="w-2.5 h-2.5 rounded-full transition-all"
                  style={{
                    background: i === current ? "#a20504" : "#e8e8e8",
                    transform: i === current ? "scale(1.3)" : "scale(1)",
                  }}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all"
              style={{ borderColor: "#e8e8e8", color: "#a20504" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "#a20504";
                (e.currentTarget as HTMLButtonElement).style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.background = "transparent";
                (e.currentTarget as HTMLButtonElement).style.color = "#a20504";
              }}
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
