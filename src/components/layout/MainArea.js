// src/components/layout/MainArea.js
import React from 'react';

function MainArea({ children }) {
  return (
    <div>
      <div className="container">
        {children}
      </div>
    </div>
  );
}
export default MainArea;