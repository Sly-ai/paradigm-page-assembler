
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useEffect, useState } from "react";

interface LearnMoreContent {
  title: string;
  subtitle: string;
  content: string;
  imageSrc: string;
}

const LearnMore = () => {
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

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0A2463] mb-4">
              {content.title}
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 mb-8">
              {content.subtitle}
            </h2>
            <div className="rounded-lg overflow-hidden mb-8">
              <img
                src={content.imageSrc}
                alt="Learn More"
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                {content.content}
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default LearnMore;
