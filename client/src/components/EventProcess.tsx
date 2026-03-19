/**
 * Event Planning Process Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Detailed process explanation for "how to plan event" keywords
 */

import { Badge } from "@/components/ui/badge";
import { 
  Lightbulb, 
  FileText, 
  Palette, 
  Megaphone, 
  Calendar,
  CheckCircle2,
  BarChart3,
  ArrowRight
} from "lucide-react";

const processSteps = [
  {
    number: "01",
    title: "Discovery & Consultation",
    icon: Lightbulb,
    description: "We begin with an in-depth consultation to understand your objectives, target audience, budget, and vision. Our team conducts thorough research to align every detail with your goals.",
    deliverables: ["Needs assessment", "Goal definition", "Budget planning", "Timeline creation"]
  },
  {
    number: "02",
    title: "Strategic Planning",
    icon: FileText,
    description: "Our experts develop a comprehensive event strategy covering venue selection, logistics, speaker coordination, and risk management. Every detail is meticulously planned.",
    deliverables: ["Event blueprint", "Vendor selection", "Risk assessment", "Contingency plans"]
  },
  {
    number: "03",
    title: "Creative Design",
    icon: Palette,
    description: "We craft the visual identity and experiential design of your event, from branding and collateral to stage design and attendee journey mapping.",
    deliverables: ["Brand guidelines", "Stage design", "Collateral design", "Experience mapping"]
  },
  {
    number: "04",
    title: "Marketing & Promotion",
    icon: Megaphone,
    description: "Our marketing team creates targeted campaigns to maximize attendance and engagement, utilizing digital marketing, social media, and traditional channels.",
    deliverables: ["Marketing strategy", "Social media campaigns", "Email marketing", "Registration management"]
  },
  {
    number: "05",
    title: "Flawless Execution",
    icon: Calendar,
    description: "On event day, our experienced team manages every aspect with precision, ensuring smooth operations, attendee satisfaction, and real-time problem solving.",
    deliverables: ["On-site management", "Vendor coordination", "Technical support", "Guest services"]
  },
  {
    number: "06",
    title: "Quality Assurance",
    icon: CheckCircle2,
    description: "Throughout the process, we maintain rigorous quality standards with regular checkpoints, rehearsals, and backup plans to ensure nothing is left to chance.",
    deliverables: ["Quality checks", "Rehearsals", "Testing protocols", "Backup systems"]
  },
  {
    number: "07",
    title: "Post-Event Analysis",
    icon: BarChart3,
    description: "After your event, we provide comprehensive analytics and insights, measuring success against objectives and gathering feedback for continuous improvement.",
    deliverables: ["Performance metrics", "Attendee feedback", "ROI analysis", "Improvement recommendations"]
  }
];

export default function EventProcess() {
  return (
    <section className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-[#fef2f2] text-[#1a0000] border-2 border-[#e8e8e8] px-3 py-1">
            Our Process
          </Badge>
          <h2 className="text-[#1a0000] mb-4">
            7-Step Event Planning <span className="text-[#a20504]">Excellence</span>
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
            Our proven methodology ensures every event is executed flawlessly, from initial concept to post-event analysis.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-5xl mx-auto space-y-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={index}
                className={`flex flex-col md:flex-row gap-6 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 flex md:flex-col items-center gap-4 md:w-32">
                  <div className="w-20 h-20 bg-[#a20504] border border-[#e8e8e8] flex items-center justify-center">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-6xl font-bold text-[#1a0000]/20 font-['Archivo']">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}>
                    <h3 className="text-[#1a0000] font-bold mb-3 text-xl font-['Archivo']">
                      {step.title}
                    </h3>
                    <p className="text-[#6b6b6b] mb-4 leading-relaxed">
                      {step.description}
                    </p>
                    
                    {/* Deliverables */}
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <Badge
                          key={idx}
                          className="bg-[#f8f8f8] text-[#1a0000] border-2 border-[#e8e8e8] hover:bg-[#fef2f2] transition-colors"
                        >
                          <CheckCircle2 className="w-3 h-3 mr-1" />
                          {deliverable}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow Connector (hidden on mobile) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:flex items-center justify-center w-12">
                    <ArrowRight className="w-8 h-8 text-[#a20504]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* SEO Content Block */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="rounded-xl p-6 bg-white" style={{ border: '1px solid #e8e8e8' }}>
            <h3 className="text-[#1a0000] font-bold mb-4 text-2xl font-['Archivo']">
              Professional Event Planning Process in India
            </h3>
            <div className="text-[#6b6b6b] space-y-4 leading-relaxed">
              <p>
                Planning a successful event requires meticulous attention to detail, strategic thinking, and flawless execution. At MIKE Events, our 7-step event planning process has been refined over 5+ years and 500+ successful events across India.
              </p>
              <p>
                Whether you're organizing a small corporate meeting or a large-scale international conference, our systematic approach ensures nothing is overlooked. From initial discovery and strategic planning to creative design, marketing, execution, and post-event analysis, we manage every aspect with precision.
              </p>
              <p>
                Our event management methodology incorporates industry best practices, cutting-edge technology, and continuous quality assurance. We believe in transparent communication, proactive problem-solving, and delivering measurable results that exceed expectations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
