import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />
   
      <section id="home" className="h-screen flex justify-center items-center bg-gray-100">
        <Hero/>
      </section>
      <section id="about" className="h-screen flex justify-center items-center bg-blue-100">
        <h1 className="text-4xl font-bold">About</h1>
      </section>
      <section id="services" className="h-screen flex justify-center items-center bg-green-100">
        <h1 className="text-4xl font-bold">Services</h1>
      </section>
      <section id="courses" className="h-screen flex justify-center items-center bg-yellow-100">
        <h1 className="text-4xl font-bold">Courses</h1>
      </section>
      <section id="testimonial" className="h-screen flex justify-center items-center bg-red-100">
        <h1 className="text-4xl font-bold">Testimonial</h1>
      </section>
      <section id="contact" className="h-screen flex justify-center items-center bg-purple-100">
        <h1 className="text-4xl font-bold">Contact</h1>
      </section>
    </div>
  );
};

export default App;
