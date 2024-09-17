import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import ResourceList from './components/ResourceList';
import Admin from './components/Admin'; // Import the Admin component

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resources" element={<ResourceList />} />
            <Route path="/admin" element={<Admin />} /> {/* Add route for Admin */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
