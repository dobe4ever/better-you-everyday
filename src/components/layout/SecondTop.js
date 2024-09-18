// src/components/layout/SecondTop.js
import React from 'react';
import { Eye, EyeOff, Plus } from 'lucide-react';

const SecondTop = ({ activeList, onAddItem, showCompleted, onToggleCompleted }) => {
  return (
    // Main container
    <div className="bg-white rounded-3xl rounded-b-none shadow- p-4 pt-9 flex justify-between items-center">

      {/* Right: List name & toggle bttn */}
      <div className="flex flex-col">
        
        {/* List name (Habits or Todos) */}
        <h1 className="text-style-list-name capitalize mb-2">{activeList}</h1>
        
        {/* toggle complete button (eye icon + text label) */}
        <button onClick={onToggleCompleted} className="flex items-center text-gray-400">
          {/* Eye icon */}
          {showCompleted ? <EyeOff size={16} /> : <Eye size={16} />}
          {/* Text label) */}
          <h2 className="text-style-ticks ml-2">Hide Completed</h2>
        </button>

      </div>

      {/* Left: Add button */}
      <button
        onClick={onAddItem}
        className="bg-orange-main text-white rounded-full p-2 shadow-lg hover:bg-orange-dark transition-colors"
      >
        <Plus size={30} />
      </button>

    </div>
  );
};

export default SecondTop;