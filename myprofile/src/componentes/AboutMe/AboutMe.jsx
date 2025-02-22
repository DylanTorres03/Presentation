import React from "react";
import "./AboutMe.css";

const AboutMe = () => {
  return (
    <section id="about" className="about-me">
      <div className="about-me-container">
        <h2 className="about-me-title">Sobre Mí</h2>
        <div className="about-me-content">
          <img
            src="tu-foto.jpg"
            alt="Dylan Torres"
            className="about-me-image"
          />
          <p className="about-me-text">
            Soy un desarrollador front-end apasionado por la creación de
            interfaces dinámicas y atractivas. Me encanta aprender nuevas
            tecnologías y trabajar en equipo para crear soluciones innovadoras.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
