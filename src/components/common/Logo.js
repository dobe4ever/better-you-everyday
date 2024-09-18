// src/components/common/Logo.js
import React from 'react';

const Logo = () => {
  return (

    <div className="flex h-9">

      {/* Left: Logo icon */}
      <img
        src={`${process.env.PUBLIC_URL}/assets/symbol-white-no-bg.svg`}
        alt="logo"
        className="h-9"
      />
      
      {/* Right: Logo text */}
      <div className="text-white flex flex-col ml-2 h-10">
        {/* Line 1 */}
        <h1 className="text-style-logo">Better You</h1>
        {/* Line 2 */}
        <h2 className="text-style-logo-subline">EVERYDAY</h2>
      </div>
    
    </div>
  );
};

export default Logo;