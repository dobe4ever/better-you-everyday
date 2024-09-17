// src/components/common/ListsContainer.js
import React, { useRef, useEffect } from 'react';
import HabitsList from '../habits/HabitsList';
import TodosList from '../todos/TodosList';
import { useAppContext } from '../../contexts/AppContext';

const ListsContainer = ({ activeList, setActiveList, hideCompleted }) => {
  const { habits, todos, toggleHabit, toggleTodo, updateHabit, deleteHabit } = useAppContext();
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      const scrollPosition = activeList === 'habits' ? 0 : containerRef.current.scrollWidth / 2;
      containerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeList]);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      const newActiveList = scrollLeft < scrollWidth / 4 ? 'habits' : 'todos';
      if (newActiveList !== activeList) {
        setActiveList(newActiveList);
      }
    }
  };

  return (
    <div className="relative bg-white shadow-lg w-full overflow-hidden">
      <div 
        ref={containerRef}
        className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
        style={{ scrollSnapType: 'x mandatory' }}
        onScroll={handleScroll}
      >
        <div className="flex-shrink-0 w-[90%] snap-center">
          <HabitsList
            habits={habits.filter(habit => !hideCompleted || !habit.isCompleted)}
            onToggle={toggleHabit}
            onUpdate={updateHabit}
            onDelete={deleteHabit}
          />
        </div>
        <div className="flex-shrink-0 w-[90%] snap-center">
          <TodosList
            todos={todos.filter(todo => !hideCompleted || !todo.isCompleted)}
            onToggle={toggleTodo}
          />
        </div>
      </div>
    </div>
  );
};

export default ListsContainer;