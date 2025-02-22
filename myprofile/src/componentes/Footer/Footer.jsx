import React from 'react';
import './Footer.css';

const Footer = () => {
  const email = 'dylantorresatv04@gmail.com'; // Correo definido internamente
  const phone = '+506 6447-3746'; // Número de teléfono

  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">© 2023 Dylan Torres. Todos los derechos reservados.</p>
        <div className="footer-contact">
          <p className="footer-info">Teléfono: {phone}</p>
          <p className="footer-info">Correo: <a href={`mailto:${email}`} className="footer-link">{email}</a></p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/tu-usuario" target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href="https://linkedin.com/in/tu-usuario" target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;