/**
 * Client Logos Section Component
 * Dark theme with saffron accents
 */

import { Badge } from "@/components/ui/badge";

export default function ClientLogos() {
  // Placeholder logo data - replace with actual client logos
  const clients = [

    { name: "AIRTEL", logo: "/images/sponsors/1.png" },
    { name: "AUDI", logo: "/images/sponsors/2.png" },
    { name: "CENTER OF SIGHT", logo: "/images/sponsors/3.png" },
    { name: "MINDRAY", logo: "/images/sponsors/4.png" },
    { name: "EXL", logo: "/images/sponsors/5.png" },
    { name: "MG", logo: "/images/sponsors/6.png" },
    { name: "FOREVERMARK", logo: "/images/sponsors/7.png" },
    { name: "HOME CREDIT", logo: "/images/sponsors/8.png" },
    { name: "HP", logo: "/images/sponsors/9.png" },
    { name: "ICICI BANK", logo: "/images/sponsors/10.png" },
    { name: "IEX", logo: "/images/sponsors/11.png" },
    { name: "INTAS", logo: "/images/sponsors/12.png" },
    { name: "IUSSTF", logo: "/images/sponsors/13.png" },
    { name: "JHONSON&JHONSON", logo: "/images/sponsors/14.png" },
    { name: "KOTAK", logo: "/images/sponsors/15.png" },
    { name: "LG", logo: "/images/sponsors/16.png" },
    { name: "MG", logo: "/images/sponsors/17.png" },
    { name: "MINDREY", logo: "/images/sponsors/18.png" },
    { name: "PORCHE", logo: "/images/sponsors/19.png" },
    { name: "QUALCOMM", logo: "/images/sponsors/20.png" },
    { name: "SENNHEISER", logo: "/images/sponsors/21.png" },
    { name: "SLEEPWELL", logo: "/images/sponsors/22.png" },
    { name: "SUN PHARMA", logo: "/images/sponsors/23.png" },
    { name: "VIEWSONIC", logo: "/images/sponsors/24.png" },
    { name: "WOUNDER", logo: "/images/sponsors/25.png" },
    { name: "CEAMA", logo: "/images/sponsors/26.png" },
    { name: "TRILEGAL", logo: "/images/sponsors/27.png" },
    { name: "Broadcast", logo: "/images/sponsors/28.png" },
    { name: "Tifr", logo: "/images/sponsors/29.png" },
    { name: "Nyk group", logo: "/images/sponsors/30.png" },
    

  ];


  return (
    <section className="py-20 bg-white border-y border-[#e8e8e8]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-gradient-to-r from-[#a20504] to-[#c41e1c] text-white px-6 py-4 border-0 text-xl">
            Trusted By Industry Leaders
          </Badge>
          <h2 className="text-[#1a0000] mb-4">
            Our <span className="text-gradient-saffron">Prestigious</span> Clients
          </h2>
          <p className="text-[#6b6b6b] text-lg max-w-2xl mx-auto">
            Partnering with Fortune 500 companies, government bodies, and leading associations to deliver exceptional events.
          </p>
        </div>

        {/* Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-10 gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="group relative bg-[#f8f8f8] rounded-lg p-6 border border-[#e8e8e8] hover:border-[#a20504]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[rgba(162,5,4,0.1)] flex items-center justify-center rounded-2xl"
            >
              {/* Placeholder for client logo */}
              <div className="relative w-full h-16 flex items-center justify-center">
                <div className="absolute inset-0  rounded  transition-opacity" />
                <div className="relative z-10 text-center">
                  <div className=" w-16 h-16 mx-auto mb-2  rounded-lg flex items-center justify-center">
                    <span className="text-[#1a0000] font-bold text-lg"><img src={client.logo} alt={client.name} className="w-full h-full object-contain scale-125" /></span>
                  </div>

                </div>
              </div>

              {/* Tooltip on hover */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-[#e8e8e8] text-[#1a0000] text-xs px-3 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                {client.name}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 rotate-45 w-2 h-2 bg-[#e8e8e8]" />
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for adding logos */}

      </div>
    </section>
  );
}
