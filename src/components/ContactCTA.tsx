
import React from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone } from "lucide-react";
import ScheduleCallModal from "./ScheduleCallModal";

const ContactCTA = () => {
  return (
    <section className="py-20 bg-[#0A2463] text-white" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg md:text-xl mb-10 opacity-90">
            Let's discuss how our psychology-driven approach can help you make better 
            strategic decisions and drive sustainable growth.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-10">
            <Button className="bg-white text-[#0A2463] hover:bg-gray-100 w-full md:w-auto">
              <Mail className="mr-2 h-4 w-4" /> Email Us
            </Button>
            
            <ScheduleCallModal>
              <Button className="bg-[#3E92CC] hover:bg-[#2d7eb3] border-none w-full md:w-auto">
                <Phone className="mr-2 h-4 w-4" /> Schedule a Call
              </Button>
            </ScheduleCallModal>
          </div>
          
          <div className="text-sm opacity-80">
            <p>We typically respond within 24 hours</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
