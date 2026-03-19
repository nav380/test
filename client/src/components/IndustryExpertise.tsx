/**
 * Industry Expertise Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Showcases industry-specific expertise for targeted keywords
 */

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Stethoscope, 
  Laptop, 
  Building2, 
  GraduationCap, 
  Landmark,
  TrendingUp,
  Users,
  Briefcase
} from "lucide-react";

const industries = [
  {
    name: "Healthcare & Pharma",
    icon: Stethoscope,
    description: "Medical conferences, CME programs, pharmaceutical product launches, and healthcare symposiums with regulatory compliance.",
    events: "150+ Events",
    color: "terracotta"
  },
  {
    name: "Technology & IT",
    icon: Laptop,
    description: "Tech summits, product launches, developer conferences, and innovation showcases with cutting-edge AV solutions.",
    events: "120+ Events",
    color: "mustard"
  },
  {
    name: "Corporate & Business",
    icon: Briefcase,
    description: "Annual general meetings, board meetings, corporate retreats, team building events, and leadership summits.",
    events: "180+ Events",
    color: "coral"
  },
  {
    name: "Education & Research",
    icon: GraduationCap,
    description: "Academic conferences, research symposiums, student conventions, and educational workshops across India.",
    events: "80+ Events",
    color: "forest"
  },
  {
    name: "Government & Public Sector",
    icon: Landmark,
    description: "Policy conferences, government summits, public awareness campaigns, and inter-ministerial meetings.",
    events: "60+ Events",
    color: "terracotta"
  },
  {
    name: "Finance & Banking",
    icon: TrendingUp,
    description: "Financial summits, investor conferences, banking conventions, and fintech innovation events.",
    events: "70+ Events",
    color: "mustard"
  },
  {
    name: "Manufacturing & Industry",
    icon: Building2,
    description: "Industrial exhibitions, trade shows, B2B conferences, and manufacturing excellence summits.",
    events: "90+ Events",
    color: "coral"
  },
  {
    name: "Associations & NGOs",
    icon: Users,
    description: "Professional association conferences, NGO summits, member meetings, and community engagement events.",
    events: "100+ Events",
    color: "forest"
  }
];

export default function IndustryExpertise() {
  return (
    <section className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#a20504] text-white border-2 border-[#e8e8e8] px-6 py-4 text-xl rounded-2xl">
            Industry Expertise
          </Badge>
          <h2 className="text-gray-900 mb-4">
            Trusted Across <span className="text-[#a20504]">Multiple Industries</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
            Our deep industry knowledge and specialized expertise enable us to deliver tailored event solutions that meet the unique requirements of each sector.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <Card
                key={index}
                className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}
              >
                <CardContent className="p-6">
                  <div className={`w-14 h-14 bg-[var(--${industry.color})] border border-[#e8e8e8] flex items-center justify-center mb-4`}>
                    <Icon className="w-7 h-7 text-[#1a0000]" />
                  </div>
                  
                  <h3 className="text-[#1a0000] font-bold mb-2 text-lg font-['Archivo']">
                    {industry.name}
                  </h3>
                  
                  <p className="text-[#6b6b6b] text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  
                  <div className="flex items-center gap-2">
                    <Badge className="bg-gradient-to-r from-[#a20504] to-[#c41e1c] text-white text-xs rounded-2xl px-2 py-1">
                      {industry.events}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* SEO-Rich Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}>
            <h3 className="text-[#1a0000] font-bold mb-4 text-2xl font-['Archivo']">
              Industry-Specific Event Management Excellence
            </h3>
            <div className="text-[#6b6b6b] space-y-4 leading-relaxed">
              <p>
                As one of India's leading event management companies, MIKE Events has successfully organized over 500+ events across diverse industries. Our industry-specific expertise ensures that every event we manage meets the unique regulatory, cultural, and professional standards of your sector.
              </p>
              <p>
                From healthcare conferences requiring CME accreditation to technology summits demanding state-of-the-art AV infrastructure, we understand the nuances that make each industry unique. Our team of specialized event planners brings deep domain knowledge, ensuring compliance, relevance, and impact.
              </p>
              <p>
                Whether you're organizing a pharmaceutical product launch, a government policy summit, or a corporate annual general meeting, our proven track record across industries guarantees seamless execution and measurable success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
