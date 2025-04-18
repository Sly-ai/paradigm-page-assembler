import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import MissionEditor from "../components/cms/MissionEditor";
import ServicesEditor from "../components/cms/ServicesEditor";
import TeamEditor from "../components/cms/TeamEditor";
import FooterEditor from "../components/cms/FooterEditor";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import LearnMoreEditor from "../components/cms/LearnMoreEditor";

// Simple authentication state (in a real app, this would use a proper auth system)
const CMS = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("cmsAuthenticated") === "true";
  });
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simple password check (in a real app, use proper authentication)
    if (password === "paradigm2024") {
      setIsLoggedIn(true);
      localStorage.setItem("cmsAuthenticated", "true");
      toast.success("Logged in successfully");
    } else {
      toast.error("Invalid password");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("cmsAuthenticated");
    toast.info("Logged out");
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg shadow-md">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900">CMS Login</h1>
            <p className="mt-2 text-gray-600">Enter password to access the CMS</p>
          </div>
          <div className="mt-8 space-y-6">
            <div>
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <Button 
                className="w-full bg-[#0A2463]" 
                onClick={handleLogin}
              >
                Sign in
              </Button>
            </div>
            <div className="text-center">
              <Button 
                variant="outline" 
                onClick={() => navigate("/")}
              >
                Return to Website
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#0A2463]">Content Management System</h1>
          <div className="flex gap-4">
            <Button 
              variant="outline" 
              onClick={() => navigate("/")}
            >
              View Website
            </Button>
            <Button 
              variant="destructive" 
              onClick={handleLogout}
            >
              Logout
            </Button>
          </div>
        </div>
        
        <Tabs defaultValue="mission" className="w-full">
          <TabsList className="grid grid-cols-5 mb-8">
            <TabsTrigger value="mission">Mission</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="team">Team</TabsTrigger>
            <TabsTrigger value="learn-more">Learn More</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>
          
          <TabsContent value="mission" className="bg-white p-6 rounded-lg shadow-sm">
            <MissionEditor />
          </TabsContent>
          
          <TabsContent value="services" className="bg-white p-6 rounded-lg shadow-sm">
            <ServicesEditor />
          </TabsContent>
          
          <TabsContent value="team" className="bg-white p-6 rounded-lg shadow-sm">
            <TeamEditor />
          </TabsContent>
          
          <TabsContent value="learn-more" className="bg-white p-6 rounded-lg shadow-sm">
            <LearnMoreEditor />
          </TabsContent>
          
          <TabsContent value="footer" className="bg-white p-6 rounded-lg shadow-sm">
            <FooterEditor />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default CMS;
