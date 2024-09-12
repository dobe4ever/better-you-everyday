// src/components/screens/Home.js
import React from 'react';
import UserProfile from '../ui/UserProfile';
import ListsContainer from '../common/ListsContainer';

function Home() {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        <UserProfile />
      </div>
      <div className="flex-grow overflow-hidden">
        <ListsContainer />
      </div>
    </div>
  );
}

export default Home;