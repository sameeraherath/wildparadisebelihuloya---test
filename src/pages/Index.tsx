import Hero from "@/components/Hero";
import Showcase from "@/components/Showcase";
import About from "@/components/About";
import Features from "@/components/Features";
import Activities from "@/components/Activities";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Booking from "@/components/Booking";
import DayFunctionBooking from "@/components/DayFunctionBooking";
import Footer from "@/components/Footer";
import FAQ from "@/components/FAQ";
import LocationDirections from "@/components/LocationDirections";
import EquipmentFacilities from "@/components/EquipmentFacilities";
import FoodDining from "@/components/FoodDining";

import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Wild Paradise Belihuloya Camping Site</title>
        <meta
          name="description"
          content="Experience nature at Wild Paradise Belihuloya Camping Site. Enjoy lakeside camping, adventure activities, and Samanalawewa kayaking as a featured extra. Book your unforgettable outdoor getaway in Sri Lanka!"
        />
        <meta
          name="keywords"
          content="camping, Belihuloya, Wild Paradise, Sri Lanka, outdoor adventure, lakeside camping, nature, Samanalawewa kayaking, adventure activities, Kinchigune Adventure"
        />
        <meta
          property="og:title"
          content="Wild Paradise Belihuloya Camping Site"
        />
        <meta
          property="og:description"
          content="Experience nature at Wild Paradise Belihuloya Camping Site. Enjoy lakeside camping, adventure activities, and Samanalawewa kayaking as a featured extra."
        />
        <meta
          property="og:image"
          content="http://www.wildparadisebelihuloya.com/images/og-image.png"
        />
        <meta
          property="og:url"
          content="http://www.wildparadisebelihuloya.com"
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Wild Paradise Belihuloya Camping Site"
        />
        <meta
          name="twitter:description"
          content="Experience nature at Wild Paradise Belihuloya Camping Site. Enjoy lakeside camping, adventure activities, and Samanalawewa kayaking as a featured extra."
        />
        <meta
          name="twitter:image"
          content="http://www.wildparadisebelihuloya.com/images/og-image.png"
        />
      </Helmet>
      <Hero />
      <Showcase />

      <Features />

      <Booking />
      <DayFunctionBooking />
      <Activities />
      <Gallery />
      <FoodDining />
      <EquipmentFacilities />
      <LocationDirections />
      <Testimonials />
      <About />
      <FAQ />

      <Footer />
    </div>
  );
};

export default Index;
