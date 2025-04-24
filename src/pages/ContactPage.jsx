import React from 'react';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const userType = queryParams.get('type') || 'general';
  
  // Mapeo de tipos de usuario a mensajes específicos
  const messages = {
    player: {
      title: "Comienza como Jugador",
      description: "Estamos aquí para ayudarte a optimizar tus finanzas como futbolista profesional."
    },
    club: {
      title: "Comienza como Club",
      description: "Descubre cómo mejorar la gestión financiera de tu institución."
    },
    agent: {
      title: "Comienza como Agente",
      description: "Potencia tu agencia con nuestras soluciones especializadas para representantes."
    },
    general: {
      title: "Contáctanos",
      description: "Completa el formulario y nos pondremos en contacto contigo rápidamente."
    }
  };

  const currentMessage = messages[userType] || messages.general;

  return (
    <div>
      <div className="hero-section" style={{minHeight: '30vh'}}>
        <div className="container py-5">
          <div className="row align-items-center py-5 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">{currentMessage.title}</h1>
              <p className="lead text-white mb-0">
                {currentMessage.description}
              </p>
            </div>
          </div>
        </div>
        <div className="wave-bg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
          </svg>
        </div>
      </div>

      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow-lg border-0 rounded-4">
              <div className="card-body p-4 p-md-5">
                <h3 className="card-title mb-4 text-center">Formulario de Contacto</h3>
                <form>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="name" className="form-label">Nombre completo</label>
                      <input type="text" className="form-control" id="name" placeholder="Ingresa tu nombre" required />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="email" className="form-label">Correo electrónico</label>
                      <input type="email" className="form-control" id="email" placeholder="Ingresa tu email" required />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label htmlFor="phone" className="form-label">Teléfono</label>
                      <input type="tel" className="form-control" id="phone" placeholder="Ingresa tu teléfono" />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label htmlFor="userType" className="form-label">Tipo de usuario</label>
                      <select className="form-select" id="userType" defaultValue={userType}>
                        <option value="player">Jugador</option>
                        <option value="club">Club</option>
                        <option value="agent">Agente</option>
                        <option value="general">Otro</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">Asunto</label>
                    <input type="text" className="form-control" id="subject" placeholder="Asunto de tu mensaje" required />
                  </div>
                  <div className="mb-4">
                    <label htmlFor="message" className="form-label">Mensaje</label>
                    <textarea className="form-control" id="message" rows="4" placeholder="¿En qué podemos ayudarte?" required></textarea>
                  </div>
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" id="privacyPolicy" required />
                    <label className="form-check-label" htmlFor="privacyPolicy">
                      Acepto la política de privacidad y el tratamiento de mis datos
                    </label>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg w-100 rounded-pill gradient-button">Enviar mensaje</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container-fluid bg-light py-5 mt-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center">
              <h2 className="mb-4">¿Prefieres contactarnos directamente?</h2>
              <div className="row g-4 justify-content-center">
                <div className="col-md-4">
                  <div className="card h-100 border-0 p-4">
                    <div className="text-primary mb-3">
                      <i className="bi bi-envelope-fill fs-1"></i>
                    </div>
                    <h4>Email</h4>
                    <p className="mb-0">contact@futgen.com</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 p-4">
                    <div className="text-primary mb-3">
                      <i className="bi bi-telephone-fill fs-1"></i>
                    </div>
                    <h4>Teléfono</h4>
                    <p className="mb-0">+34 91 123 4567</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card h-100 border-0 p-4">
                    <div className="text-primary mb-3">
                      <i className="bi bi-building fs-1"></i>
                    </div>
                    <h4>Oficina</h4>
                    <p className="mb-0">Calle Innovación 123, Madrid</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ContactPage; 