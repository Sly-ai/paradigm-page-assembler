
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContentStore, ServiceItem } from "@/stores/useContentStore";
import { useToast } from "@/hooks/use-toast";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2, Edit, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Icons that can be used in the services section
const availableIcons = [
  "Briefcase", "BarChart", "LineChart", "PieChart", 
  "Target", "Users", "Globe", "Award", "Star"
];

const ServicesEditor = () => {
  const { services, updateService, addService, removeService } = useContentStore();
  const { toast } = useToast();
  const [editingService, setEditingService] = useState<ServiceItem | null>(null);
  const [newService, setNewService] = useState<boolean>(false);

  // Function to reset the form
  const resetForm = () => {
    setEditingService(null);
    setNewService(false);
  };

  // Create a new empty service
  const createEmptyService = (): ServiceItem => ({
    id: `service-${Date.now()}`,
    title: "",
    icon: "Briefcase",
    sections: []
  });

  // Start editing a service
  const startEditService = (service: ServiceItem) => {
    setEditingService({...service});
    setNewService(false);
  };

  // Start creating a new service
  const startNewService = () => {
    setEditingService(createEmptyService());
    setNewService(true);
  };

  // Add a new section to a service
  const addSectionToService = (type: "text" | "list") => {
    if (!editingService) return;
    
    const newSection = {
      title: "",
      content: type === "text" ? "" : "",
      type,
      listItems: type === "list" ? [""] : undefined
    };
    
    setEditingService({
      ...editingService,
      sections: [...editingService.sections, newSection]
    });
  };

  // Update a section in the editing service
  const updateSection = (index: number, field: string, value: any) => {
    if (!editingService) return;
    
    const updatedSections = [...editingService.sections];
    updatedSections[index] = {
      ...updatedSections[index],
      [field]: value
    };
    
    setEditingService({
      ...editingService,
      sections: updatedSections
    });
  };

  // Add a list item to a section
  const addListItem = (sectionIndex: number) => {
    if (!editingService) return;
    
    const updatedSections = [...editingService.sections];
    const section = updatedSections[sectionIndex];
    
    if (section.type === "list" && section.listItems) {
      section.listItems = [...section.listItems, ""];
      
      setEditingService({
        ...editingService,
        sections: updatedSections
      });
    }
  };

  // Update a list item in a section
  const updateListItem = (sectionIndex: number, itemIndex: number, value: string) => {
    if (!editingService) return;
    
    const updatedSections = [...editingService.sections];
    const section = updatedSections[sectionIndex];
    
    if (section.type === "list" && section.listItems) {
      section.listItems[itemIndex] = value;
      
      setEditingService({
        ...editingService,
        sections: updatedSections
      });
    }
  };

  // Remove a list item from a section
  const removeListItem = (sectionIndex: number, itemIndex: number) => {
    if (!editingService) return;
    
    const updatedSections = [...editingService.sections];
    const section = updatedSections[sectionIndex];
    
    if (section.type === "list" && section.listItems) {
      section.listItems = section.listItems.filter((_, idx) => idx !== itemIndex);
      
      setEditingService({
        ...editingService,
        sections: updatedSections
      });
    }
  };

  // Remove a section from the editing service
  const removeSection = (index: number) => {
    if (!editingService) return;
    
    const updatedSections = [...editingService.sections];
    updatedSections.splice(index, 1);
    
    setEditingService({
      ...editingService,
      sections: updatedSections
    });
  };

  // Save changes to a service
  const saveService = () => {
    if (!editingService) return;
    
    // Validation
    if (!editingService.title.trim()) {
      toast({
        title: "Validation Error",
        description: "Service title is required",
        variant: "destructive"
      });
      return;
    }
    
    if (editingService.sections.length === 0) {
      toast({
        title: "Validation Error",
        description: "Add at least one section",
        variant: "destructive"
      });
      return;
    }
    
    for (const section of editingService.sections) {
      if (!section.title.trim()) {
        toast({
          title: "Validation Error",
          description: "All section titles are required",
          variant: "destructive"
        });
        return;
      }
      
      if (section.type === "text" && !section.content.trim()) {
        toast({
          title: "Validation Error",
          description: `Content is required for section "${section.title}"`,
          variant: "destructive"
        });
        return;
      }
      
      if (section.type === "list" && (!section.listItems || section.listItems.length === 0 || !section.listItems.some(item => item.trim()))) {
        toast({
          title: "Validation Error",
          description: `Add at least one list item for section "${section.title}"`,
          variant: "destructive"
        });
        return;
      }
    }
    
    if (newService) {
      addService(editingService);
      toast({
        title: "Success",
        description: `Service "${editingService.title}" has been created`,
      });
    } else {
      updateService(editingService.id, editingService);
      toast({
        title: "Success",
        description: `Service "${editingService.title}" has been updated`,
      });
    }
    
    resetForm();
  };

  // Handle delete service
  const handleDeleteService = (id: string) => {
    if (window.confirm("Are you sure you want to delete this service?")) {
      removeService(id);
      toast({
        title: "Success",
        description: "Service has been deleted",
      });
    }
  };

  return (
    <div className="space-y-6">
      {!editingService && (
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>Services</CardTitle>
            <Button 
              onClick={startNewService} 
              className="bg-[#0A2463]"
            >
              <Plus className="h-4 w-4 mr-1" /> Add New Service
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {services.map((service) => (
                <div 
                  key={service.id}
                  className="flex items-center justify-between p-4 border rounded-md bg-white"
                >
                  <div>
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-gray-600">{service.sections.length} sections</p>
                  </div>
                  <div className="flex space-x-2">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={() => startEditService(service)}
                    >
                      <Edit className="h-4 w-4 mr-1" /> Edit
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="text-red-600 border-red-600 hover:bg-red-50"
                      onClick={() => handleDeleteService(service.id)}
                    >
                      <Trash2 className="h-4 w-4 mr-1" /> Delete
                    </Button>
                  </div>
                </div>
              ))}

              {services.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No services available. Click "Add New Service" to create one.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      )}

      {editingService && (
        <Card className="shadow-md">
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle>{newService ? "Create New Service" : `Edit Service: ${editingService.title}`}</CardTitle>
            <Button 
              variant="outline" 
              onClick={resetForm}
            >
              Cancel
            </Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="service-title" className="font-medium">
                    Service Title
                  </label>
                  <Input
                    id="service-title"
                    value={editingService.title}
                    onChange={(e) => setEditingService({...editingService, title: e.target.value})}
                    placeholder="e.g., Business Development"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="service-icon" className="font-medium">
                    Icon
                  </label>
                  <Select 
                    value={editingService.icon} 
                    onValueChange={(value) => setEditingService({...editingService, icon: value})}
                  >
                    <SelectTrigger id="service-icon">
                      <SelectValue placeholder="Select icon" />
                    </SelectTrigger>
                    <SelectContent>
                      {availableIcons.map((icon) => (
                        <SelectItem key={icon} value={icon}>
                          {icon}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium">Sections</h3>
                  <div className="flex gap-2">
                    <Button
                      onClick={() => addSectionToService("text")}
                      variant="outline"
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add Text Section
                    </Button>
                    <Button
                      onClick={() => addSectionToService("list")}
                      variant="outline"
                      size="sm"
                    >
                      <Plus className="h-4 w-4 mr-1" /> Add List Section
                    </Button>
                  </div>
                </div>

                <Accordion type="multiple" className="w-full">
                  {editingService.sections.map((section, idx) => (
                    <AccordionItem key={idx} value={`section-${idx}`}>
                      <div className="flex items-center">
                        <AccordionTrigger className="flex-grow">
                          {section.title || `Section ${idx + 1}`}
                        </AccordionTrigger>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeSection(idx);
                          }}
                          className="mr-4 h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                      <AccordionContent>
                        <div className="space-y-4 pt-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium">Section Title</label>
                            <Input
                              value={section.title}
                              onChange={(e) => updateSection(idx, "title", e.target.value)}
                              placeholder="e.g., Investment Advisory"
                            />
                          </div>
                          
                          {section.type === "text" && (
                            <div className="space-y-2">
                              <label className="text-sm font-medium">Content</label>
                              <Textarea
                                value={section.content}
                                onChange={(e) => updateSection(idx, "content", e.target.value)}
                                placeholder="Enter text content..."
                                className="min-h-[100px]"
                              />
                            </div>
                          )}
                          
                          {section.type === "list" && (
                            <div className="space-y-2">
                              <div className="flex justify-between items-center">
                                <label className="text-sm font-medium">List Items</label>
                                <Button
                                  onClick={() => addListItem(idx)}
                                  variant="outline"
                                  size="sm"
                                >
                                  <Plus className="h-4 w-4 mr-1" /> Add Item
                                </Button>
                              </div>
                              
                              <div className="space-y-2">
                                {section.listItems?.map((item, itemIdx) => (
                                  <div key={itemIdx} className="flex gap-2">
                                    <Input
                                      value={item}
                                      onChange={(e) => updateListItem(idx, itemIdx, e.target.value)}
                                      placeholder={`Item ${itemIdx + 1}`}
                                    />
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      onClick={() => removeListItem(idx, itemIdx)}
                                      className="shrink-0 text-red-600 hover:text-red-700 hover:bg-red-50"
                                    >
                                      <Trash2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                {editingService.sections.length === 0 && (
                  <div className="text-center py-4 text-gray-500 border rounded-md">
                    No sections added yet. Add a text or list section to continue.
                  </div>
                )}
              </div>
              
              <Button 
                onClick={saveService} 
                className="w-full bg-[#0A2463]"
              >
                <Save className="h-4 w-4 mr-2" />
                {newService ? "Create Service" : "Save Changes"}
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ServicesEditor;
