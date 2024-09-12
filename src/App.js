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