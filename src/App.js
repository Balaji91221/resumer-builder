import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import NavigationBar from './components/Navbar/NavigationBar';
import Header from './components/Header/Header';
import Resume from './components/Resume/resume';
import Footer from './components/Navbar/footer';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <Router >
      <NavigationBar />
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/" element={<Header />} />
        <Route path="/body" element={<Resume />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* Define other routes as needed */}
   
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
