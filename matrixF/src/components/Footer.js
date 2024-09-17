import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container text-center">
        <a href="https://www.linkedin.com/company/matrix-iiits/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon" />
        </a>
        <a href="https://www.instagram.com/matrix_iiits?igsh=ZDNiamJpOTgzejhn " target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <p className="footer-text">© 2024 Matrix. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
