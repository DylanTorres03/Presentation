import emailjs from "emailjs-com";
import React, { useRef, useState } from 'react';
import './Contact.css'; // Asegúrate de tener este archivo para los estilos

const Contact = () => {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Estado para el mensaje de éxito
  const [isFadingOut, setIsFadingOut] = useState(false); // Estado para el efecto de desvanecimiento

  const sendEmail = (e) => {
    e.preventDefault();

    const btn = document.getElementById('button');
    btn.value = 'Enviando...'; // Cambia el texto del botón mientras se envía

    emailjs
      .sendForm(
        'default_service', // Service ID
        'template_8wme07y', // Template ID
        form.current,
        'UQ5zUW4JHlbpTesWW' // User ID
      )
      .then(
        () => {
          btn.value = 'Enviar'; // Restaura el texto del botón
          setShowSuccessMessage(true); // Muestra el mensaje de éxito
          form.current.reset(); // Limpia el formulario

          // Inicia el desvanecimiento después de 2 segundos
          setTimeout(() => {
            setIsFadingOut(true); // Activa el efecto de desvanecimiento
          }, 2000);

          // Oculta el mensaje después de 3 segundos
          setTimeout(() => {
            setShowSuccessMessage(false);
            setIsFadingOut(false); // Restablece el estado de desvanecimiento
          }, 3000);
        },
        (err) => {
          btn.value = 'Enviar'; // Restaura el texto del botón
          alert('Hubo un error al enviar el mensaje: ' + JSON.stringify(err)); // Mensaje de error
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="contact-title">Contacto</h2>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="from_name" // Campo "from_name" (nombre del usuario)
            placeholder="Nombre"
            className="contact-input"
            required
          />
          <input
            type="email"
            name="email" // Campo "email" (correo del usuario)
            placeholder="Correo"
            className="contact-input"
            required
          />
          <textarea
            name="message" // Campo "message" (mensaje del usuario)
            placeholder="Mensaje"
            className="contact-textarea"
            required
          ></textarea>
          <button type="submit" id="button" className="contact-button">
            Enviar
          </button>
        </form>

        {/* Mensaje de éxito con efecto de desvanecimiento */}
        {showSuccessMessage && (
          <div className={`success-message ${isFadingOut ? 'fade-out' : ''}`}>
            ¡Mensaje enviado con éxito!
          </div>
        )}
      </div>
    </section>
  );
};

export default Contact;