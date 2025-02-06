import About from "./Pages/About";
import Courses from "./Component/Courses";
import LogoSlider from "./Component/custom_ui/LogoSlider";
import Footer from "./Component/Footer";
import Hero from "./Pages/Hero";
import Navbar from "./Component/Navbar";
import TestimonialCarousel from "./Component/ui/Testimonial";
import Service from "./Pages/Service";
import ContactUs from "./Pages/ContactUs";


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <LogoSlider qyt="both" />
      <Service/>
      <Courses />
      <TestimonialCarousel />
      <ContactUs />
      <Footer />
    </div >
  );
};

export default App;
