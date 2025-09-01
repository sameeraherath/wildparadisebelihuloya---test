import React from "react";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import { Badge } from "@/components/ui/badge";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import { galleryImages } from "../data/Gallery";

const Gallery: React.FC = () => {
  const [visibleCount, setVisibleCount] = React.useState(8);
  const showMore = () => setVisibleCount(galleryImages.length);
  const visibleImages = galleryImages.slice(0, visibleCount);
  return (
    <section
      id="gallery"
      className="py-20 bg-gradient-to-b from-background to-muted/50"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <Badge variant="secondary" className="mb-4 text-sm font-medium">
            Capture the Moments
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair">
            Memories from
            <span className="block text-river-medium">Wild Paradise</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Discover the breathtaking beauty of our campsite through stunning
            photography. From serene riverside moments to lush forest
            adventures, every corner tells a story.
          </p>
        </div>
        <LightGallery
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          elementClassNames="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          download={false}
        >
          {visibleImages.map((img) => (
            <a
              key={img.src}
              href={img.src}
              className="block overflow-hidden rounded-lg shadow-lg group"
              data-lg-size={img["data-lg-size"]}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="h-64 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
        {visibleCount < galleryImages.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={showMore}
              className="px-8 py-3 rounded-lg bg-river-medium text-white font-semibold text-lg shadow hover:bg-river-dark transition-colors"
            >
              View More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
