// src/components/layout/SecondTop.js
// import React from 'react';
// import { Eye, EyeOff, Plus } from 'lucide-react';

// const SecondTop = ({ activeList, onAddItem, showCompleted, onToggleCompleted }) => {
//   return (
//     <div className="bg-white shadow-md p-4 flex justify-between items-center">
//       <h2 className="text-xl font-semibold capitalize">{activeList}</h2>
//       <button
//         onClick={onAddItem}
//         className="bg-orange-main text-white rounded-full p-2 shadow-lg hover:bg-orange-dark transition-colors"
//       >
//         <Plus size={24} />
//       </button>
//       <button
//         onClick={onToggleCompleted}
//         className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
//       >
//         {showCompleted ? <EyeOff size={20} /> : <Eye size={20} />}
//         <span className="ml-2">Completed</span>
//       </button>
//     </div>
//   );
// };

// export default SecondTop;

import React from 'react';
import { Eye, EyeOff, Plus } from 'lucide-react';

const SecondTop = ({ activeList, onAddItem, showCompleted, onToggleCompleted }) => {
  return (
    <div className="bg-white rounded-3xl rounded-b-none shadow- p-4 pt-9 flex justify-between items-center">
      
      <div className="flex flex-col">
        
        <h2 className="text-2xl font-semibold capitalize mb-1">{activeList}</h2>
        <button
          onClick={onToggleCompleted}
          className="flex items-center text-gray-600 hover:text-gray-800 transition-colors"
        >
          {showCompleted ? <EyeOff size={16} /> : <Eye size={16} />}
          <span className="ml-2 text-sm">Completed</span>
        </button>
        
      </div>
      
      <button
        onClick={onAddItem}
        className="bg-orange-main text-white rounded-full p-3 shadow-lg hover:bg-orange-dark transition-colors"
      >
        <Plus size={32} />
      </button>
    
    </div>
  );
};

export default SecondTop;