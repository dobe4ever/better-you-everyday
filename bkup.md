```jsx
// tailwind.config.js
// @type {import('tailwindcss').Config}
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{html,js}"
  ],
  mode: 'jit',
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      variants: {
        extend: {
          scale: ['hover'],
          boxShadow: ['hover'],
        },
      },
      colors: {
        'orange': {
          'main': '#FF5300',
          'light': '#FFB700',
          'tomato': '#8f3e1c',
          'yellow': '#eab308',
        },
      },
      backgroundImage: {
        'gradient-blue': 'linear-gradient(45deg, #faae7b, #432371)',
        'gradient-orange': 'linear-gradient(45deg, #f9a13d, #ee7539, #e55136)',
        'gradient-white': 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
        'gradient-tomato': 'linear-gradient(45deg, #ffd78a, #f4762d)',
        'gradient-pink': 'linear-gradient(45deg, #f74985, #46295c, #5355fb)',
        'artistic-home': "url('/src/assets/background.svg')",
      },
      borderColor: {
        'border-gradient-orange': 'linear-gradient(45deg, #FF5300, #FFB700)',
      },
      fontFamily: {
        'nunito': ['Nunito', 'sans-serif'],
        'sans': ['Inter', 'sans-serif'],
        'heading': ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '16px' }],
        'sm': ['14px', { lineHeight: '20px' }],
        'base': ['16px', { lineHeight: '24px' }],
        'lg': ['18px', { lineHeight: '28px' }],
        'xl': ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
      },
      spacing: {
        '0': '0px',
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '20px',
        '6': '24px',
        '8': '32px',
        '10': '40px',
        '12': '48px',
        '16': '64px',
        '20': '80px',
        '24': '96px',
      },
      borderRadius: {
        'none': '0',
        'sm': '2px',
        'DEFAULT': '4px',
        'md': '6px',
        'lg': '8px',
        'xl': '12px',
        '2xl': '16px',
        'full': '9999px',
      },
    },
  },
  // Define custom plugins for Tailwind CSS
  plugins: [
    // Custom plugin function to add new utility classes
    function({ addUtilities }) {
      // Define new utility classes
      const newUtilities = {
        '.text-style-title-orange': {
          fontSize: '40px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #FF5300, #FFB700)',
          textAlign: 'center',
          color: 'transparent',
        },
        '.text-style-title-white': {
          fontSize: '40px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #FFF3E2, #FFFFE2, #FFFFFF)',
          textAlign: 'left',
          color: 'transparent',
        },
        '.text-style-title-yellow': {
          fontSize: '40px',
          lineHeight: '1', // 1 =  lineHeight to fontSize ratio (40px)
          fontWeight: '900',
          fontFamily: 'Nunito, sans-serif',
          backgroundClip: 'text',
          backgroundImage: 'linear-gradient(45deg, #f74985, #973fc0, #46295c)',
          textAlign: 'center',
          color: 'transparent',
        },
        // Custom class for heading style
        '.text-style-heading': {
          fontSize: '2rem',
          lineHeight: '2.5rem',
          fontWeight: '700',
          fontFamily: 'Nunito, sans-serif',
        },
        // Custom class for subheading style
        '.text-style-subheading': {
          fontSize: '1rem',
          lineHeight: '2rem',
          fontWeight: '600',
          fontFamily: 'Nunito',
        },
        // Custom class for base text style
        '.text-style-base': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '500',
          fontFamily: 'Nunito, sans-serif',
        },
        // Custom class for decor text style
        '.text-style-decor': {
          fontSize: '1rem',
          lineHeight: '1.5rem',
          fontWeight: '600',
          fontFamily: 'Poppins, sans-serif',
        },
      }

      // Add the new utility classes to Tailwind, making them responsive and hoverable
      addUtilities(newUtilities, ['responsive', 'hover'])
    }
  ], // Closing the plugins array
} // Closing the module.exports object
```

