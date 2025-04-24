import React from 'react';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className="position-relative">
      <div className="position-absolute w-100 h-100" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1577223625816-6328da27d9ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
        backgroundPosition: 'center 30%',
        backgroundSize: 'cover',
        opacity: '0.15'
      }}></div>
      
      <div className="container-fluid py-5">
        <div className="container py-5">
          <div className="row align-items-center py-5">
            <div className="col-lg-6 text-center text-lg-start position-relative">
              <h1 className="display-3 fw-bold mb-4">Soluciones financieras para el mundo del fútbol</h1>
              <p className="lead mb-4">
                Simplificamos las finanzas para jugadores, agentes y clubes con tecnología de vanguardia que conecta el ecosistema futbolístico global
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-5">
                <Link to="/player" className="btn btn-primary btn-lg px-4 rounded-pill">Para Jugadores</Link>
                <Link to="/agent" className="btn btn-outline-primary btn-lg px-4 rounded-pill">Para Agentes</Link>
                <Link to="/club" className="btn btn-outline-primary btn-lg px-4 rounded-pill">Para Clubes</Link>
              </div>
              
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-4 mt-4">
                <div className="d-flex align-items-center">
                  <i className="bi bi-shield-check fs-3 text-primary me-2"></i>
                  <span>Seguridad Avanzada</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-globe fs-3 text-primary me-2"></i>
                  <span>Cobertura Mundial</span>
                </div>
                <div className="d-flex align-items-center">
                  <i className="bi bi-lightning-charge fs-3 text-primary me-2"></i>
                  <span>Transferencias Rápidas</span>
                </div>
              </div>
            </div>
            
            <div className="col-lg-6 d-none d-lg-block position-relative">
              <div className="position-relative ms-5">
                <div className="bg-primary rounded-5 p-4 shadow-lg position-relative" style={{maxWidth: '500px', zIndex: 3}}>
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-white rounded-circle p-2 me-3">
                      <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Testimonial" className="rounded-circle" width="50" height="50" />
                    </div>
                    <div>
                      <h5 className="mb-0 text-white">Carlos Fuentes</h5>
                      <p className="mb-0 text-white opacity-75">Jugador Profesional</p>
                    </div>
                  </div>
                  <p className="text-white mb-0">
                    "FutGen Hub transformó la manera en que manejo mis finanzas mientras juego en el extranjero. Ahora mi familia tiene acceso inmediato a los recursos que necesitan."
                  </p>
                </div>
                
                <div className="position-absolute bg-white rounded-5 p-4 shadow" style={{bottom: '-30px', right: '30px', maxWidth: '400px', zIndex: 2}}>
                  <h5 className="mb-3">Beneficios Principales</h5>
                  <ul className="list-unstyled mb-0">
                    <li className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Transferencias internacionales optimizadas</span>
                    </li>
                    <li className="d-flex align-items-center mb-2">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Gestión multimoneda integrada</span>
                    </li>
                    <li className="d-flex align-items-center">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <span>Cumplimiento normativo automatizado</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection; 