import './App.css';
import React from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Project from './components/Project';
import Resume from './components/Resume';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Header />} />
          <Route path='/portfolio' element={<Project />} />
          <Route path='/resume' element={<Resume />} />
          <Route path='/contact' element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
