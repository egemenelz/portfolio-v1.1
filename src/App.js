import './App.css';
import React from 'react';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Project from './components/Project';
import Header from './components/Header';

function App() {
  return (
    <section>
      <Navigation />
      <main>
        <Header />
        <Project />
      </main>
      <Footer />
    </section>
  );
}

export default App;
