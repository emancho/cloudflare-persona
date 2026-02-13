import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/NavBar'; // Import NavBar
import './App.css';

import HomePage from './Pages/HomePage';
import AboutPage from './Pages/AboutPage';
import ContactPage from './Pages/ContactPage';
import ProjectsPage from './Pages/ProjectsPage';
import RadioPage from './Pages/RadioPage';
import CrochetPage from './Pages/CrochetCornerPage';
import NotFoundPage from './Pages/NotFoundPage';

function App() {
  return (
    <>
      <NavBar />
      <div className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/radio" element={<RadioPage />} />
          <Route path="/crochet" element={<CrochetPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
