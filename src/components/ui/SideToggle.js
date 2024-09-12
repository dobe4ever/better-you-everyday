// src/components/ui/SideToggle.js
import React, { useState } from 'react';
import HabitsList from '../habits/HabitsList';
import TodosList from '../todos/TodosList';
import ListHeader from './ListHeader';
import { habits as initialHabits, todos as initialTodos } from '../data/dummyData';

const SideToggle = () => {
  const [currentView, setCurrentView] = useState('habits');
  const [habits, setHabits] = useState(initialHabits);
  const [todos, setTodos] = useState(initialTodos);

  const handleToggle = (view) => {
    setCurrentView(view);
  };

  const handleAddHabit = (habit) => {
    setHabits([...habits, habit]);
  };

  const handleAddTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  return (
    <div className="relative w-full">
      <ListHeader
        currentView={currentView}
        onToggle={handleToggle}
        onAddHabit={handleAddHabit}
        onAddTodo={handleAddTodo}
      />
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-300 ease-in-out"
             style={{ transform: `translateX(${currentView === 'todos' ? '-100%' : '0'})` }}>
          <div className="w-full flex-shrink-0">
            <HabitsList
              habits={habits}
              onToggle={() => {}}
              onHighlight={() => {}}
              onSetRecurring={() => {}}
              onDelete={() => {}}
            />
          </div>
          <div className="w-full flex-shrink-0">
            <TodosList
              todos={todos}
              onToggle={() => {}}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideToggle;
