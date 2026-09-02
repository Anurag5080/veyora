import Header from "./components/Header";
import Hero from "./components/Hero";
import SearchBar from "./components/SearchBar";
import Experience from "./components/Experience";
import Fleet from "./components/Fleet";
import FeaturedVehicle from "./components/FeaturedVehicle";
import Services from "./components/Services";
import WhyVeyora from "./components/WhyVeyora";
import Locations from "./components/Locations";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div>
      <Header />
      <Hero />
      <SearchBar />
      <Experience />
      <Fleet />
      <FeaturedVehicle />
      <Services />
      <WhyVeyora />
      <Locations />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  );
}