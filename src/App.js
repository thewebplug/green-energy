import React from 'react';
// import logo from './logo.svg';
import './styles/style.css'
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import HomeScreen from './components/HomeScreen';
import Header from './partials/Header';
import Footer from './partials/Footer';
import AboutScreen from './components/AboutScreen';
import ServicesScreen from './components/ServicesScreen';
import ProjectScreen from './components/ProjectsScreen';
import ContactScreen from './components/ContactScreen';
import CareersScreen from './components/CareersScreen';
import TrainingScreen from './components/TrainingScreen';
import AdminScreen from './components/AdminScreen';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/services" element={<ServicesScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/careers" element={<CareersScreen />} />
        <Route path="/training" element={<TrainingScreen />} />
        <Route path="/admin" element={<AdminScreen />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
