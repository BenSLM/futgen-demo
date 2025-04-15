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
        
        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 shadow-sm rounded-4 overflow-hidden">
              <div className="card-header bg-primary text-white p-4">
                <h4 className="mb-0">Dashboard de Agente</h4>
              </div>
              <div className="card-body p-0">
                <div className="row g-0">
                  <div className="col-md-3 border-end">
                    <div className="p-4">
                      <h5 className="mb-3">Resumen Financiero</h5>
                      <div className="mb-3">
                        <label className="form-label text-muted small">Comisiones pendientes</label>
                        <div className="h5">€1,250,000</div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label text-muted small">Comisiones cobradas (2023)</label>
                        <div className="h5">€3,780,000</div>
                      </div>
                      <div>
                        <label className="form-label text-muted small">Próximos vencimientos</label>
                        <div className="h5">€450,000</div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-9">
                    <div className="p-4">
                      <h5 className="mb-3">Transferencias en Proceso</h5>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <th>Jugador</th>
                              <th>Club Origen</th>
                              <th>Club Destino</th>
                              <th>Valor</th>
                              <th>Comisión</th>
                              <th>Estado</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Carlos R.</td>
                              <td>Racing FC</td>
                              <td>Sevilla CF</td>
                              <td>€8.5M</td>
                              <td>€850K</td>
                              <td><span className="badge bg-warning">Negociación</span></td>
                            </tr>
                            <tr>
                              <td>Martín L.</td>
                              <td>Boca Juniors</td>
                              <td>Ajax</td>
                              <td>€12M</td>
                              <td>€1.2M</td>
                              <td><span className="badge bg-success">Oferta Aceptada</span></td>
                            </tr>
                            <tr>
                              <td>Rodrigo P.</td>
                              <td>Palmeiras</td>
                              <td>Porto</td>
                              <td>€7M</td>
                              <td>€700K</td>
                              <td><span className="badge bg-info">Revisión Médica</span></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-5">
          <div className="col-lg-10 mx-auto">
            <div className="card border-0 bg-light p-4 rounded-4">
              <h3 className="mb-4">Servicios de transferencias globales</h3>
              <div className="row g-4">
                <div className="col-lg-4">
                  <div className="d-flex">
                    <div className="me-3">
                      <i className="bi bi-bank fs-1 text-primary"></i>
                    </div>
                    <div>
                      <h5>Cuentas Multidivisa</h5>
                      <p className="mb-0 small text-muted">Recibe comisiones en EUR, USD, GBP y otras divisas sin conversiones costosas.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex">
                    <div className="me-3">
                      <i className="bi bi-shield-lock fs-1 text-primary"></i>
                    </div>
                    <div>
                      <h5>Seguridad Avanzada</h5>
                      <p className="mb-0 small text-muted">Protección de datos y transacciones con encriptación Web3 y autenticación multinivel.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="d-flex">
                    <div className="me-3">
                      <i className="bi bi-file-earmark-check fs-1 text-primary"></i>
                    </div>
                    <div>
                      <h5>Cumplimiento FIFA/UEFA</h5>
                      <p className="mb-0 small text-muted">Todas las operaciones cumplen con requisitos regulatorios de asociaciones deportivas y financieras.</p>
                    </div>
                  </div>
                </div>
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