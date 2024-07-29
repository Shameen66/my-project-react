import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginPage from './components/LoginPage';
import FacilityGrid from './components/facility/FacilityGrid';
import ResidentGrid from './components/resident/ResidentGrid';
import ResidentRegistationForm from './components/resident/ResidentRegistrationForm';

function App() {
  return (
    <Routes>
        <Route path= "/login" Component={LoginPage} />
        <Route path="/register-resident" Component={ResidentRegistationForm} />
        <Route path="/viewresident" Component={ResidentGrid} />
        <Route path="/viewfacility" Component={FacilityGrid} />
    </Routes>
  );
}

export default App;
