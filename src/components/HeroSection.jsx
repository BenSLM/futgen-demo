import React from 'react';

function HeroSection() {
  return (
    <div className="hero-section">
      <div className="container py-5">
        <div className="row align-items-center py-5 hero-content">
          <div className="col-lg-6 text-start">
            <h1 className="display-3 fw-bold mb-4 text-white">La plataforma financiera para aplicaciones modernas</h1>
            <p className="lead text-white mb-4">
              FutGen centraliza tus inversiones y ofrece una vista clara de tu rendimiento financiero.
            </p>
            <a href="#contacto" className="btn btn-light btn-lg px-4 py-2 rounded-pill">Inicia una prueba gratuita</a>
            <div className="mt-4 text-white-50">Sin tarjeta de crédito requerida</div>
          </div>
          <div className="col-lg-6 d-none d-lg-block">
            <div className="position-relative">
              <div className="position-absolute" style={{top: '10%', right: '10%', zIndex: 3}}>
                <div className="card bg-white p-3 shadow" style={{borderRadius: '12px', width: '280px'}}>
                  <div className="d-flex align-items-center">
                    <div className="rounded-circle bg-warning p-2 me-3">
                      <i className="bi bi-shield-check text-white"></i>
                    </div>
                    <div className="text-start">
                      <h6 className="mb-1">Protección avanzada</h6>
                      <p className="small mb-0 text-muted">Gestión de gastos activada</p>
                    </div>
                  </div>
                </div>
              </div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
                alt="Inversiones seguras" 
                className="img-fluid rounded-4 shadow-lg"
                style={{maxWidth: '90%'}}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="wave-bg">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
        </svg>
      </div>
    </div>
  );
}

export default HeroSection; 