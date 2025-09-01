import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Quote,
  Star,
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Testimonials = () => {
  const testimonials = [
   
    {
      id: 1,
      name: "The Johnson Family",
      location: "Melbourne, Australia",
      date: "August 2023",
      rating: 5,
      image: "/placeholder.svg",
      story:
        "Traveling with two kids (8 & 12), we were amazed by how engaging the wildlife spotting was! The local village walk was educational and the kids loved learning about Sri Lankan culture. The staff made sure everyone felt safe and included.",
      highlight: "Kid-friendly adventure with educational value",
      category: "Family Adventure",
    },
    {
      id: 2,
      name: "Priya Patel",
      location: "London, UK",
      date: "November 2023",
      rating: 5,
      image: "/placeholder.svg",
      story:
        "As a solo female traveler, I felt completely safe and welcomed. The bird watching sessions were incredible - spotted over 15 different species! The peaceful mornings by the reservoir helped me reconnect with nature and myself.",
      highlight: "Safe and enriching solo travel experience",
      category: "Solo Journey",
    },
    {
      id: 3,
      name: "Adventure Seekers Group",
      location: "Kandy, Sri Lanka",
      date: "January 2024",
      rating: 5,
      image: "/placeholder.svg",
      story:
        "Six friends, one unforgettable weekend! The forest trails challenged us perfectly, and the evening campfires brought us closer together. The eco-friendly approach and community involvement made us feel good about our choice.",
      highlight: "Perfect for group bonding and eco-conscious travel",
      category: "Group Adventure",
    },
  ];

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-b from-muted/30 to-background"
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          className="max-w-4xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              Guest Stories
            </Badge>
          </motion.div>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-foreground font-playfair"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Stories from Our
            <span className="block text-forest-medium">Paradise Guests</span>
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Real experiences from adventurers who discovered the magic of Wild
            Paradise. Their stories inspire us to create even more unforgettable
            moments.
          </motion.p>
        </motion.div>

        {/* ...existing code... */}

        {/* Testimonials Carousel */}
        <TestimonialsCarousel testimonials={testimonials} />

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="border-0 shadow-warm bg-gradient-sunset max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold text-forest-dark mb-3 font-playfair">
                Ready to Create Your Own Story?
              </h3>
              <p className="text-forest-dark/80 mb-6">
                Join hundreds of adventurers who've discovered the magic of Wild
                Paradise. Your unforgettable story starts with a single booking.
              </p>
              <motion.button
                className="bg-forest-dark text-white px-8 py-3 rounded-lg font-semibold hover:bg-forest-medium transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const bookingSection = document.getElementById("booking");
                  if (bookingSection) {
                    bookingSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Start Your Adventure
              </motion.button>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

// Testimonials Carousel Component
type Testimonial = {
  id: number;
  name: string;
  location: string;
  date: string;
  rating: number;
  image: string;
  story: string;
  highlight: string;
  category: string;
};

const TestimonialsCarousel = ({ testimonials }: { testimonials: Testimonial[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isHovered) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 4000); // Change slide every 4 seconds
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="relative">
      {/* Main Carousel Container */}
      <div
        className="overflow-hidden rounded-2xl"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="w-full flex-shrink-0">
              <div className="px-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <Card className="border-0 shadow-forest hover:shadow-river transition-all duration-300 h-full max-w-4xl mx-auto">
                    <CardContent className="p-8">
                      {/* Quote Icon */}
                      <div className="flex justify-between items-start mb-6">
                        <Quote className="w-12 h-12 text-forest-medium opacity-60" />
                        <Badge
                          variant="secondary"
                          className="text-sm bg-gradient-nature text-white border-0 px-3 py-1"
                        >
                          {testimonial.category}
                        </Badge>
                      </div>

                      {/* Story */}
                      <blockquote className="text-lg text-muted-foreground leading-relaxed mb-6 italic text-center">
                        "{testimonial.story}"
                      </blockquote>

                      {/* Highlight */}
                      <div className="bg-gradient-to-r from-forest-light/20 to-river-light/20 rounded-lg p-4 mb-6 text-center">
                        <p className="text-base font-medium text-forest-dark">
                          💫 {testimonial.highlight}
                        </p>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center justify-center gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-5 h-5 fill-sunset-golden text-sunset-golden"
                          />
                        ))}
                      </div>

                      {/* Guest Info */}
                      <div className="text-center">
                        <h4 className="text-xl font-semibold text-foreground mb-2">
                          {testimonial.name}
                        </h4>
                        <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {testimonial.location}
                          </div>
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {testimonial.date}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="w-5 h-5 text-forest-dark" />
      </button>

      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg rounded-full p-3 transition-all duration-300 hover:scale-110 z-10"
        aria-label="Next testimonial"
      >
        <ChevronRight className="w-5 h-5 text-forest-dark" />
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "bg-forest-medium scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-1 mt-4 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-nature rounded-full"
          initial={{ width: "0%" }}
          animate={{
            width: isHovered
              ? `${((currentIndex + 1) / testimonials.length) * 100}%`
              : "100%",
          }}
          transition={{
            duration: isHovered ? 0.3 : 4,
            ease: "linear",
            repeat: isHovered ? 0 : Infinity,
            repeatType: "loop",
          }}
        />
      </div>
    </div>
  );
};

export default Testimonials;
