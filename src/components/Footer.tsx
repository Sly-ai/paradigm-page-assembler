
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface FooterData {
  companyName: string;
  tagline: string;
  description: string;
  email: string;
  phone: string;
}

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [footerData, setFooterData] = useState<FooterData>({
    companyName: "Paradigm Advisory",
    tagline: "Where Science Meets Strategy",
    description: "Integrating social psychology and behavioral economics into strategic business decision-making.",
    email: "info@paradigmadvisory.com",
    phone: "+1 (555) 123-4567"
  });

  useEffect(() => {
    const savedFooter = localStorage.getItem("footer-data");
    if (savedFooter) {
      setFooterData(JSON.parse(savedFooter));
    }
  }, []);
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footerData.companyName}</h3>
            <p className="text-gray-400 mb-4">
              {footerData.tagline}
            </p>
            <p className="text-gray-400">
              {footerData.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
              <li><Link to="/cms" className="text-gray-400 hover:text-white transition-colors">CMS Login</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: {footerData.email}</p>
            <p className="text-gray-400 mb-2">Phone: {footerData.phone}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} {footerData.companyName}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
