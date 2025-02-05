import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav className="bg-white  p-4 fixed w-full z-50 flex justify-between items-center">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-2xl font-bold text-green-600">YourLogo</div>
        
        <div className="flex space-x-6">
          {"Home About Services Courses Testimonial Contact".split(" ").map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())} 
              className="text-gray-700 hover:text-green-600"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
