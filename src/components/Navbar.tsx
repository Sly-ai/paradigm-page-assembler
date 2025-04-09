
import React from "react";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  
  // Create proper links based on whether we're on the homepage or not
  const getHref = (sectionId: string) => {
    return isHomePage ? `#${sectionId}` : `/#${sectionId}`;
  };
  
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold text-navy-900">
            <span className="text-[#0A2463]">Paradigm</span> Advisory
          </Link>
        </div>
        
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href={getHref("about")} className="text-gray-700 hover:text-[#0A2463] transition-colors">
            About
          </a>
          <a href={getHref("services")} className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Services
          </a>
          <a href={getHref("team")} className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Who We Are
          </a>
          <a href={getHref("contact")} className="text-gray-700 hover:text-[#0A2463] transition-colors">
            Contact
          </a>
        </div>
        
        <Button className="bg-[#0A2463] hover:bg-[#051a47] transition-colors">
          <Link to={getHref("contact")} className="text-white">Get in Touch</Link>
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
