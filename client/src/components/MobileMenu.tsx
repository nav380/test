"use client";

import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Mail, MessageCircle } from "lucide-react";
import { useState, useEffect } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // 🔥 SCROLL → THEN OPEN MENU
  const toggleMenu = () => {
    if (!isOpen) {
      if (window.scrollY > 0) {
        const onScroll = () => {
          if (window.scrollY === 0) {
            setIsOpen(true);
            window.removeEventListener("scroll", onScroll);
          }
        };

        window.addEventListener("scroll", onScroll);

        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else {
        setIsOpen(true);
      }
    } else {
      setIsOpen(false);
    }
  };

  // ✅ LOCK BODY SCROLL
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  const menuItems = [
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Why Us", href: "#why-us" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* 🔥 BUTTON */}
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 border-2 border-[#e8e8e8] bg-[#a20504] flex items-center justify-center z-[100]"
        aria-label="Toggle menu"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#1a0000]" />
        ) : (
          <Menu className="w-6 h-6 text-[#1a0000]" />
        )}
      </button>

      {/* 🔥 MENU */}
      {isOpen && (
        <div
          className="fixed inset-0 z-[9999] md:hidden overflow-y-auto transition-opacity duration-300"
          style={{ backgroundColor: "#f8f8f8" }}
        >
          <div className="container mx-auto px-4 py-4 min-h-screen">
            
            {/* Header */}
            <div className="flex items-center justify-between mb-12">
              <div className="flex items-center space-x-2">
                <div className="w-12 h-12 bg-gradient-to-r from-[#a20504] to-[#c41e1c] border border-[#e8e8e8] flex items-center justify-center">
                  <span className="text-[#1a0000] font-bold text-xl">M</span>
                </div>
                <div>
                  <h1 className="text-xl font-bold text-[#1a0000] leading-none">
                    MIKE
                  </h1>
                  <p className="text-xs text-[#6b6b6b]">Events India</p>
                </div>
              </div>

              <button
                onClick={toggleMenu}
                className="w-10 h-10 border-2 border-[#e8e8e8] bg-[#a20504] flex items-center justify-center"
              >
                <X className="w-6 h-6 text-[#1a0000]" />
              </button>
            </div>

            {/* Nav */}
            <nav className="space-y-4 mb-12">
              {menuItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={handleLinkClick}
                  className="block text-2xl font-bold text-[#1a0000] hover:text-[#a20504] py-3 border-b-2 border-[#e8e8e8]/20"
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* CTA */}
            <Button
              className="w-full bg-[#a20504] hover:bg-[#c41e1c] text-[#1a0000] border border-[#e8e8e8] mb-8"
              size="lg"
              onClick={() => {
                handleLinkClick();
                setTimeout(() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              }}
            >
              Get Free Consultation
            </Button>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-[#6b6b6b] uppercase mb-4">
                Quick Contact
              </h3>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 p-4 bg-[#f8f8f8] border-2 border-[#e8e8e8]"
              >
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-xs text-[#6b6b6b]">Call Us</div>
                  <div className="font-bold">+91 98765 43210</div>
                </div>
              </a>

              <a
                href="mailto:info@mikevents.in"
                className="flex items-center gap-3 p-4 bg-[#f8f8f8] border-2 border-[#e8e8e8]"
              >
                <Mail className="w-5 h-5" />
                <div>
                  <div className="text-xs text-[#6b6b6b]">Email Us</div>
                  <div className="font-bold">info@mikevents.in</div>
                </div>
              </a>

              <a
                href="https://wa.me/919876543210"
                className="flex items-center gap-3 p-4 bg-[#f8f8f8] border-2 border-[#e8e8e8]"
              >
                <MessageCircle className="w-5 h-5" />
                <div>
                  <div className="text-xs text-[#6b6b6b]">WhatsApp</div>
                  <div className="font-bold">Chat with us</div>
                </div>
              </a>
            </div>

          </div>
        </div>
      )}
    </>
  );
}