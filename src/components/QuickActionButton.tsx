
import React from "react";

interface QuickActionButtonProps {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
}

const QuickActionButton = ({ icon, label, onClick }: QuickActionButtonProps) => {
  return (
    <button 
      onClick={onClick}
      className="flex flex-col items-center bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-sm hover:shadow-md hover:bg-white transition-all duration-200"
    >
      <div className="text-teal mb-1.5 transform transition-transform hover:scale-110">{icon}</div>
      <span className="text-xs font-medium text-navy">{label}</span>
    </button>
  );
};

export default QuickActionButton;
