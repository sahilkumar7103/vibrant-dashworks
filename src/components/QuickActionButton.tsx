
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
      className="flex flex-col items-center bg-white p-3 rounded-xl shadow-sm hover:bg-lightGray transition-all"
    >
      <div className="text-teal mb-1">{icon}</div>
      <span className="text-xs font-medium text-navy">{label}</span>
    </button>
  );
};

export default QuickActionButton;
