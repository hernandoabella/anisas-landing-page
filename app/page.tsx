import Header from "./components/Header";
import AboutUs from "./components/AboutUs";
import Team from "./components/Team";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import Hero from "./components/Hero";

import Tab from "./components/Tab";



export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <AboutUs />
      <Tab />
      <Team />
      <Services />
      {/* <Carousel /> */}
      
      <CTA />
      <Testimonials />
      <FAQ />
      <Contact/>
      <Footer />
    </div>
  );
}
