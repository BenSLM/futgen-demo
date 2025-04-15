import React from 'react';

function ProblemSection() {
  return (
    <div className="container-fluid py-5" style={{background: '#f8f9fa'}}>
      <div className="container py-4">
        <h2 className="section-heading text-center display-5 mb-5">El Problema</h2>
        
        <div className="row justify-content-center mb-5">
          <div className="col-lg-10 text-center">
            <p className="lead">
              Cientos de futbolistas profesionales enfrentan diariamente la misma problemática:
              <strong> no pueden enviar dinero a sus familias de manera ágil y económica</strong>.
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
                  <h4 className="mb-0">Los obstáculos globales</h4>
                </div>
              </div>
              <div className="mb-4">
                <p className="mb-0">
                  Futbolistas profesionales internacionales afrontan obstáculos como regulaciones bancarias estrictas, documentación excesiva y verificaciones repetidas al enviar dinero. Sufren altos costos por comisiones y tipos de cambio desfavorables, además de rechazos inexplicables y demoras críticas en las transferencias, que pueden tardar semanas y requerir múltiples intentos.
                </p>
              </div>
              
              <div className="row">
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-3 d-flex align-items-center justify-content-center mb-3 mb-md-0">
                    <div className="text-center">
                      <h3 className="text-danger mb-0">16 días</h3>
                      <p className="mb-0">Caso documentado: Argentina-Tailandia</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="bg-light p-3 rounded-3 d-flex align-items-center justify-content-center">
                    <div className="text-center">
                      <h3 className="text-danger mb-0">27 días</h3>
                      <p className="mb-0">Caso documentado: Nigeria-Italia</p>
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
              <h4 className="mb-3">Consecuencias Graves</h4>
              <div className="row g-4 justify-content-center">
                <div className="col-md-5">
                  <div className="p-3 bg-white bg-opacity-10 rounded-3">
                    <h5 className="mb-1">78%</h5>
                    <p className="mb-0">de jugadores en bancarrota 5 años después del retiro</p>
                  </div>
                </div>
                <div className="col-md-5">
                  <div className="p-3 bg-white bg-opacity-10 rounded-3">
                    <h5 className="mb-1">32%</h5>
                    <p className="mb-0">de clubes argentinos de primera división sancionados por FIFA</p>
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