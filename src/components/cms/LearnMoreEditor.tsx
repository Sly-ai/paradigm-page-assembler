
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

interface LearnMoreContent {
  title: string;
  subtitle: string;
  content: string;
  imageSrc: string;
}

const LearnMoreEditor = () => {
  const [content, setContent] = useState<LearnMoreContent>({
    title: "Learn More About Our Approach",
    subtitle: "Understanding Behavioral Economics in Business",
    content: "At Paradigm Advisory, we combine rigorous academic research with practical business experience to deliver actionable insights. Our approach leverages the latest findings in behavioral economics and psychology to help organizations make better decisions and create more effective strategies.",
    imageSrc: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  });

  useEffect(() => {
    const savedContent = localStorage.getItem("learn-more-content");
    if (savedContent) {
      setContent(JSON.parse(savedContent));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem("learn-more-content", JSON.stringify(content));
    toast.success("Learn More content updated successfully");
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="text-sm font-medium text-gray-700">Title</label>
        <Input
          value={content.title}
          onChange={(e) =>
            setContent((prev) => ({ ...prev, title: e.target.value }))
          }
          className="mt-1"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Subtitle</label>
        <Input
          value={content.subtitle}
          onChange={(e) =>
            setContent((prev) => ({ ...prev, subtitle: e.target.value }))
          }
          className="mt-1"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Image URL</label>
        <Input
          value={content.imageSrc}
          onChange={(e) =>
            setContent((prev) => ({ ...prev, imageSrc: e.target.value }))
          }
          className="mt-1"
          placeholder="Enter image URL"
        />
      </div>

      <div>
        <label className="text-sm font-medium text-gray-700">Content</label>
        <Textarea
          value={content.content}
          onChange={(e) =>
            setContent((prev) => ({ ...prev, content: e.target.value }))
          }
          className="mt-1 h-64"
        />
      </div>

      <Button onClick={handleSave} className="w-full">
        Save Changes
      </Button>
    </div>
  );
};

export default LearnMoreEditor;
