// src/components/ui/ListHeader.js
import React from 'react';
import AddHabitBox from '../habits/AddHabitBox';
import AddToDoBox from '../todos/AddToDoBox';

const ListHeader = ({ currentView, onToggle, onAddHabit, onAddTodo }) => {
  return (
    <div className="sticky top-0 bg-white z-10">
      <div className="flex justify-center mb-4">
        <button
          className={`py-2 px-4 rounded-l-lg ${currentView === 'habits' ? 'bg-orange-main text-white' : 'bg-orange-200'}`}
          onClick={() => onToggle('habits')}
        >
          Habits
        </button>
        <button
          className={`py-2 px-4 rounded-r-lg ${currentView === 'todos' ? 'bg-orange-main text-white' : 'bg-orange-200'}`}
          onClick={() => onToggle('todos')}
        >
          Todos
        </button>
      </div>
      {currentView === 'habits' ? (
        <AddHabitBox onAdd={onAddHabit} />
      ) : (
        <AddToDoBox onAdd={onAddTodo} />
      )}
    </div>
  );
};

export default ListHeader;
