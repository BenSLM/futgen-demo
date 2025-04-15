import React from 'react';

function AboutSection() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1556056504-5c7696c4c28d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2076&q=80" 
              alt="Futbolista profesional" 
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6 ps-lg-5 text-start">
            <span className="badge bg-primary text-white mb-3 px-3 py-2">Nuestra Misión</span>
            <h2 className="display-5 fw-bold mb-4">FutGen Hub</h2>
            <p className="lead mb-4">
              La primera plataforma web "All-in-One" orientada al mundo del fútbol. Creamos FutGen Hub tras ver cómo futbolistas profesionales 
              como "RA" (Argentina) y "OS" (Nigeria) tardaron 16 y 27 días respectivamente en enviar dinero a sus familias.
            </p>
            <p className="mb-4">
              Empoderamos a jugadores, clubes y agentes con soluciones financieras resilientes, permitiéndoles gestionar sus recursos de forma transparente y acorde a las regulaciones de FIFA y UEFA.
            </p>
            <div className="d-flex flex-wrap mb-4">
              <div className="me-4 mb-3">
                <div className="display-6 fw-bold text-primary">211</div>
                <p>Países con cobertura</p>
              </div>
              <div className="me-4 mb-3">
                <div className="display-6 fw-bold text-primary">32%</div>
                <p>Clubes con restricciones</p>
              </div>
              <div className="mb-3">
                <div className="display-6 fw-bold text-primary">Web3</div>
                <p>Tecnología segura</p>
              </div>
            </div>
            <a href="#contacto" className="btn btn-primary btn-lg px-4 rounded-pill gradient-button">Súmate a la revolución</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection; 