
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const NotFoundMessage: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-2xl font-bold text-[#0A2463] mb-4">Team Member Not Found</h1>
      <Link to="/#team">
        <Button className="bg-[#0A2463] hover:bg-[#051a47]">
          <ArrowLeft className="mr-2" size={16} />
          Back to Team
        </Button>
      </Link>
    </div>
  );
};

export default NotFoundMessage;
