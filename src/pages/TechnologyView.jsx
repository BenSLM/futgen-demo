import React from 'react';
import Footer from '../components/Footer';

function TechnologyView() {
  return (
    <div>
      <div className="hero-section" style={{minHeight: '40vh'}}>
        <div className="container py-5">
          <div className="row align-items-center py-5 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">Nuestra Tecnología</h1>
              <p className="lead text-white mb-0">
                Innovación financiera para el mundo del fútbol con soluciones Web3 y blockchain
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
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto text-center">
            <h2 className="section-heading mb-4">Cómo Funciona FutGen Hub</h2>
            <p className="lead mb-0">
              Combinamos tecnologías financieras modernas con soluciones blockchain para crear una plataforma 
              segura, eficiente y accesible para todos los actores del ecosistema del fútbol.
            </p>
          </div>
        </div>

        {/* Diagrama de Flujo */}
        <div className="row mb-5 justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-sm p-4 rounded-4">
              <h3 className="text-center mb-4">Arquitectura de FutGen Hub</h3>
              <div className="row text-center">
                <div className="col-md-3">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                    <i className="bi bi-people-fill fs-1 text-primary"></i>
                  </div>
                  <h5>Usuarios</h5>
                  <p className="small text-muted">Jugadores, Clubes, Agentes</p>
                </div>
                <div className="col-md-3">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                    <i className="bi bi-shield-lock-fill fs-1 text-primary"></i>
                  </div>
                  <h5>Seguridad</h5>
                  <p className="small text-muted">Web3 Auth MPC</p>
                </div>
                <div className="col-md-3">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                    <i className="bi bi-hdd-network-fill fs-1 text-primary"></i>
                  </div>
                  <h5>Red Blockchain</h5>
                  <p className="small text-muted">Tokenización y Contratos</p>
                </div>
                <div className="col-md-3">
                  <div className="bg-light rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '100px', height: '100px'}}>
                    <i className="bi bi-bank fs-1 text-primary"></i>
                  </div>
                  <h5>Banca</h5>
                  <p className="small text-muted">Sistema Financiero Global</p>
                </div>
              </div>
              
              <div className="text-center my-4">
                <i className="bi bi-arrow-down fs-1 text-primary"></i>
              </div>
              
              <div className="bg-primary text-white p-4 rounded-4 text-center">
                <h4 className="mb-0">Transacciones Internacionales Rápidas y Seguras</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default TechnologyView; 