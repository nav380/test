/**
 * Trust Signals Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Build credibility with certifications, awards, and partnerships
 */

import { Badge } from "@/components/ui/badge";
import { Award, Shield, Star, TrendingUp, Users, Zap } from "lucide-react";

const achievements = [
  {
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "Quality management system certification for consistent service excellence"
  },
  {
    icon: Shield,
    title: "Data Security Compliant",
    description: "GDPR and data protection standards for client confidentiality"
  },
  {
    icon: Star,
    title: "Industry Recognition",
    description: "Multiple awards for event excellence and innovation"
  },
  {
    icon: TrendingUp,
    title: "98% Client Retention",
    description: "Long-term partnerships built on trust and results"
  },
  {
    icon: Users,
    title: "50+ Team Members",
    description: "Experienced professionals across all event disciplines"
  },
  {
    icon: Zap,
    title: "24/7 Support",
    description: "Round-the-clock assistance before, during, and after events"
  }
];

// Placeholder partner logos - user can replace with actual logos
const partners = [
  { name: "KOTAK", logo: "/images/sponsors/15.png" },
  { name: "LG", logo: "/images/sponsors/16.png" },
  { name: "ENTER OF SIGHT", logo: "/images/sponsors/3.png" },
  
  { name: "DND", logo: "/images/sponsors/32.png" },
  { name: "SENNHEISHER", logo: "/images/sponsors/38.png" },
  { name: "CHEMA", logo: "/images/sponsors/39.png" },
  { name: "HOME CREDIT", logo: "/images/sponsors/8.png" },
  { name: "DELHI MEDIAL ASSOCIATION", logo: "/images/sponsors/4.png" },
];

export default function TrustSignals() {
  return (
    <section className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        {/* Achievements Grid */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <Badge className="mb-4 bg-[#c41e1c] text-white border-2 border-[#e8e8e8] px-8 py-4 text-xl font-bold font-['Archivo'] rounded-2xl">
              Trust & Excellence
            </Badge>
            <h2 className="text-[#1a0000] mb-4">
              Certified for <span className="text-[#a20504]">Excellence</span>
            </h2>
            <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
              Our commitment to quality, security, and client satisfaction is backed by industry certifications and proven track record.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}
                >
                  <div className="w-16 h-16 bg-[#a20504] border border-[#e8e8e8] flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-[#1a0000] font-bold mb-2 font-['Archivo']">
                    {achievement.title}
                  </h3>
                  <p className="text-[#6b6b6b] text-sm">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Partners & Clients */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-[#1a0000] font-bold mb-4 text-2xl font-['Archivo']">
              Trusted by Leading Organizations
            </h3>
            <p className="text-[#6b6b6b] max-w-2xl mx-auto">
              We're proud to partner with industry leaders, government bodies, and innovative companies across India.
            </p>
          </div>

          {/* Partner Logos Grid */}
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="aspect-square bg-[#f8f8f8] border border-[#e8e8e8] flex items-center justify-center hover:shadow-lg hover:shadow-[rgba(162,5,4,0.1)] transition-all duration-300 group"
              >
                <span className="text-2xl font-bold text-[#1a0000] group-hover:text-[#a20504] transition-colors">
                  <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                </span>
              </div>
            ))}
          </div>

          {/* Instructions for User */}
          
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}>
            <h3 className="text-[#1a0000] font-bold mb-4 text-2xl font-['Archivo']">
              Award-Winning Event Management Company in India
            </h3>
            <div className="text-[#6b6b6b] space-y-4 leading-relaxed">
              <p>
                MIKE Events is recognized as one of India's leading event management companies, certified for quality excellence and trusted by over 200+ organizations across diverse industries. Our ISO 9001:2015 certification demonstrates our commitment to maintaining the highest standards in event planning and execution.
              </p>
              <p>
                We prioritize data security and client confidentiality, adhering to international standards including GDPR compliance. Our 98% client retention rate speaks to the quality of our service and the lasting relationships we build with every client.
              </p>
              <p>
                With a dedicated team of 50+ event professionals and 24/7 support, we ensure your event receives the attention and expertise it deserves. From initial planning to post-event analysis, we're with you every step of the way.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
