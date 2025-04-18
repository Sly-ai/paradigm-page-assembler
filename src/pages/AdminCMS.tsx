
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/hooks/use-toast";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MissionEditor from "@/components/cms/MissionEditor";
import ServicesEditor from "@/components/cms/ServicesEditor";
import TeamEditor from "@/components/cms/TeamEditor";
import FooterEditor from "@/components/cms/FooterEditor";
import AdminLogin from "@/components/cms/AdminLogin";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const AdminCMS = () => {
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [activeTab, setActiveTab] = useState("mission");

  // For a real application, you would implement proper authentication
  // This is a simplified version for demonstration purposes
  const handleLogin = (success: boolean) => {
    if (success) {
      setIsAuthenticated(true);
      toast({
        title: "Login successful",
        description: "Welcome to the CMS",
        variant: "default",
      });
    } else {
      toast({
        title: "Login failed",
        description: "Invalid credentials",
        variant: "destructive",
      });
    }
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <Link to="/">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-2xl font-bold text-[#0A2463]">Content Management System</h1>
          </div>
          <Button 
            onClick={() => setIsAuthenticated(false)}
            variant="outline" 
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            Logout
          </Button>
        </div>
        
        <Separator className="mb-6" />
        
        <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-4 mb-8">
            <TabsTrigger value="mission">Our Mission</TabsTrigger>
            <TabsTrigger value="services">Services</TabsTrigger>
            <TabsTrigger value="team">Team Members</TabsTrigger>
            <TabsTrigger value="footer">Footer</TabsTrigger>
          </TabsList>

          <TabsContent value="mission" className="space-y-4">
            <MissionEditor />
          </TabsContent>

          <TabsContent value="services" className="space-y-4">
            <ServicesEditor />
          </TabsContent>

          <TabsContent value="team" className="space-y-4">
            <TeamEditor />
          </TabsContent>

          <TabsContent value="footer" className="space-y-4">
            <FooterEditor />
          </TabsContent>
        </Tabs>
      </main>
      <Footer />
    </div>
  );
};

export default AdminCMS;
