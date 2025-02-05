import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import { AnimatedTestimonials } from "./Component/ui/animated-testimonials";
import { testimonials } from "./data/testimonial";


const App = () => {
  return (
    <div>
      <Navbar />

      <section id="home" className="h-screen flex justify-center items-center ">
        <Hero />
      </section>
      <section id="about" className="h-screen flex justify-center items-center ">
      </section>
      <section id="services" className="h-screen flex justify-center items-center">
        <h1 className="text-4xl font-bold">Services</h1>
      </section>
      <section id="courses" className="h-screen flex justify-center items-center  ">
        <h1 className="text-4xl font-bold">Courses</h1>
      </section>
      <section id="testimonial" className="bg-red-300 h-auto ">
        <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
      </section>

    </div>
  );
};

export default App;
