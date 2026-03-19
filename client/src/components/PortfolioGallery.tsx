/**
 * Portfolio Gallery Component
 * Masonry-style photo gallery with category filters and lightbox functionality
 * Dark theme with saffron accents
 */

import { useState, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";

type Category = "All" | "Conferences" | "Exhibitions" | "Corporate" | "Associations" | "Government";

interface PortfolioItem {
  id: number;
  title: string;
  category: Category;
  imageUrl: string;
  description: string;
  client?: string;
  attendees?: string;
  year?: string;
}

export default function PortfolioGallery() {
  const [selectedCategory, setSelectedCategory] = useState<Category>("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const ITEMS_PER_PAGE = 9;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);
  useEffect(() => {
    setVisibleCount(ITEMS_PER_PAGE);
  }, [selectedCategory]);

  // Portfolio items - replace with actual event photos
  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "44th Annual function",
      category: "Conferences",
      imageUrl: "/images/events/1.png",
      description: "Inclusive growth of indian ACE industry ",
      client: "CEAMA",
      attendees: "500+",
      year: "2025"
    },
    {
      id: 2,
      title: "Kotak",
      category: "Conferences",
      imageUrl: "/images/events/4.png",
      description: " Kotak Annual Leadership Summit 2025",
      client: "Tech Industry Council",
      attendees: "700+",
      year: "2025"
    },
    {
      id: 3,
      title: "Annual Business Conference",
      category: "Conferences",
      imageUrl: "/images/events/3.png",
      description: "Annual business conference with keynote speakers and panel discussions",
      client: "ROCA",
      attendees: "300+",
      year: "2025"
    },
    {
      id: 4,
      title: "Asian Petrochemical Industry Conference",
      category: "Corporate",
      imageUrl: "/images/events/2.png",
      description: "High-profile product launch with media coverage",
      client: "APIC",
      attendees: "550+",
      year: "2023"
    },
    {
      id: 5,
      title: "Kotak Annual Meet",
      category: "Associations",
      imageUrl: "/images/events/5.png",
      description: "Annual General Meeting with networking dinner",
      client: "KOTAK",
      attendees: "400+",
      year: "2025"
    },
    {
      id: 6,
      title: "Asian Petrochemical Industry Conference",
      category: "Corporate",
      imageUrl: "/images/events/6.png",
      description: "High-profile product launch with media coverage",
      client: "APIC",
      attendees: "400+",
      year: "2023"
    },
    {
      id: 7,
      title: "Kotak CFO COLLOQUIUM",
      category: "Conferences",
      imageUrl: "/images/events/7.png",
      description: "Exclusive CFO colloquium with industry leaders and financial experts",
      client: "kotak",
      attendees: "600+",
      year: "2025"
    },
    {
      id: 8,
      title: "Sleepwell Exhibition",
      category: "Exhibitions",
      imageUrl: "/images/events/8.png",
      description: "Major exhibition showcasing latest sleep technology and products",
      client: "Sleepwell",
      attendees: "500+",
      year: "2025"
    },
    {
      id: 9,
      title: "54th BATHAK Meeting",
      category: "Associations",
      imageUrl: "/images/events/9.png",
      description: "Annual meeting of the BATHAK association with workshops and networking sessions",
      client: "DB power ltd",
      attendees: "300+",
      year: "2024"
    },
    {
      id: 10,
      title: "15th APFCB",
      category: "Conferences",
      imageUrl: "/images/events/10.png",
      description: "Asia-Pacific Federation For Clinical Biochemistry and Laboratory Medicine Congress",
      client: "APFCB",
      attendees: "800+",
      year: "2019"
    },
    {
      id: 11,
      title: "Indian investment summit and awards 2024",
      category: "Conferences",
      imageUrl: "/images/events/11.png",
      description: "High-profile investment summit with keynote speakers and award ceremony",
      client: "Trilegal",
      attendees: "700+",
      year: "2024"
    },

    {
      id: 12,
      title: "Haryana Real Estate Summit 2022 & Buyer Meet",
      category: "Government",
      imageUrl: "/images/events/12.png",
      description: "Haryana Real Estate Summit 2022 and Buyer Meet with industry leaders, developers, and investors.",
      client: "NAREDCO",
      attendees: "900+",
      year: "2022"
    },
    {
      id: 13,
      title: "Akhil Bharat Siksha Samagam 2020",
      category: "Government",
      imageUrl: "/images/events/13.png",
      description: " National education conference with workshops, keynote speakers, and student engagement activities",
      client: "HRD ministry",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 15,
      title: "Rising Star Awards 2025",
      category: "Government",
      imageUrl: "/images/events/15.jpeg",
      description: "Prestigious Rising Star Awards recognizing outstanding achievements, featuring keynote speakers, media coverage, and high-profile attendees.",
      client: "Aaj Tak",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 16,
      title: "Kotak Mutual Fund Summit 2025",
      category: "Corporate",
      imageUrl: "/images/events/16.jpeg",
      description: "Kotak Mutual Fund Summit 2025 featuring financial experts, investment strategies, and insights for investors and industry leaders.",
      client: "Kotak Mutual Fund",
      attendees: "900+",
      year: "2025"
    },

    {
      id: 19,
      title: "Marriott Exchange 2025",
      category: "Corporate",
      imageUrl: "/images/events/19.jpeg",
      description: "Marriott Exchange 2025, a corporate networking and hospitality event featuring industry leaders, business discussions, and premium guest experiences.",
      client: "Marriott",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 20,
      title: "GI Surgicon 2019",
      category: "Conferences",
      imageUrl: "/images/events/20.jpeg",
      description: "GI Surgicon 2019, a leading medical conference focused on gastrointestinal surgery, featuring expert sessions, case discussions, and hands-on workshops.",
      client: "Fortis",
      attendees: "900+",
      year: "2019"
    },
    {
      id: 21,
      title: "Ophtha Quest 2018",
      category: "Conferences",
      imageUrl: "/images/events/21.jpeg",
      description: "Ophtha Quest 2018, a specialized ophthalmology conference featuring expert sessions, surgical insights, and advancements in eye care.",
      client: "Haryana Ophthalmological Society",
      attendees: "900+",
      year: "2018"
    },
    {
      id: 22,
      title: "13th Annual Conference of Venue Association of India (VAICON 2020)",
      category: "Conferences",
      imageUrl: "/images/events/22.jpeg",
      description: "VAICON 2020, the 13th Annual Conference of the Venue Association of India, bringing together industry leaders for networking, knowledge sharing, and discussions on venue management and event infrastructure.",
      client: "Venue Association of India",
      attendees: "900+",
      year: "2020"
    },
    {
      id: 23,
      title: "LG Corporate Event 2025",
      category: "Corporate",
      imageUrl: "/images/events/23.jpeg",
      description: "LG Corporate Event 2025 featuring product showcases, business discussions, and engagement with industry partners and stakeholders.",
      client: "LG",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 24,
      title: "waspalm2025",
      category: "Government",
      imageUrl: "/images/events/24.jpeg",
      description: " National education conference with workshops, keynote speakers, and student engagement activities",
      client: "Association of Clinical Biochemists of India",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 26,
      title: "15th APFCB Conference 2019",
      category: "Conferences",
      imageUrl: "/images/events/26.jpeg",
      description: "15th APFCB Conference 2019, a prestigious international congress in clinical biochemistry and laboratory medicine, featuring global experts, research presentations, and scientific sessions.",
      client: "IFCC / APFCB",
      attendees: "900+",
      year: "2019"
    },
    {
      id: 27,
      title: "National Rubber Conference 2019",
      category: "Conferences",
      imageUrl: "/images/events/27.jpeg",
      description: "National Rubber Conference 2019 bringing together industry experts, manufacturers, and researchers to discuss innovations, trends, and advancements in the rubber industry.",
      client: "All India Rubber Industries Association",
      attendees: "900+",
      year: "2019"
    },
    {
      id: 28,
      title: "Broncocon 2019",
      category: "Conferences",
      imageUrl: "/images/events/28.jpeg",
      description: "Broncocon 2019, a specialized medical conference focused on respiratory and pulmonary medicine, featuring expert sessions, case discussions, and latest advancements in chest care.",
      client: "Medical Association",
      attendees: "900+",
      year: "2019"
    },
    {
      id: 29,
      title: "WASOG 2024",
      category: "Conferences",
      imageUrl: "/images/events/29.jpeg",
      description: "WASOG 2024, an international conference focused on interstitial lung diseases and respiratory medicine, featuring global experts, research discussions, and clinical advancements.",
      client: "WASOG",
      attendees: "900+",
      year: "2024"
    },
    {
      id: 30,
      title: "Kotak Mutual Fund & You 2025",
      category: "Corporate",
      imageUrl: "/images/events/30.jpeg",
      description: "Kotak Mutual Fund & You 2025, an investor-focused event featuring financial insights, wealth management strategies, and engagement with industry experts.",
      client: "Kotak Mutual Fund",
      attendees: "900+",
      year: "2025"
    },
    {
      id: 32,
      title: "ucon 2020",
      category: "Government",
      imageUrl: "/images/events/32.jpeg",
      description: " National education conference with workshops, keynote speakers, and student engagement activities",
      client: "HRD ministry",
      attendees: "900+",
      year: "2025"
    },



  ];

  const categories: Category[] = ["All", "Conferences", "Exhibitions", "Corporate", "Associations", "Government"];

  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const openLightbox = (item: PortfolioItem, index: number) => {
    setSelectedImage(item);
    setCurrentIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % filteredItems.length
      : (currentIndex - 1 + filteredItems.length) % filteredItems.length;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  return (
    <section className="py-20" style={{ background: "#ffffff" }}>
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="mb-4 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border-0" style={{ background: "#fef2f2", color: "#a20504" }}>
            Our Portfolio
          </Badge>
          <h2 className="text-[#1a0000] mb-4">
            Showcasing <span className="text-gradient-saffron">Excellence</span> in Every Event
          </h2>
          <p className="text-xl text-[#6b6b6b] max-w-3xl mx-auto">
            Explore our portfolio of successful events across conferences, exhibitions, corporate gatherings, and incentive travel programs.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setSelectedCategory(category)}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`
                ${selectedCategory === category
                  ? 'bg-[#a20504] text-white shadow-lg'
                  : 'bg-[#f8f8f8] text-[#6b6b6b] border-[#e8e8e8] hover:border-[#a20504]/50 hover:text-[#c41e1c]'
                }
                transition-all duration-300
              `}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Gallery Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.slice(0, visibleCount).map((item, index) => (
            <div
              key={item.id}
              className="break-inside-avoid group relative overflow-hidden rounded-xl border border-[#e8e8e8] hover:border-[#a20504]/50 transition-all duration-300 cursor-pointer bg-[#f8f8f8]"
              onClick={() => openLightbox(item, index)}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="w-full">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#a20504]/20 text-[#c41e1c] border-[#a20504]/30 text-xs">
                        {item.category}
                      </Badge>
                      <ZoomIn className="w-5 h-5 text-[#1a0000]" />
                    </div>
                    <h3 className="text-[#1a0000] font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-[#6b6b6b] text-sm">{item.description}</p>
                  </div>
                </div>
              </div>

              {/* Info Bar */}
              <div className="p-4 bg-[#f8f8f8]">
                <h4 className="text-[#1a0000] font-semibold mb-2">{item.title}</h4>
                <div className="flex items-center gap-4 text-xs text-[#6b6b6b]">
                  {item.attendees && <span>👥 {item.attendees}</span>}
                  {item.year && <span>📅 {item.year}</span>}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredItems.length === 0 && (
          <div className="text-center py-20">
            <p className="text-[#9ca3af] text-lg">No events found in this category.</p>
          </div>
        )}

        {/* Instructions for adding photos */}

      </div>

      {/* Lightbox Modal */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          {/* Close Button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] w-12 h-12 bg-[#f8f8f8]/80 hover:bg-[#a20504] text-[#1a0000] rounded-full flex items-center justify-center transition-all"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('prev');
            }}
            className="absolute left-4 z-[110] w-12 h-12 bg-[#f8f8f8]/80 hover:bg-[#a20504] text-[#1a0000] rounded-full flex items-center justify-center transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              navigateLightbox('next');
            }}
            className="absolute right-4 z-[110] w-12 h-12 bg-[#f8f8f8]/80 hover:bg-[#a20504] text-[#1a0000] rounded-full flex items-center justify-center transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Lightbox Content */}
          <div
            className="max-w-6xl w-full bg-[#f8f8f8] rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative bg-black">
                <img
                  src={selectedImage.imageUrl}
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Details */}
              <div className="p-8 flex flex-col justify-between">
                <div>
                  <Badge className="mb-4 bg-[#a20504]/20 text-[#c41e1c] border-[#a20504]/30">
                    {selectedImage.category}
                  </Badge>
                  <h2 className="text-[#1a0000] text-2xl font-bold mb-4">{selectedImage.title}</h2>
                  <p className="text-[#6b6b6b] text-lg mb-6">{selectedImage.description}</p>

                  <div className="space-y-3">
                    {selectedImage.client && (
                      <div className="flex items-start gap-3">
                        <span className="text-[#a20504] font-semibold min-w-[100px]">Client:</span>
                        <span className="text-[#6b6b6b]">{selectedImage.client}</span>
                      </div>
                    )}
                    {selectedImage.attendees && (
                      <div className="flex items-start gap-3">
                        <span className="text-[#a20504] font-semibold min-w-[100px]">Attendees:</span>
                        <span className="text-[#6b6b6b]">{selectedImage.attendees}</span>
                      </div>
                    )}
                    {selectedImage.year && (
                      <div className="flex items-start gap-3">
                        <span className="text-[#a20504] font-semibold min-w-[100px]">Year:</span>
                        <span className="text-[#6b6b6b]">{selectedImage.year}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-[#e8e8e8]">
                  <p className="text-[#9ca3af] text-sm">
                    Image {currentIndex + 1} of {filteredItems.length}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* Show More Button */}
      {visibleCount < filteredItems.length && (
        <div className="text-center mt-12">
          <Button
            onClick={() => setVisibleCount(prev => prev + ITEMS_PER_PAGE)}
            className="bg-[#a20504] hover:bg-[#7a0303] text-white px-8 py-3 rounded-full shadow-lg transition-all"
          >
            Show More
          </Button>
        </div>
      )}
    </section>
  );
}