```jsx
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './contexts/AppContext';
import TopBar from './components/layout/TopBar';
import FloatButton from './components/layout/FloatButton';
import MainArea from './components/layout/MainArea';
import LoginSignup from './components/screens/LoginSignup';
import Home from './components/screens/Home';
import AICoach from './components/screens/AICoach';

function AppContent() {
  const { isLoggedIn, setIsLoggedIn, habits, todos, toggleHabit, toggleTodo, updateHabit, deleteHabit } = useAppContext();

  if (!isLoggedIn) {
    return <LoginSignup onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-grey-">
      <TopBar />
      <MainArea>
      <Routes>
        <Route path="/" element={
          <div className="bg-orange-main">
            <div className="min-h-full pt-[45px]">
              <Home
                habits={habits}
                todos={todos}
                onToggleHabit={toggleHabit}
                onToggleTodo={toggleTodo}
                onUpdateHabit={updateHabit}
                onDeleteHabit={deleteHabit}
              />
            </div>
          </div>
          } />
        <Route path="/coach" element={<AICoach />} />
        <Route path="/login" element={<LoginSignup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      </MainArea>
      <FloatButton />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppProvider>
        <AppContent />
      </AppProvider>
    </Router>
  );
}

export default App;

```
```jsx
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

```
```jsx
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

```
```jsx
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

```
```jsx
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
```
```jsx
// src/components/common/ListsContainer.js
import React from 'react';
import SideToggle from '../ui/SideToggle'; ```
```jsx
// Import the SideToggle component

const ListsContainer = () => {
  return (
    <div className="bg-white rounded-3xl rounded-b-none shadow-lg pt-4 px-3 py-3 mt- w-full">
      <SideToggle /> {/* Use the SideToggle component */}
    </div>
  );
};

export default ListsContainer;

```
```jsx
// src/components/ui/SideToggle.js
import React, { useState } from 'react';
import HabitsList from '../habits/HabitsList';
import TodosList from '../todos/TodosList'; 
import { habits as initialHabits, todos as initialTodos } from '../data/dummyData';

const SideToggle = () => {
  const [currentView, setCurrentView] = useState('habits');

  const handleToggle = (view) => {
    setCurrentView(view);
  };

  return (
    <div className="relative w-full">
      {/* Toggle Buttons */}
      <div className="flex justify-center mb-4">
        <button 
          className={`py-2 px-4 rounded-l-lg ${currentView === 'habits' ? 'bg-orange-main text-white' : 'bg-orange-200'}`}
          onClick={() => handleToggle('habits')}
        >
          Habits
        </button>
        <button 
          className={`py-2 px-4 rounded-r-lg ${currentView === 'todos' ? 'bg-orange-main text-white' : 'bg-orange-200'}`}
          onClick={() => handleToggle('todos')}
        >
          Todos
        </button>
      </div>

      {/* Content */}
      <div className="overflow-hidden relative">
        <div className="flex transition-transform duration-300 ease-in-out"
             style={{ transform: `translateX(${currentView === 'todos' ? '-100%' : '0'})` }}>
          <div className="w-full flex-shrink-0">
            <HabitsList 
              habits={initialHabits} 
              onToggle={() => {}} ```
```jsx
// Dummy handlers, replace with real handlers if needed
              onHighlight={() => {}}
              onSetRecurring={() => {}}
              onDelete={() => {}}
            />
          </div>
          <div className="w-full flex-shrink-0">
            <TodosList 
              todos={initialTodos} 
              onToggle={() => {}} ```
```jsx
// Dummy handler, replace with real handler if needed
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideToggle;

```
```jsx
// src/components/habits/HabitsList.js
import React, { useState, useCallback } from 'react';
import List from '../common/List';
import HabitCard from './HabitCard';
import HabitCardBack from './HabitCardBack';
import ContextualMenu from '../ui/ContextualMenu';
import AddHabitBox from './AddHabitBox';
import { AlarmClock, Palette, Lock, Calendar, Repeat, Flag, Star, Trash } from 'lucide-react';


const HabitsList = ({ habits, onToggle, onUpdate, onDelete }) => {
  const [selectedHabit, setSelectedHabit] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [selectedHabitId, setSelectedHabitId] = useState(null);

  const handleCardClick = useCallback((habitId) => {
    const habit = habits.find(h => h.id === habitId);
    setSelectedHabit(habit);
  }, [habits]);

  const handleOpenMenu = useCallback((event, habitId) => {
    event.stopPropagation();
    const habit = habits.find(h => h.id === habitId);
    if (!habit) return;

    const rect = event.currentTarget.getBoundingClientRect();
    setMenuPosition({
      x: rect.right,
      y: rect.bottom
    });

    setSelectedHabitId(habitId);
    setMenuOpen(true);
  }, [habits]);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
    setSelectedHabitId(null);
  }, []);

  const handleMenuItemClick = useCallback((action) => {
    const habit = habits.find(h => h.id === selectedHabitId);
    if (!habit) return;

    let updatedHabit;
    switch (action) {
      case 'Highlight':
        updatedHabit = { ...habit, isHighlighted: !habit.isHighlighted };
        break;
      case 'Recurring':
        updatedHabit = { ...habit, isRecurring: !habit.isRecurring };
        break;
      case 'Priority':
        updatedHabit = { ...habit, priority: !habit.priority };
        break;
      case 'Set Deadline':
        updatedHabit = { ...habit, deadline: new Date().toISOString() };
        break;
      case 'Set Reminder':
        updatedHabit = { ...habit, reminder: new Date().toISOString() };
        break;
      case 'Delete':
        onDelete(selectedHabitId);
        break;
      default:
        console.log(`Action ${action} not implemented`);
        return;
    }

    if (updatedHabit) {
      onUpdate(updatedHabit);
    }

    handleCloseMenu();
  }, [selectedHabitId, habits, onUpdate, onDelete, handleCloseMenu]);

  const menuItems = [
    { icon: Star, label: 'Highlight', onClick: () => handleMenuItemClick('Highlight') },
    { icon: Repeat, label: 'Recurring', onClick: () => handleMenuItemClick('Recurring') },
    { icon: Flag, label: 'Priority', onClick: () => handleMenuItemClick('Priority') },
    { icon: Calendar, label: 'Set Deadline', onClick: () => handleMenuItemClick('Set Deadline') },
    { icon: Lock, label: 'Private/Public', onClick: () => handleMenuItemClick('Private/Public') },
    { icon: Palette, label: 'Color', onClick: () => handleMenuItemClick('Color') },
    { icon: AlarmClock, label: 'Set Reminder', onClick: () => handleMenuItemClick('Set Reminder') },
    { icon: Trash, label: 'Delete', onClick: () => handleMenuItemClick('Delete') },
  ];

  return (
    <>
      <AddHabitBox
        onToggle={onToggle}
        onOpenMenu={(event) => handleOpenMenu(event)}
        onCardClick={handleCardClick}
      />
      <List
        title="Habits"
        items={habits}
        renderItem={(habit) => (
          <div id={`habit-${habit.id}`} key={habit.id}>
            <HabitCard
              habit={habit}
              onToggle={onToggle}
              onOpenMenu={(event) => handleOpenMenu(event, habit.id)}
              onCardClick={handleCardClick}
            />
          </div>
        )}
      />
      {selectedHabit && (
        <HabitCardBack
          habit={selectedHabit}
          onClose={() => setSelectedHabit(null)}
        />
      )}
      <ContextualMenu
        isOpen={menuOpen}
        onClose={handleCloseMenu}
        position={menuPosition}
        items={menuItems}
      />
    </>
  );
};

export default HabitsList;

```
```jsx
// src/components/todos/TodosList.js
import React, { useState } from 'react';
import List from '../common/List';
import TodoCard from '../todos/TodoCard';
import AddToDoBox from '../todos/AddToDoBox';
import { todos as initialTodos } from '../data/dummyData';

const TodosList = ({ onToggle, onOpenMenu }) => {
    const [todoList, setTodoList] = useState(initialTodos);

    const handleAddTodo = (title) => {
        if (title.trim()) {
            const newTodo = {
                id: `t${todoList.length + 1}`, ```
