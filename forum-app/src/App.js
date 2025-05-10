import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import MyTopicsPage from './pages/MyTopicsPage';
import { DarkModeProvider } from './context/DarkModeContext';
import './assets/css/global.css';

function App() {
  return (
      <DarkModeProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/my-topics" element={<MyTopicsPage />} />
          </Routes>
        </Router>
      </DarkModeProvider>
  );
}

export default App;