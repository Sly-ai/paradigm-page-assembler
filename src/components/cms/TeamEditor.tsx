
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useContentStore, CMSTeamMember } from "@/stores/useContentStore";
import { useToast } from "@/hooks/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Pencil, Plus, Trash2, Upload, Save } from "lucide-react";

const TeamEditor = () => {
  const { teamMembers, updateTeamMember, addTeamMember, removeTeamMember } = useContentStore();
  const { toast } = useToast();
  const [editingMember, setEditingMember] = useState<CMSTeamMember | null>(null);
  const [isAdding, setIsAdding] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Get initials from name
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map(word => word[0])
      .join("");
  };

  // Create ID from name
  const createIdFromName = (name: string) => {
    return name.toLowerCase().replace(/\s+/g, '-');
  };

  // Reset form
  const resetForm = () => {
    setEditingMember(null);
    setIsAdding(false);
  };

  // Start adding a new member
  const startAddMember = () => {
    setEditingMember({
      id: "",
      name: "",
      role: ""
    });
    setIsAdding(true);
  };

  // Start editing a member
  const startEditMember = (member: CMSTeamMember) => {
    setEditingMember({...member});
    setIsAdding(false);
  };

  // Handle image upload
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!editingMember) return;
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file type
    if (!file.type.startsWith('image/')) {
      toast({
        title: "Invalid file type",
        description: "Please upload an image file",
        variant: "destructive"
      });
      return;
    }

    // Convert to base64 for storage
    const reader = new FileReader();
    reader.onload = (event) => {
      if (event.target && editingMember) {
        setEditingMember({
          ...editingMember,
          imageSrc: event.target.result as string
        });
      }
    };
    reader.readAsDataURL(file);
  };

  // Handle save
  const handleSave = () => {
    if (!editingMember) return;

    // Validate
    if (!editingMember.name.trim()) {
      toast({
        title: "Validation Error",
        description: "Name is required",
        variant: "destructive"
      });
      return;
    }

    if (!editingMember.role.trim()) {
      toast({
        title: "Validation Error",
        description: "Role is required",
        variant: "destructive"
      });
      return;
    }

    // If adding new member, create ID from name
    if (isAdding) {
      const newMember = {
        ...editingMember,
        id: createIdFromName(editingMember.name)
      };
      addTeamMember(newMember);
      toast({
        title: "Success",
        description: `${newMember.name} added to the team`,
      });
    } else {
      // Update existing member
      updateTeamMember(editingMember.id, editingMember);
      toast({
        title: "Success",
        description: `${editingMember.name}'s information has been updated`,
      });
    }

    resetForm();
  };

  // Handle delete
  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the team?`)) {
      removeTeamMember(id);
      toast({
        title: "Team member removed",
        description: `${name} has been removed from the team`,
      });
    }
  };

  return (
    <div className="space-y-6">
      {!editingMember ? (
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Team Members</CardTitle>
            <Button 
              onClick={startAddMember} 
              className="bg-[#0A2463]"
            >
              <Plus className="h-4 w-4 mr-1" /> Add Team Member
            </Button>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {teamMembers.map((member) => (
                <Card key={member.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center">
                      <Avatar className="h-24 w-24 mb-4 border-2 border-[#0A2463]">
                        {member.imageSrc ? (
                          <AvatarImage src={member.imageSrc} alt={member.name} />
                        ) : (
                          <AvatarFallback className="text-xl bg-[#3E92CC] text-white">
                            {getInitials(member.name)}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <h3 className="text-xl font-semibold text-[#0A2463] mb-1">{member.name}</h3>
                      <p className="text-gray-600 text-center mb-4">{member.role}</p>
                      
                      <div className="flex space-x-2 w-full mt-2">
                        <Button
                          variant="outline"
                          className="flex-1"
                          onClick={() => startEditMember(member)}
                        >
                          <Pencil className="h-4 w-4 mr-1" /> Edit
                        </Button>
                        <Button
                          variant="outline"
                          className="flex-1 text-red-600 border-red-600 hover:bg-red-50"
                          onClick={() => handleDelete(member.id, member.name)}
                        >
                          <Trash2 className="h-4 w-4 mr-1" /> Delete
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}

              {teamMembers.length === 0 && (
                <div className="col-span-full text-center py-8 text-gray-500">
                  No team members available. Click "Add Team Member" to create one.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      ) : (
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>{isAdding ? "Add New Team Member" : `Edit ${editingMember.name}`}</CardTitle>
            <Button 
              variant="outline" 
              onClick={resetForm}
            >
              Cancel
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-2 border-2 border-[#0A2463]">
                  {editingMember.imageSrc ? (
                    <AvatarImage src={editingMember.imageSrc} alt={editingMember.name || "New member"} />
                  ) : (
                    <AvatarFallback className="text-xl bg-[#3E92CC] text-white">
                      {editingMember.name ? getInitials(editingMember.name) : "?"}
                    </AvatarFallback>
                  )}
                </Avatar>
                
                <Button
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={() => fileInputRef.current?.click()}
                >
                  <Upload className="h-4 w-4 mr-1" /> Upload Photo
                </Button>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageUpload}
                />
              </div>
              
              <div className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="member-name" className="font-medium">Name</label>
                  <Input
                    id="member-name"
                    value={editingMember.name}
                    onChange={(e) => setEditingMember({...editingMember, name: e.target.value})}
                    placeholder="Full name"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="member-role" className="font-medium">Role</label>
                  <Input
                    id="member-role"
                    value={editingMember.role}
                    onChange={(e) => setEditingMember({...editingMember, role: e.target.value})}
                    placeholder="Job title or role"
                  />
                </div>
              </div>
              
              <Button 
                onClick={handleSave} 
                className="w-full bg-[#0A2463]"
              >
                <Save className="h-4 w-4 mr-2" />
                {isAdding ? "Add Team Member" : "Save Changes"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default TeamEditor;
