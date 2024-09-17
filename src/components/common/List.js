// src/components/common/List.js
import React, { useState } from 'react';

const List = ({ title, items, renderItem }) => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const filteredItems = hideCompleted ? items.filter(item => !item.isCompleted) : items;

  return (
    <div className="m-1">
      {/* hide/show completed */}
      {/* <div className="flex justify-between items-center m-2">
        <h2 className="text-style-basic">{title}</h2>
        <button 
          className="text-sm text-gray-600"
          onClick={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </button>
      </div> */}
      {/* list items */}
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;