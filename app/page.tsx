import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About";
import Team from "./components/Team";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import Location from "./components/Location";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Team />
      <Gallery />
      <Testimonials />
      <Location />
      <CTA />
      <Footer />
    </main>
  );
}