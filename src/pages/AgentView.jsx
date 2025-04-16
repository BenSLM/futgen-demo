import React from 'react';
import Footer from '../components/Footer';

function AgentView() {
  return (
    <div>
      <div className="hero-section" style={{minHeight: '40vh'}}>
        <div className="container py-5">
          <div className="row align-items-center py-5 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">Soluciones para Agentes</h1>
              <p className="lead text-white mb-0">
                Optimiza tus operaciones y maximiza las oportunidades con nuestra plataforma para agentes deportivos
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
            <h2 className="section-heading mb-4">Impulsa tu negocio en el mercado global</h2>
            <p className="lead mb-0">
              FutGen Hub ofrece a los agentes deportivos herramientas financieras avanzadas para gestionar comisiones, 
              transferencias y relaciones con jugadores y clubes de manera eficiente.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-calculator"></i>
              </div>
              <h3 className="h4 mb-3">Seguimiento de Comisiones</h3>
              <p className="text-muted">
                Sistema automatizado para el seguimiento de todas tus comisiones por transferencias, renovaciones y contratos comerciales.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Facturación automática</div>
                <div className="badge bg-success">Notificaciones de cobro</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-calendar-check"></i>
              </div>
              <h3 className="h4 mb-3">Gestión de Contratos</h3>
              <p className="text-muted">
                Almacena y gestiona todos los contratos de tus representados con recordatorios de vencimientos y condiciones clave.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Plantillas personalizables</div>
                <div className="badge bg-success">Firma digital blockchain</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-graph-up"></i>
              </div>
              <h3 className="h4 mb-3">Análisis de Mercado</h3>
              <p className="text-muted">
                Accede a datos actualizados de transferencias mundiales, tendencias salariales y valoraciones de jugadores.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Algoritmos de valoración</div>
                <div className="badge bg-success">Informes personalizados</div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="mb-4">Potencia tu agencia con tecnología financiera avanzada</h3>
            <p>FutGen Hub te ayuda a concentrarte en lo más importante: representar y desarrollar a tus jugadores, mientras nosotros hacemos que el dinero fluya sin obstáculos.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#" className="btn btn-primary rounded-pill px-4 py-2 gradient-button">Comenzar ahora</a>
              <a href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">Solicitar demostración</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default AgentView; 