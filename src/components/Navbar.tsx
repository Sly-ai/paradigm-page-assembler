
import React from "react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <h1 className="text-xl font-bold text-navy-900">
            <span className="text-[#0A2463]">Paradigm</span> Advisory
          </h1>
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="text-gray-700 hover:text-[#0A2463] transition-colors">
            About
          </a>
          <a href="#services" className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Services
          </a>
          <a href="#team" className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Who We Are
          </a>
          <a href="#contact" className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Contact
          </a>
        </div>
        
        <Button className="bg-[#0A2463] hover:bg-[#051a47] transition-colors">
          Get in Touch
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
