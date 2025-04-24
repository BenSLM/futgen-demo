import React from 'react';

function AboutSection() {
  return (
    <div className="container-fluid py-5" style={{background: 'linear-gradient(160deg, var(--primary-blue) 0%, var(--secondary-blue) 100%)'}}>
      <div className="container py-4">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5 mb-lg-0">
            <div className="p-4 p-lg-5 bg-white rounded-5 shadow-sm">
              <h3 className="display-6 fw-bold mb-4">FutGen Hub</h3>
              <p className="lead mb-4">
                Una plataforma que <span className="text-primary fw-semibold">transforma</span> la manera en que jugadores, agentes y clubes manejan sus finanzas a nivel global
              </p>
              
              <div className="row g-4 mt-2">
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
                    <div>
                      <h5 className="mb-1">Soluciones adaptadas</h5>
                      <p className="text-muted mb-0">Creadas para el estilo de vida global del fútbol</p>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="d-flex">
                    <i className="bi bi-check-circle-fill text-success fs-4 me-2"></i>
                    <div>
                      <h5 className="mb-1">Optimización financiera</h5>
                      <p className="text-muted mb-0">Maximiza el valor de cada transacción</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="col-lg-6 text-center text-lg-start">
            <h2 className="display-4 fw-bold text-white mb-4">Nuestra Misión</h2>
            <p className="lead text-white opacity-90 mb-4">
              Empoderar a futbolistas, agentes y clubes con herramientas financieras avanzadas que simplifican transacciones y expanden oportunidades globales
            </p>
            
            <div className="d-flex flex-column flex-md-row gap-4 mt-4">
              <div className="bg-white bg-opacity-10 p-3 rounded-4 text-white text-center text-md-start">
                <h5 className="mb-2">Tecnología de Vanguardia</h5>
                <p className="mb-0">Infraestructura de última generación con enfoque en seguridad y experiencia de usuario</p>
              </div>
              <div className="bg-white bg-opacity-10 p-3 rounded-4 text-white text-center text-md-start">
                <h5 className="mb-2">Cobertura Global</h5>
                <p className="mb-0">Acceso a mercados emergentes y consolidados del fútbol mundial</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection; 