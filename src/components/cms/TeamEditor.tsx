
import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";
import { Trash, Plus, Upload } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  imageSrc: string;
}

const TeamEditor: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);
  
  // Load data on component mount
  useEffect(() => {
    const savedTeam = localStorage.getItem("team-data");
    if (savedTeam) {
      setTeamMembers(JSON.parse(savedTeam));
    } else {
      // Default values
      setTeamMembers([
        { id: "1", name: "Ebenezer Tesfaye", role: "Director of Digital Innovation and Technology", imageSrc: "" },
        { id: "2", name: "Natnael Melaku", role: "Director of Business Development and Partnership", imageSrc: "" },
        { id: "3", name: "Sosena Samson", role: "Director of Marketing & Branding", imageSrc: "" },
        { id: "4", name: "Amanuel Melaku", role: "Co-founder & Lead – Behavioural Marketing and Customer Insights", imageSrc: "" }
      ]);
    }
  }, []);

  const addTeamMember = () => {
    const newMember: TeamMember = {
      id: Date.now().toString(),
      name: "",
      role: "",
      imageSrc: ""
    };
    setTeamMembers([...teamMembers, newMember]);
  };

  const removeTeamMember = (id: string) => {
    setTeamMembers(teamMembers.filter(member => member.id !== id));
  };

  const handleMemberChange = (id: string, field: keyof TeamMember, value: string) => {
    setTeamMembers(
      teamMembers.map(member => 
        member.id === id ? { ...member, [field]: value } : member
      )
    );
  };

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    
    if (!file.type.startsWith('image/')) {
      toast.error("Please upload an image file");
      return;
    }
    
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target?.result) {
        handleMemberChange(id, "imageSrc", event.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    localStorage.setItem("team-data", JSON.stringify(teamMembers));
    toast.success("Team members saved successfully!");
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-[#0A2463]">Edit Team Members</h2>
      
      <div className="space-y-4">
        {teamMembers.map((member) => (
          <Card key={member.id} className="overflow-hidden">
            <CardContent className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center">
                <Avatar className="w-24 h-24 mb-2">
                  {member.imageSrc ? (
                    <AvatarImage src={member.imageSrc} alt={member.name} />
                  ) : (
                    <AvatarFallback className="bg-[#3E92CC] text-white text-xl">
                      {member.name?.split(" ").map(n => n[0]).join("")}
                    </AvatarFallback>
                  )}
                </Avatar>
                <label className="cursor-pointer">
                  <div className="flex items-center gap-2 text-sm text-blue-600 hover:text-blue-800">
                    <Upload size={16} />
                    <span>Upload Photo</span>
                  </div>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={(e) => handleImageUpload(member.id, e)}
                  />
                </label>
              </div>
              
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Name
                  </label>
                  <Input 
                    value={member.name} 
                    onChange={(e) => handleMemberChange(member.id, "name", e.target.value)}
                    placeholder="Team Member Name"
                  />
                </div>
                
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <div className="flex gap-2">
                    <Input 
                      value={member.role} 
                      onChange={(e) => handleMemberChange(member.id, "role", e.target.value)}
                      placeholder="Team Member Role"
                      className="flex-1"
                    />
                    <Button 
                      variant="destructive" 
                      size="icon" 
                      onClick={() => removeTeamMember(member.id)}
                    >
                      <Trash size={16} />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="flex gap-4">
        <Button 
          variant="outline" 
          onClick={addTeamMember}
          className="flex items-center gap-1"
        >
          <Plus size={16} />
          Add Team Member
        </Button>
        <Button 
          onClick={handleSave} 
          className="bg-[#0A2463]"
        >
          Save Team Members
        </Button>
      </div>
    </div>
  );
};

export default TeamEditor;
