import React from 'react';

function AboutSection() {
  return (
    <div className="container-fluid bg-light py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <img 
              src="https://images.unsplash.com/photo-1560472355-109703aa3edc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="FutGen Financials" 
              className="img-fluid rounded-4 shadow"
            />
          </div>
          <div className="col-lg-6 ps-lg-5 text-start">
            <h2 className="display-5 fw-bold mb-4">FutGen</h2>
            <p className="lead mb-4">
              En FutGen, ofrecemos una plataforma profesional y accesible para gestionar sus inversiones, 
              asegurando un futuro financiero sólido y confiable para usted y su familia.
            </p>
            <div className="d-flex mb-4">
              <div className="me-4">
                <div className="display-6 fw-bold text-primary">98%</div>
                <p>Satisfacción</p>
              </div>
              <div className="me-4">
                <div className="display-6 fw-bold text-primary">15+</div>
                <p>Años experiencia</p>
              </div>
              <div>
                <div className="display-6 fw-bold text-primary">24/7</div>
                <p>Soporte</p>
              </div>
            </div>
            <a href="#" className="btn btn-primary btn-lg px-4 rounded-pill gradient-button">Conoce más</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection; 