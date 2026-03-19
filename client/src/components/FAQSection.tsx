/**
 * FAQ Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * SEO: Structured data for featured snippets
 */

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";

const faqs = [
  {
    question: "What services does MIKE Events provide?",
    answer: "MIKE Events provides comprehensive event management services including Association Management, Conference Management, Meeting Management, Exhibition Management, Incentive Travel Management, and Consulting Services. We handle everything from initial conception through budgeting, design, marketing, execution, and post-event analysis."
  },
  {
    question: "How much does event management cost in India?",
    answer: "Event management costs vary based on event size, complexity, duration, and specific requirements. We offer customized packages tailored to your budget and needs. Contact us for a free consultation and detailed quote based on your specific event requirements."
  },
  {
    question: "What is MICE in event management?",
    answer: "MICE stands for Meetings, Incentives, Conferences, and Events. It's a specialized sector of the event industry focused on organizing business events, corporate meetings, incentive travel programs, professional conferences, and exhibitions. MIKE Events specializes in all aspects of MICE management."
  },
  {
    question: "How far in advance should I book event management services?",
    answer: "We recommend booking 6-12 months in advance for large conferences and exhibitions, 3-6 months for corporate meetings and mid-size events, and at least 2-3 months for smaller events. However, we can accommodate shorter timelines depending on availability and event complexity."
  },
  {
    question: "Do you handle international conferences?",
    answer: "Yes, MIKE Events has extensive experience managing international conferences across India. We handle all aspects including delegate accommodation, international speaker coordination, visa assistance, transportation, and cultural considerations to ensure seamless execution."
  },
  {
    question: "What makes MIKE Events different from other event management companies?",
    answer: "MIKE Events stands out through our end-to-end solutions, technology-driven approach, transparent communication, and 24/7 dedicated support. With 5+ years of excellence and 500+ successful events, we combine expertise with passion to create truly magical experiences."
  },
  {
    question: "Can you manage virtual or hybrid events?",
    answer: "Absolutely! We specialize in virtual and hybrid event management, utilizing cutting-edge technology platforms to create engaging online experiences. We handle technical setup, virtual registration, live streaming, interactive sessions, and post-event analytics."
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Healthcare & Pharma, Technology, Corporate, Education, Government, Finance, and more. Our versatile team adapts to industry-specific requirements while maintaining the highest standards of event excellence."
  }
];

export default function FAQSection() {
  useEffect(() => {
    // Add JSON-LD structured data for SEO
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20" style={{ background: "#f8f8f8" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-4" style={{ background: '#fef2f2', color: '#a20504' }}>Got Questions?</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-3" style={{ color: '#1a0000' }}>
            Frequently Asked Questions
          </h2>
          <div className="section-divider" />
          <p className="mt-5 text-lg text-[#6b6b6b] max-w-2xl mx-auto">
            Find answers to common questions about our event management services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-[#e8e8e8] bg-white rounded-xl px-6 py-2 transition-all duration-300 hover:border-[#a20504]"
              >
                <AccordionTrigger className="text-left text-[#1a0000] font-semibold hover:text-[#a20504] hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[#6b6b6b] leading-relaxed pt-2">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-[#6b6b6b] mb-4">Still have questions?</p>
          <a 
            href="#contact" 
            className="text-[#a20504] font-bold hover:text-[#c41e1c] transition-colors underline"
          >
            Contact us for personalized assistance
          </a>
        </div>
      </div>
    </section>
  );
}
