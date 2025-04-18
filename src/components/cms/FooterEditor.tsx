
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContentStore, FooterContent } from "@/stores/useContentStore";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2, Save } from "lucide-react";

const FooterEditor = () => {
  const { footer, updateFooter } = useContentStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState<FooterContent>({...footer});

  // Handle form field changes
  const handleChange = (field: keyof FooterContent, value: string) => {
    setFormData({
      ...formData,
      [field]: value
    });
  };

  // Handle contact info changes
  const handleContactChange = (field: keyof typeof formData.contactInfo, value: string) => {
    setFormData({
      ...formData,
      contactInfo: {
        ...formData.contactInfo,
        [field]: value
      }
    });
  };

  // Handle quick link changes
  const handleQuickLinkChange = (index: number, field: keyof typeof formData.quickLinks[0], value: string) => {
    const updatedLinks = [...formData.quickLinks];
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value
    };
    
    setFormData({
      ...formData,
      quickLinks: updatedLinks
    });
  };

  // Add new quick link
  const addQuickLink = () => {
    setFormData({
      ...formData,
      quickLinks: [
        ...formData.quickLinks,
        { label: "", href: "#" }
      ]
    });
  };

  // Remove quick link
  const removeQuickLink = (index: number) => {
    const updatedLinks = [...formData.quickLinks];
    updatedLinks.splice(index, 1);
    
    setFormData({
      ...formData,
      quickLinks: updatedLinks
    });
  };

  // Save changes
  const saveChanges = () => {
    // Validate company name
    if (!formData.companyName.trim()) {
      toast({
        title: "Validation Error",
        description: "Company name is required",
        variant: "destructive"
      });
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.contactInfo.email)) {
      toast({
        title: "Validation Error",
        description: "Please enter a valid email address",
        variant: "destructive"
      });
      return;
    }

    // Validate quick links
    const invalidLinks = formData.quickLinks.find(link => !link.label.trim() || !link.href.trim());
    if (invalidLinks) {
      toast({
        title: "Validation Error",
        description: "All quick links must have a label and URL",
        variant: "destructive"
      });
      return;
    }

    // Update footer
    updateFooter(formData);
    toast({
      title: "Success",
      description: "Footer content has been updated",
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Edit Footer Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-6">
          {/* Company Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Company Information</h3>
            
            <div className="space-y-2">
              <label htmlFor="company-name" className="font-medium">Company Name</label>
              <Input
                id="company-name"
                value={formData.companyName}
                onChange={(e) => handleChange("companyName", e.target.value)}
                placeholder="Company Name"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="tagline" className="font-medium">Tagline</label>
              <Input
                id="tagline"
                value={formData.tagline}
                onChange={(e) => handleChange("tagline", e.target.value)}
                placeholder="Company Tagline"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="description" className="font-medium">Description</label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Short company description"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">Quick Links</h3>
              <Button
                variant="outline"
                size="sm"
                onClick={addQuickLink}
              >
                <Plus className="h-4 w-4 mr-1" /> Add Link
              </Button>
            </div>
            
            {formData.quickLinks.map((link, index) => (
              <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-3 items-start">
                <div className="col-span-1">
                  <Input
                    value={link.label}
                    onChange={(e) => handleQuickLinkChange(index, "label", e.target.value)}
                    placeholder="Link Label"
                  />
                </div>
                <div className="col-span-1 md:col-span-1">
                  <Input
                    value={link.href}
                    onChange={(e) => handleQuickLinkChange(index, "href", e.target.value)}
                    placeholder="URL or Hash Link (#section)"
                  />
                </div>
                <div className="shrink-0">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={() => removeQuickLink(index)}
                    className="text-red-600 hover:text-red-700 hover:bg-red-50"
                    disabled={formData.quickLinks.length <= 1}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-medium">Contact Information</h3>
            
            <div className="space-y-2">
              <label htmlFor="email" className="font-medium">Email</label>
              <Input
                id="email"
                type="email"
                value={formData.contactInfo.email}
                onChange={(e) => handleContactChange("email", e.target.value)}
                placeholder="contact@example.com"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="phone" className="font-medium">Phone</label>
              <Input
                id="phone"
                value={formData.contactInfo.phone}
                onChange={(e) => handleContactChange("phone", e.target.value)}
                placeholder="+1 (555) 123-4567"
              />
            </div>
          </div>

          {/* Copyright Text */}
          <div className="space-y-2">
            <label htmlFor="copyright" className="font-medium">Copyright Text</label>
            <Input
              id="copyright"
              value={formData.copyright}
              onChange={(e) => handleChange("copyright", e.target.value)}
              placeholder="© 2025 Company Name. All rights reserved."
            />
            <p className="text-xs text-gray-500">
              Use {"{currentYear}"} anywhere in the text to automatically insert the current year.
            </p>
          </div>
        </div>

        <Button onClick={saveChanges} className="w-full bg-[#0A2463]">
          <Save className="h-4 w-4 mr-2" /> Save Changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default FooterEditor;