```jsx
// Increment ID based on current list size
                title,
                isCompleted: false,
                isRecurring: false,
                hasNotes: false,
                notes: ''
            };
            setTodoList([...todoList, newTodo]);
        }
    };

    const handleEditTodo = (id, newTitle) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, title: newTitle } : todo
        ));
    };

    const handleDeleteTodo = (id) => {
        setTodoList(todoList.filter(todo => todo.id !== id));
    };

    const handleUpdateNotes = (id, notes) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, notes, hasNotes: notes.trim() !== '' } : todo
        ));
    };

    const handleToggleRecurring = (id) => {
        setTodoList(todoList.map(todo => 
            todo.id === id ? { ...todo, isRecurring: !todo.isRecurring } : todo
        ));
    };

    return (
        <>
            <AddToDoBox
                onAdd={handleAddTodo}
            />
            <List
                title="To-Dos"
                items={todoList}
                renderItem={(todo) => (
                    <TodoCard
                        key={todo.id}
                        todo={todo}
                        onToggle={() => setTodoList(todoList.map(t => t.id === todo.id ? {...t, isCompleted: !t.isCompleted} : t))}
                        onEdit={handleEditTodo}
                        onDelete={handleDeleteTodo}
                        onUpdateNotes={handleUpdateNotes}
                        onRepeatToggle={handleToggleRecurring}
                    />
                )}
            />
        </>
    );
};

export default TodosList;
```

```jsx
// src/components/common/List.js
import React, { useState } from 'react';

const List = ({ title, items, renderItem }) => {
  const [hideCompleted, setHideCompleted] = useState(false);
  const filteredItems = hideCompleted ? items.filter(item => !item.isCompleted) : items;

  return (
    <div className="m-2">
      {/* list header */}
      <div className="flex justify-between items-center mb-3">
        <h2 className="text-style-basic">{title}</h2>
        <button 
          className="text-sm text-gray-600"
          onClick={() => setHideCompleted(!hideCompleted)}
        >
          {hideCompleted ? 'Show Completed' : 'Hide Completed'}
        </button>
      </div>
      {/* list items */}
      <div>
        {filteredItems.map((item) => (
          <div key={item.id}>
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
```

```
# context
The home screen (userprofile & listscontainer) scrolls normally behind the topbar & floatingbutton.

# task
We need the toggle button & whichever add box (habit or todo) to stop scrolling when they hit the top, like a header for the corresponding list (habits or todos). Then whichever list, scrolls as needed but within the 'List' component boundaries. 

# instructions
1. Consider breaking components into smaller components or combining components into a new component for the 'list header'
2. Reason out the implementation plan step by step in plain english first
3. List all files that needs to be created and updated including file path & name
```