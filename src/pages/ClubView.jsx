import React from 'react';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

function ClubView() {
  return (
    <div>
      <div className="hero-section" style={{minHeight: '40vh'}}>
        <div className="container py-5">
          <div className="row align-items-center py-5 hero-content">
            <div className="col-lg-8 mx-auto text-center">
              <h1 className="display-4 fw-bold mb-3 text-white">Soluciones para Clubes</h1>
              <p className="lead text-white mb-0">
                Moderniza las finanzas de tu club con nuestra plataforma especializada en gestión deportiva
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
            <h2 className="section-heading mb-4">Gestión financiera integral para clubes</h2>
            <p className="lead mb-0">
              Los clubes deportivos enfrentan hoy desafíos únicos en la gestión de sus recursos. 
              FutGen Hub proporciona soluciones tecnológicas avanzadas que simplifican la administración financiera 
              y aseguran el cumplimiento de normativas internacionales.
            </p>
          </div>
        </div>

        <div className="row g-4 mb-5">
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-people"></i>
              </div>
              <h3 className="h4 mb-3">Gestión de Nóminas</h3>
              <p className="text-muted">
                Administra pagos de salarios a jugadores nacionales e internacionales desde una única plataforma simplificada.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Pagos en múltiples divisas</div>
                <div className="badge bg-success">Cumplimiento FIFA/UEFA</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-arrow-left-right"></i>
              </div>
              <h3 className="h4 mb-3">Transferencias Internacionales</h3>
              <p className="text-muted">
                Procesa pagos por fichajes, préstamos y derechos de formación con total transparencia y trazabilidad.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Documentación automatizada</div>
                <div className="badge bg-success">Tasas reducidas</div>
              </div>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4">
            <div className="card feature-card h-100 p-4">
              <div className="feature-icon">
                <i className="bi bi-bar-chart-line"></i>
              </div>
              <h3 className="h4 mb-3">Informes Financieros</h3>
              <p className="text-muted">
                Obtén reportes detallados de ingresos, gastos y proyecciones para cumplir con el fair play financiero.
              </p>
              <div className="mt-auto pt-3 border-top">
                <div className="badge bg-primary mb-1">Dashboards personalizados</div>
                <div className="badge bg-success">Exportación para auditores</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="mb-4">Excelencia en cumplimiento normativo</h3>
            <p>Nuestras soluciones integran automáticamente los requisitos de regulaciones FIFA, UEFA, CONMEBOL y confederaciones regionales, facilitando la gestión de obligaciones administrativas.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <Link to="/contact?type=club" className="btn btn-primary rounded-pill px-4 py-2 gradient-button">Comenzar ahora</Link>
              <Link to="/contact?type=club" className="btn btn-outline-primary rounded-pill px-4 py-2">Agendar demostración</Link>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ClubView; 