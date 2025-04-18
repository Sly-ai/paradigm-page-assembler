
import React from "react";
import { useContentStore } from "@/stores/useContentStore";
import { Link } from "react-router-dom";

const Footer = () => {
  const { footer } = useContentStore();
  const currentYear = new Date().getFullYear();
  
  // Replace {currentYear} placeholder with actual current year
  const copyrightText = footer.copyright.replace("{currentYear}", currentYear.toString());
  
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{footer.companyName}</h3>
            <p className="text-gray-400 mb-4">
              {footer.tagline}
            </p>
            <p className="text-gray-400">
              {footer.description}
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {footer.quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-400 mb-2">Email: {footer.contactInfo.email}</p>
            <p className="text-gray-400 mb-2">Phone: {footer.contactInfo.phone}</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col sm:flex-row justify-between items-center text-gray-500">
          <p>{copyrightText}</p>
          <Link to="/admin" className="text-gray-400 hover:text-white text-sm mt-2 sm:mt-0">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
