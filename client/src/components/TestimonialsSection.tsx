/**
 * Testimonials Section
 * Theme: Crimson (#a20504) & White (#ffffff)
 */

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [

  {
    name: "Niket Mehra ",
    role: "Senior Project Manager - Corporate Events,",
    company: " Dun & Bradstreet",
    content:
      "MIKE Events consistently demonstrates strong ownership, professionalism, and execution excellence across every stage of the project. Their team understands client expectations well and delivers with reliability.",
    rating: 5,
    image: "/images/testimonials/niket.jpeg",
  },
  {
    name: "Savio Sutari, , ",
    role: "Head Projects – Conference",
    company: "Dun & Bradstreet India",
    content:
      "Working with MIKE Events has been a smooth and well-managed experience. Their professionalism and ability to handle complex conference requirements make them a trusted partner.",
    rating: 5,
    
  },
  {
    name: "Kinjal Shah",
    role: "CMO",
    company: "Kotak Mutual Fund",
    content:
      "Working with MIKE Events has been a highly reassuring experience for our team. They understand the importance of presentation, precision, and brand alignment in delivering meaningful event experiences.",
    rating: 5,
    image: "/images/testimonials/kinjal1.jpg",
  },
  {
    name: "Rahul Sarkar ",
    role: "B2B Marketing, DGM & Team Leader",
    company: "LG Electronics India",
    content:
      "MIKE Events has been a dependable partner in delivering well-executed and professionally managed event experiences. Their responsiveness, attention to detail, and execution focus make them a reliable extension of the team.",
    rating: 5,
    image: "/images/testimonials/rahul1.jpeg",
  },
  {
    name: "Dr. Shoaib Padaria",
    role: "Director ",
    company: "Jaslok Hospital, Mumbai",
    content:
      "Our experience with MIKE Events was extremely smooth and professionally managed. Their attention to detail and ability to handle the complexities of a medical conference were truly commendable.",
    rating: 5,
    image: "/images/testimonials/shoaib.jpeg",
  },
  {
    name: "Manoj Sharma",
    role: "CMO",
    company: "Sheela Foam Ltd.",
    content:
      "Working with MIKE Events has always been a smooth and reassuring experience. Their structured approach and commitment to quality make them a dependable event partner.",
    rating: 5,
    
  }
  , {
    name: "Saurabh Rai",
    role: "Marketing",
    company: "Sennheiser Electronics Consumer Division",
    content:
      "From planning to execution, MIKE Events has shown exceptional commitment and attention to detail. Their ability to manage large-format event requirements seamlessly is highly appreciated.",
    rating: 5,
    image: "/images/testimonials/rai.jpeg",
    
  }
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
            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 border border-gray-200 shadow-sm bg-gray-100">
                {t.image && t.image.trim() !== "" ? (
                  <img
                    src={t.image}
                    alt={t.name}
                    loading="lazy"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                ) : (
                  <span className="flex items-center justify-center w-full h-full font-bold text-gray-600">
                    {t.name?.trim()?.charAt(0) || "U"}
                  </span>
                )}
              </div>

              <div>
                <p className="font-bold text-base" style={{ color: "#1a0000" }}>
                  {t.name.replace(/,+/g, "").trim()}
                </p>
                <p className="text-sm" style={{ color: "#6b6b6b" }}>
                  {t.role?.replace(/,+/g, "").trim()}, {t.company?.trim()}
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
