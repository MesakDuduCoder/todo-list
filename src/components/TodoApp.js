import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TodosLogic from './TodosLogic';
import Header from './Header';
import '../css/todoApp.css';
import Profile from './Profile';
import About from './About';

function TodoApp() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route
            path="/"
            element={(
              <>
                <Header />
                <TodosLogic />
              </>
            )}
          />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}

export default TodoApp;
