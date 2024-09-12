// src/contexts/AppContext.js
import React, { createContext, useState, useContext } from 'react';
import { habits as initialHabits, todos as initialTodos } from '../components/data/dummyData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [habits, setHabits] = useState(initialHabits);
  const [todos, setTodos] = useState(initialTodos);

  const toggleHabit = (id) => {
    setHabits(habits.map(habit =>
      habit.id === id ? { ...habit, isCompleted: !habit.isCompleted } : habit
    ));
  };

  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo
    ));
  };

  const updateHabit = (updatedHabit) => {
    setHabits(habits.map(habit =>
      habit.id === updatedHabit.id ? updatedHabit : habit
    ));
  };

  const deleteHabit = (habitId) => {
    setHabits(habits.filter(habit => habit.id !== habitId));
  };

  return (
    <AppContext.Provider value={{
      isLoggedIn, setIsLoggedIn,
      habits, todos,
      toggleHabit, toggleTodo,
      updateHabit, deleteHabit
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);