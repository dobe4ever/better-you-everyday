// src/components/ui/UserProfile.js
import React from 'react';
import { Calendar, Target, Trophy } from 'lucide-react';

const UserProfile = ({ 
  userName = "Uh la la",
  progress = 61.8,
  metrics = [
    { icon: Calendar, label: "Habits", value: '1/3' },
    { icon: Target, label: "Todos", value: '2/8' },
    { icon: Trophy, label: "Collabs", value: 5 }
  ],

}) => {
  const segments = 7;
  const filledSegments = Math.floor((progress / 100) * segments);

  return (
    // main card container
    <div className="bg-transparent w-full max-w-5xl overflow-hidden transition-all duration-300 p-2 sm:p-4 mt-4">

      {/* avatar & username */}
      <div className="flex flex-col items-center mb-1">

        {/* avatar + progress elements */}
        <div className="relative w-40 h-40 sm:w-60 sm:h-60 mb-1">
          {/* avatar circle progress */}
          <div className="absolute inset-0 rounded-full" style={{
            background: `conic-gradient(#eea30b ${progress}%, #8f3e1c ${progress}%)`
          }}></div>
          <div className="absolute inset-2 sm:inset-3 bg-orange-main rounded-full"></div>
          <div className="absolute inset-1.5 sm:inset-2.5 bg-white rounded-full overflow-hidden border-0 border-orange-main">
            <img
              src="https://randomuser.me/api/portraits/women/21.jpg"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          {/* avatar bubble progress */}
          <div className="absolute top-0 right-0 bg-yellow-500 rounded-full p-1 sm:p-2">
            <span className="text-white font-bold text-md sm:text-lg">{progress}%</span> 
          </div>
        </div>
        {/* username */}
        <h1 className="text-lg sm:text-xl font-bold text-white">{userName}</h1>
      </div>

      {/* top text above progress bar */}
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm sm:text-base font-medium text-gray-300">4 out of 7</span>
        <span className="text-sm sm:text-base font-medium text-gray-300">{progress}%</span>
      </div>
      {/* progress bar in segments */}
      <div className="w-full h-2 sm:h-3 bg-gray-700 bg-opacity-50 rounded-full overflow-hidden flex">
        {[...Array(segments)].map((_, index) => (
          <div 
            key={index} 
            className={`flex-1 ${index < filledSegments ? 'bg-gradient-to-r from-orange-500 to-yellow-500' : 'bg-transparent'} ${index > 0 ? 'border-2 border-orange-main' : ''}`}
          />
        ))}
      </div>
      {/* 3 col boxes */}
      <div className="flex flex-row gap-2 mt-2 w-full">
        {metrics.map((metric, index) => (
          <div key={index} className="flex-grow bg-gray-800 bg-opacity-50 p-1 rounded-lg flex items-center justify-center"> {/* boxes */}
            <metric.icon className="w-5 h-5 sm:w-6 sm:h-6 text-orange-500 mr-1 sm:mr-2" /> {/* icons */}
            <div>
              <p className="text-xs text-gray-400">{metric.label}</p> {/* labels */}
              <p className="text- font-bold text-white">{metric.value}</p> {/* numbers */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserProfile;