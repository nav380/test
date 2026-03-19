/**
 * Video Testimonials Section Component
 * Design Philosophy: Neo-Brutalism with Warmth
 * Features: Vertical video testimonials in mobile-first format
 */

import { Badge } from "@/components/ui/badge";
import { Play, Pause } from "lucide-react";
import { useState, useRef } from "react";

interface VideoTestimonial {
  id: number;
  title: string;
  clientName: string;
  company: string;
  videoUrl: string;
  thumbnailUrl: string;
}

// Placeholder video testimonials - user will replace with actual videos
const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    title: "Healthcare Conference Success",
    clientName: "Dr. Rajesh Kumar",
    company: "Indian Medical Association",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=700&fit=crop"
  },
  {
    id: 2,
    title: "Corporate Event Excellence",
    clientName: "Priya Sharma",
    company: "Tech Solutions India",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=400&h=700&fit=crop"
  },
  {
    id: 3,
    title: "Exhibition Management",
    clientName: "Amit Patel",
    company: "Leading Pharma Company",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=400&h=700&fit=crop"
  },
  {
    id: 4,
    title: "International Conference",
    clientName: "Sarah Johnson",
    company: "Global Tech Corp",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=400&h=700&fit=crop"
  },
  {
    id: 5,
    title: "Incentive Travel Program",
    clientName: "Vikram Singh",
    company: "Finance Corporation",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=700&fit=crop"
  },
  {
    id: 6,
    title: "Association Annual Meeting",
    clientName: "Meera Reddy",
    company: "National Engineering Association",
    videoUrl: "", // User will provide actual video URL
    thumbnailUrl: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=400&h=700&fit=crop"
  }
];

export default function VideoTestimonialsSection() {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  const handlePlayPause = (id: number) => {
    const video = videoRefs.current[id];
    if (!video) return;

    if (playingVideo === id) {
      video.pause();
      setPlayingVideo(null);
    } else {
      // Pause all other videos
      Object.values(videoRefs.current).forEach(v => v?.pause());
      video.play();
      setPlayingVideo(id);
    }
  };

  return (
    <section id="video-testimonials" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-orange-400 text-white border-2 border-gray-800 px-3 py-1">
            Video Testimonials
          </Badge>
          <h2 className="text-white mb-4">
            Hear From Our <span className="text-orange-500">Happy Clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Watch what our clients have to say about their experience working with MIKE Events.
          </p>
        </div>

        {/* Vertical Video Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6 max-w-7xl mx-auto">
          {videoTestimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="relative group"
            >
              {/* Video Container - Vertical Format (9:16 aspect ratio) */}
              <div className="relative aspect-[9/16] bg-gradient-to-r from-orange-500 to-orange-600 border border-gray-800 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/10">
                {testimonial.videoUrl ? (
                  <>
                    <video
                      ref={(el) => { videoRefs.current[testimonial.id] = el; }}
                      className="w-full h-full object-cover"
                      poster={testimonial.thumbnailUrl}
                      playsInline
                      onEnded={() => setPlayingVideo(null)}
                    >
                      <source src={testimonial.videoUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause Overlay */}
                    <button
                      onClick={() => handlePlayPause(testimonial.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors group"
                      aria-label={playingVideo === testimonial.id ? "Pause video" : "Play video"}
                    >
                      {playingVideo === testimonial.id ? (
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Pause className="w-8 h-8 text-white" />
                        </div>
                      ) : (
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      )}
                    </button>
                  </>
                ) : (
                  // Placeholder when no video URL is provided
                  <div className="w-full h-full relative">
                    <img
                      src={testimonial.thumbnailUrl}
                      alt={testimonial.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                      <div className="text-center p-4">
                        <div className="w-16 h-16 bg-orange-500/90 border-2 border-orange-600 flex items-center justify-center mx-auto mb-3">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-sm font-bold">Video Coming Soon</p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Client Info Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                  <h4 className="text-white font-bold text-sm mb-1 font-['Archivo']">
                    {testimonial.clientName}
                  </h4>
                  <p className="text-white/80 text-xs">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Title Below Video */}
              <div className="mt-3 text-center">
                <p className="text-white font-semibold text-sm">
                  {testimonial.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Instructions for User */}
        <div className="mt-12 max-w-3xl mx-auto">
            <div className="modern-card bg-orange-500/10 border border-orange-500/30">
            <h3 className="text-white font-bold mb-3 font-['Archivo']">
              📹 How to Add Your Video Testimonials
            </h3>
            <div className="text-gray-400 space-y-2 text-sm">
              <p>
                <strong>Step 1:</strong> Upload your 6 vertical format videos (9:16 aspect ratio, like Instagram Stories or TikTok) to a hosting service or use the file storage in Management UI.
              </p>
              <p>
                <strong>Step 2:</strong> Get the public URL for each video file.
              </p>
              <p>
                <strong>Step 3:</strong> Update the <code className="bg-gradient-to-r from-orange-500 to-orange-600/10 px-2 py-1 rounded">videoUrl</code> field in <code className="bg-gradient-to-r from-orange-500 to-orange-600/10 px-2 py-1 rounded">VideoTestimonialsSection.tsx</code> for each testimonial.
              </p>
              <p>
                <strong>Step 4:</strong> Optionally update client names, companies, and titles to match your actual testimonials.
              </p>
              <p className="text-xs mt-3 text-gray-400/70">
                <em>Note: Currently showing placeholder thumbnails. Videos will play once you add the URLs.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
