import React from "react";
import { FaInbox } from "react-icons/fa";

const EmptyState = ({
  icon,
  title,
  description,
  buttonText,
  onButtonClick,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-16 px-6 rounded-2xl border border-gray-700/60 bg-gradient-to-b from-gray-900/80 to-gray-950/80 backdrop-blur-xl shadow-xl transition-all duration-300 hover:border-blue-500/30" style={{ boxShadow: "0 10px 40px -10px rgba(0,0,0,0.5)" }}>
      
      <div className="text-6xl text-gray-500/80 mb-4 transition-transform duration-500 hover:scale-110 hover:text-blue-500/80">
        {icon || <FaInbox />}
      </div>

      <h2 className="text-2xl font-extrabold text-white tracking-tight mb-2">
        {title}
      </h2>

      <p className="text-gray-400/90 text-sm max-w-md mb-6 leading-relaxed">
        {description}
      </p>

      {buttonText && typeof onButtonClick === "function" && (
        <button
          onClick={onButtonClick}
          className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 hover:-translate-y-0.5 transition duration-200"
          aria-label={buttonText}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;