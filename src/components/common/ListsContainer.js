// src/components/common/ListsContainer.js
import React from 'react';
import SideToggle from '../ui/SideToggle'; // Import the SideToggle component

const ListsContainer = () => {
  return (
    <div className="bg-white rounded-3xl rounded-b-none shadow-lg pt-4 px-3 py-3 mt- w-full">
      <SideToggle /> {/* Use the SideToggle component */}
    </div>
  );
};

export default ListsContainer;