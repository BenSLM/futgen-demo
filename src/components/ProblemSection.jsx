import React from 'react';

function ProblemSection() {
  return (
    <div className="container-fluid py-5" style={{background: '#f8f9fa'}}>
      <div className="container py-4">
        <h2 className="section-heading text-center display-5 mb-5">Desafíos Financieros</h2>
        
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <p className="lead">
              Los profesionales del fútbol merecen soluciones financieras que faciliten su vida diaria y
              <strong> conecten sin barreras a jugadores con sus familias y responsabilidades</strong>.
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-4">
            <div className="card border-0 shadow-sm rounded-4 p-4">
              <div className="d-flex align-items-center mb-3">
                <div className="rounded-circle p-2 me-3" style={{background: 'var(--btn-gradient)', width: '50px', height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <i className="bi bi-globe text-white fs-4"></i>
                </div>
                <div>
                  <h4 className="mb-0">Superando Barreras Globales</h4>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-0">
                  Los futbolistas profesionales internacionales enfrentan un sistema financiero que no está diseñado para su estilo de vida global. Las soluciones tradicionales imponen obstáculos como regulaciones complejas, procesos de documentación excesivos y verificaciones repetitivas. Nuestro enfoque elimina estas barreras, ofreciendo procesos ágiles y adaptados a la realidad del deportista moderno.
                </p>
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                    <div className="text-center">
                      <h3 className="text-primary mb-0">Transferencias Rápidas</h3>
                      <p className="mb-0">Soluciones globales sin fronteras</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-3 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h3 className="text-primary mb-0">Comisiones Reducidas</h3>
                      <p className="mb-0">Optimiza tus recursos financieros</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <div className="alert" style={{background: 'var(--primary-blue)', color: 'white', borderRadius: '12px'}}>
              <h4 className="mb-3">Beneficios Transformadores</h4>
              <div className="row g-4 justify-content-center">
                <div className="col-md-5">
                  <div className="p-3 bg-white bg-opacity-10 rounded-3">
                    <h5 className="mb-1">Seguridad Financiera</h5>
                    <p className="mb-0">Preparamos a los jugadores para un futuro estable después de su carrera deportiva</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="p-3 bg-white bg-opacity-10 rounded-3">
                    <h5 className="mb-1">Transparencia Total</h5>
                    <p className="mb-0">Protegemos a los clubes con gestión financiera conforme a regulaciones FIFA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProblemSection; 