import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src="" alt="" className="logo" />
          <span className="ms-2 site-name">Matrix</span>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/resources" className="nav-link">Resources</Link>
            <Link to="/assignments" className="nav-link btn-primary">Assignments & Scores</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
