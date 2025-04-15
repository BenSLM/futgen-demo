import React from 'react';
import Footer from '../components/Footer';

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
              El 32% de los clubes argentinos de primera división han sido sancionados por FIFA debido a problemas en transferencias.
              FutGen Hub ofrece soluciones que aseguran el cumplimiento de normativas internacionales.
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
        
        <div className="row mb-5">
          <div className="col-12">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="row g-0">
                <div className="col-md-6">
                  <div className="card-body p-4 p-lg-5">
                    <h3 className="card-title mb-4">Cuentas bancarias Tier 1</h3>
                    <p className="card-text">
                      Abre cuentas internacionales para tu club en bancos de primer nivel con beneficios exclusivos:
                    </p>
                    <ul className="mb-4">
                      <li>IBANs virtuales en múltiples jurisdicciones</li>
                      <li>Segregación de fondos por categorías</li>
                      <li>Conversión de divisas a tasas preferenciales</li>
                      <li>Conciliación automática con sistemas contables</li>
                    </ul>
                    <a href="#" className="btn btn-primary gradient-button rounded-pill px-4">Solicitar información</a>
                  </div>
                </div>
                <div className="col-md-6 bg-light d-flex align-items-center">
                  <div className="p-4 p-lg-5">
                    <div className="dashboard-mockup">
                      <div className="dashboard-header bg-primary text-white p-3 rounded-top d-flex align-items-center">
                        <i className="bi bi-bank me-2"></i>
                        <span>FutGen Banking</span>
                      </div>
                      <div className="dashboard-body bg-white p-3 rounded-bottom shadow-sm">
                        <div className="mb-3">
                          <small className="text-muted d-block mb-1">Saldo disponible</small>
                          <div className="h4 mb-0">€2,450,000.00</div>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                          <small>Transferencias pendientes</small>
                          <small>€750,000.00</small>
                        </div>
                        <div className="d-flex justify-content-between">
                          <small>Pagos programados</small>
                          <small>€320,000.00</small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 bg-light p-4 rounded-4">
              <div className="row align-items-center">
                <div className="col-lg-8">
                  <h3>Tokenización de activos deportivos</h3>
                  <p>Moderniza la gestión económica de tu club con tecnología blockchain para:</p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul>
                        <li>Derechos económicos</li>
                        <li>Derechos de formación</li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul>
                        <li>Mecanismos de solidaridad</li>
                        <li>Gestión de patrocinios</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 text-center mt-3 mt-lg-0">
                  <div className="badge bg-primary p-3 fs-5 rounded-pill">
                    <i className="bi bi-link-45deg me-2"></i> Blockchain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mx-auto text-center">
            <h3 className="mb-4">Total cumplimiento normativo</h3>
            <p>Todas nuestras soluciones cumplen con las regulaciones de FIFA, UEFA, CONMEBOL y confederaciones regionales, además de normativas GAFI, AML, KYC y KYT.</p>
            <div className="d-flex justify-content-center gap-3 mt-4">
              <a href="#" className="btn btn-primary rounded-pill px-4 py-2 gradient-button">Comenzar ahora</a>
              <a href="#" className="btn btn-outline-primary rounded-pill px-4 py-2">Agendar demostración</a>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default ClubView; 