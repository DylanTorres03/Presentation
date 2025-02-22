import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        // Scroll hacia abajo: ocultar el header
        setIsVisible(false);
      } else {
        // Scroll hacia arriba: mostrar el header
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY); // Actualizar la posición del scroll
    };

    window.addEventListener('scroll', handleScroll); // Escuchar el evento de scroll

    return () => {
      window.removeEventListener('scroll', handleScroll); // Limpiar el evento al desmontar
    };
  }, [lastScrollY]);

  return (
    <header className={`header ${isVisible ? '' : 'header-hidden'}`}>
      <div className="header-container">
        <h1 className="header-title">Dylan Jimenez Torres</h1>
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li><a href="#about" className="header-nav-link">Sobre Mí</a></li>
            <li><a href="#projects" className="header-nav-link">Proyectos</a></li>
            <li><a href="#contact" className="header-nav-link">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;