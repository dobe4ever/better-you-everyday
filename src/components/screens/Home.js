// src/components/screens/Home.js
import React, { useState } from 'react';
import UserProfile from '../ui/UserProfile';
import ListsContainer from '../common/ListsContainer';
import SecondTop from '../layout/SecondTop';
import { useAppContext } from '../../contexts/AppContext';

function Home() {
  const { habits, todos } = useAppContext();
  const [activeList, setActiveList] = useState('habits');
  const [showCompleted, setShowCompleted] = useState(true);

  const handleAddItem = () => {
    // Implement add functionality
    console.log(`Add new ${activeList.slice(0, -1)}`);
  };

  const handleToggleCompleted = () => {
    setShowCompleted(!showCompleted);
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-shrink-0">
        <UserProfile />
      </div>
      <div className="flex-shrink-0 sticky top-8 z-10 bg-white rounded-3xl rounded-b-none">
        <SecondTop
          activeList={activeList}
          onAddItem={handleAddItem}
          showCompleted={showCompleted}
          onToggleCompleted={handleToggleCompleted}
        />
      </div>
      <div className="flex-grow overflow-hidden">
        <ListsContainer
          activeList={activeList}
          setActiveList={setActiveList}
          showCompleted={showCompleted}
        />
      </div>
    </div>
  );
}

export default Home;