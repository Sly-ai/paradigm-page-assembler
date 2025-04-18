
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useContentStore } from "@/stores/useContentStore";
import { useToast } from "@/hooks/use-toast";
import { Plus, Trash2 } from "lucide-react";

const MissionEditor = () => {
  const { mission, updateMission } = useContentStore();
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    title: mission.title,
    paragraphs: [...mission.paragraphs]
  });

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      title: e.target.value
    });
  };

  const handleParagraphChange = (index: number, value: string) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs[index] = value;
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const addParagraph = () => {
    setFormData({
      ...formData,
      paragraphs: [...formData.paragraphs, ""]
    });
  };

  const removeParagraph = (index: number) => {
    const newParagraphs = [...formData.paragraphs];
    newParagraphs.splice(index, 1);
    setFormData({
      ...formData,
      paragraphs: newParagraphs
    });
  };

  const handleSubmit = () => {
    // Validate that paragraphs aren't empty
    const validParagraphs = formData.paragraphs.filter(p => p.trim() !== "");
    if (validParagraphs.length === 0) {
      toast({
        title: "Validation Error",
        description: "Please add at least one paragraph of content",
        variant: "destructive"
      });
      return;
    }

    updateMission({
      title: formData.title,
      paragraphs: validParagraphs
    });

    toast({
      title: "Success",
      description: "Mission content has been updated",
    });
  };

  return (
    <Card className="shadow-md">
      <CardHeader>
        <CardTitle>Edit Mission Section</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="mission-title" className="font-medium">
            Mission Title
          </label>
          <Input
            id="mission-title"
            value={formData.title}
            onChange={handleTitleChange}
            placeholder="Our Mission"
          />
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <label className="font-medium">Mission Paragraphs</label>
            <Button 
              onClick={addParagraph} 
              variant="outline" 
              size="sm" 
              className="flex items-center gap-1"
            >
              <Plus className="h-4 w-4" /> Add Paragraph
            </Button>
          </div>

          {formData.paragraphs.map((paragraph, index) => (
            <div key={index} className="space-y-1">
              <div className="flex justify-between items-center">
                <label htmlFor={`paragraph-${index}`} className="text-sm font-medium text-gray-600">
                  Paragraph {index + 1}
                </label>
                {formData.paragraphs.length > 1 && (
                  <Button 
                    onClick={() => removeParagraph(index)} 
                    variant="ghost" 
                    size="sm"
                    className="h-8 text-red-600 hover:text-red-700 hover:bg-red-50"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <Textarea
                id={`paragraph-${index}`}
                value={paragraph}
                onChange={(e) => handleParagraphChange(index, e.target.value)}
                className="min-h-[100px]"
                placeholder="Enter paragraph content..."
              />
            </div>
          ))}
        </div>

        <Button onClick={handleSubmit} className="w-full bg-[#0A2463]">
          Save Changes
        </Button>
      </CardContent>
    </Card>
  );
};

export default MissionEditor;
