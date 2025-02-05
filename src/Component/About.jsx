import React from "react";

const About = () => {
  return (
    <section className="py-16">
      {/* About Heading with Background Image */}
      <div
        className="relative text-center text-white py-10  bg-cover bg-center"
    
      >
        <h2 className="text-4xl md:text-3xl font-bold backdrop-blur-sm bg-black bg-opacity-50 inline-block px-6 py-9 rounded-md decoration-wavy underline"
         style={{ backgroundImage: "url('/dotted_light.png')" }}>
          About Us
        </h2>
      </div>

      {/* About Content */}
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-8 mt-12">
        {/* Box 1 */}
        <div className="border-l-1 border-r-1 border-white p-6 text-center  shadow-md">
          <img src="/img19.jpg" alt="Mission" className="w-full h-auto object-cover rounded-md mb-4" />
          <h3 className="text-xl font-semibold text-white">Our Mission</h3>
          <p className="text-white text-[32px] mt-2">We guide individuals to make informed decisions that shape their future.</p>
        </div>

        {/* Box 2 */}
        <div className="border-l-1 border-r-1 border-white p-6 text-center  shadow-md">
          <img src="/img20.jpg" alt="Vision" className="w-full h-auto object-cover rounded-md mb-4" />
          <h3 className="text-xl text-white font-semibold">Our Vision</h3>
          <p className="text-white text-[32px] ">To empower people with counseling that truly makes a difference.</p>
        </div>

        {/* Box 3 */}
        <div className="border-l-1 border-r-1 border-white p-6 text-center  shadow-md">
          <img src="/img21.jpg" alt="Values" className="w-full h-auto object-cover rounded-md mb-4" />
          <h3 className="text-xl text-white font-semibold">Our Values</h3>
          <p className="text-white text-[32px] mt-2">We believe every choice matters, and we help you make the right ones.</p>
        </div>
      </div>
    </section>
  );
};

export default About;
